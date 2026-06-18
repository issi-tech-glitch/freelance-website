import { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot, RotateCcw, Maximize2 } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useChat } from '@/contexts/ChatContext';

const WELCOME =
  'Hallo! Ich bin Pia, die KI-Assistentin von Clarissa Heinemann. Ich beantworte gerne deine Fragen zu ihren Leistungen, Projekten und Preisen. Wie kann ich dir helfen?';

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const { messages, isStreaming, sendMessage, clearMessages } = useChat();
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'auto' });
    }
  }, [messages, isOpen]);

  useEffect(() => {
    if (isOpen) {
      const t = setTimeout(() => inputRef.current?.focus(), 150);
      return () => clearTimeout(t);
    }
  }, [isOpen]);

  // Hidden on the dedicated Pia page (all hooks called above)
  if (location.pathname === '/pia') return null;

  const handleInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInput(e.target.value);
    const el = e.target;
    el.style.height = 'auto';
    el.style.height = `${Math.min(el.scrollHeight, 96)}px`;
  };

  const handleSend = async () => {
    const text = input.trim();
    if (!text || isStreaming) return;
    setInput('');
    if (inputRef.current) inputRef.current.style.height = 'auto';
    await sendMessage(text);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {isOpen && (
        <div className="w-[370px] max-h-[520px] bg-background border border-border/60 rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-scale-in">
          {/* Header */}
          <div
            className="flex items-center justify-between px-4 py-3 flex-shrink-0"
            style={{ background: 'var(--gradient-primary)' }}
          >
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                <Bot className="w-4 h-4 text-white" />
              </div>
              <div>
                <p className="text-white font-semibold text-sm leading-none">Pia</p>
                <p className="text-white/70 text-xs mt-0.5">KI-Assistentin</p>
              </div>
            </div>
            <div className="flex items-center gap-0.5">
              {messages.length > 0 && (
                <button
                  onClick={clearMessages}
                  className="text-white/60 hover:text-white transition-colors p-1.5 rounded-lg hover:bg-white/10"
                  title="Gespräch zurücksetzen"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                </button>
              )}
              <button
                onClick={() => { setIsOpen(false); navigate('/pia'); }}
                className="text-white/60 hover:text-white transition-colors p-1.5 rounded-lg hover:bg-white/10"
                title="Vollbild öffnen"
                aria-label="Chat maximieren"
              >
                <Maximize2 className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white/60 hover:text-white transition-colors p-1.5 rounded-lg hover:bg-white/10"
                aria-label="Chat schließen"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-3 min-h-0">
            <BotBubble content={WELCOME} />
            {messages.map((msg, i) =>
              msg.role === 'user' ? (
                <UserBubble key={i} content={msg.content} />
              ) : (
                <BotBubble
                  key={i}
                  content={msg.content}
                  typing={isStreaming && i === messages.length - 1 && msg.content === ''}
                />
              )
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-3 border-t border-border/50 flex gap-2 items-end flex-shrink-0">
            <textarea
              ref={inputRef}
              value={input}
              onChange={handleInput}
              onKeyDown={handleKeyDown}
              placeholder="Frag Pia etwas…"
              rows={1}
              disabled={isStreaming}
              className="flex-1 resize-none rounded-xl border border-border bg-muted/50 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 placeholder:text-muted-foreground disabled:opacity-50 max-h-24"
            />
            <button
              onClick={handleSend}
              disabled={!input.trim() || isStreaming}
              className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 disabled:opacity-40 disabled:cursor-not-allowed transition-all hover:scale-105 active:scale-95"
              style={{ background: 'var(--gradient-primary)' }}
              aria-label="Senden"
            >
              <Send className="w-4 h-4 text-white" />
            </button>
          </div>
        </div>
      )}

      {/* FAB */}
      <button
        onClick={() => setIsOpen(prev => !prev)}
        className="w-14 h-14 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95"
        style={{ background: 'var(--gradient-primary)' }}
        aria-label={isOpen ? 'Chat schließen' : 'Chat mit Pia öffnen'}
      >
        {isOpen ? (
          <X className="w-5 h-5 text-white" />
        ) : (
          <MessageCircle className="w-6 h-6 text-white" />
        )}
      </button>
    </div>
  );
}

function UserBubble({ content }: { content: string }) {
  return (
    <div className="flex justify-end">
      <div
        className="px-3 py-2 rounded-2xl rounded-br-sm max-w-[85%] text-sm text-white"
        style={{ background: 'var(--gradient-primary)' }}
      >
        <p className="whitespace-pre-wrap">{content}</p>
      </div>
    </div>
  );
}

function BotBubble({ content, typing }: { content: string; typing?: boolean }) {
  return (
    <div className="flex gap-2 items-end">
      <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mb-0.5">
        <Bot className="w-3 h-3 text-primary" />
      </div>
      <div className="bg-muted rounded-2xl rounded-bl-sm px-3 py-2 max-w-[85%]">
        {typing ? (
          <TypingDots />
        ) : (
          <p className="whitespace-pre-wrap text-foreground">{content}</p>
        )}
      </div>
    </div>
  );
}

function TypingDots() {
  return (
    <div className="flex gap-1 items-center py-0.5">
      {[0, 150, 300].map(delay => (
        <span
          key={delay}
          className="w-1.5 h-1.5 rounded-full bg-muted-foreground/50 animate-bounce"
          style={{ animationDelay: `${delay}ms` }}
        />
      ))}
    </div>
  );
}
