import { createContext, useContext, useState, useCallback, useRef, ReactNode } from 'react';

export interface Message {
  role: 'user' | 'assistant';
  content: string;
}

interface ChatContextType {
  messages: Message[];
  isStreaming: boolean;
  sendMessage: (text: string) => Promise<void>;
  clearMessages: () => void;
}

const API_URL = 'https://cv.api.clarissa-heinemann.de/api/chat';

const ChatContext = createContext<ChatContextType | null>(null);

export function ChatProvider({ children }: { children: ReactNode }) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isStreaming, setIsStreaming] = useState(false);
  // ref keeps a sync-readable copy so sendMessage doesn't need messages as a dep
  const messagesRef = useRef<Message[]>([]);

  const syncSet = (updater: (prev: Message[]) => Message[]) => {
    setMessages(prev => {
      const next = updater(prev);
      messagesRef.current = next;
      return next;
    });
  };

  const sendMessage = useCallback(async (text: string) => {
    if (!text.trim() || isStreaming) return;

    const userMessage: Message = { role: 'user', content: text.trim() };
    const messagesToSend = [...messagesRef.current, userMessage];

    syncSet(prev => [...prev, userMessage, { role: 'assistant', content: '' }]);
    setIsStreaming(true);

    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: messagesToSend }),
      });

      if (!response.ok || !response.body) {
        throw new Error(`HTTP ${response.status}`);
      }

      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      let received = false;

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        const chunk = decoder.decode(value, { stream: true });
        if (chunk) received = true;
        setMessages(prev => {
          const updated = [...prev];
          const last = updated[updated.length - 1];
          if (last?.role === 'assistant') {
            updated[updated.length - 1] = { ...last, content: last.content + chunk };
          }
          messagesRef.current = updated;
          return updated;
        });
      }

      if (!received) throw new Error('Leere Antwort');
    } catch (err) {
      if ((err as Error).name !== 'AbortError') {
        syncSet(prev => {
          const updated = [...prev];
          const last = updated[updated.length - 1];
          if (last?.role === 'assistant' && last.content === '') {
            updated[updated.length - 1] = {
              ...last,
              content: 'Es ist ein Fehler aufgetreten. Bitte versuche es später erneut.',
            };
          }
          return updated;
        });
      }
    } finally {
      setIsStreaming(false);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isStreaming]);

  const clearMessages = useCallback(() => {
    setMessages([]);
    messagesRef.current = [];
  }, []);

  return (
    <ChatContext.Provider value={{ messages, isStreaming, sendMessage, clearMessages }}>
      {children}
    </ChatContext.Provider>
  );
}

export function useChat() {
  const ctx = useContext(ChatContext);
  if (!ctx) throw new Error('useChat muss innerhalb von ChatProvider verwendet werden');
  return ctx;
}
