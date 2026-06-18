import { useState, useRef, useEffect } from 'react';
import { Bot, Send, RotateCcw, Loader2, Sparkles } from 'lucide-react';
import { useChat } from '@/contexts/ChatContext';
import { SUGGESTIONS, WELCOME } from '@/constants/pia';

export default function Pia() {
  const [input, setInput] = useState('');
  const { messages, isStreaming, sendMessage, clearMessages } = useChat();
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'auto' });
  }, [messages]);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInput(e.target.value);
    const el = e.target;
    el.style.height = 'auto';
    el.style.height = `${Math.min(el.scrollHeight, 128)}px`;
  };

  const handleSend = async (text?: string) => {
    const msg = (text ?? input).trim();
    if (!msg || isStreaming) return;
    setInput('');
    if (inputRef.current) inputRef.current.style.height = 'auto';
    await sendMessage(msg);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="flex flex-col bg-background" style={{ height: 'calc(100dvh - 80px)', marginTop: '80px' }}>
      <div className="flex flex-col flex-1 max-w-3xl w-full mx-auto overflow-hidden">

        {/* Page header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-border/60 flex-shrink-0">
          <div className="flex items-center gap-3">
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center shadow-md"
              style={{ background: 'var(--gradient-primary)' }}
            >
              <Bot className="w-5 h-5 text-white" />
            </div>
            <div>
              <h1 className="font-semibold text-lg leading-none">Pia</h1>
              <p className="text-muted-foreground text-sm mt-0.5">KI-Assistentin · Clarissa Heinemann</p>
            </div>
          </div>
          {messages.length > 0 && (
            <button
              onClick={clearMessages}
              className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors px-3 py-1.5 rounded-lg hover:bg-muted"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              Zurücksetzen
            </button>
          )}
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto px-6 py-6 flex flex-col gap-4">
          {/* Welcome */}
          <div className="flex gap-3 items-end">
            <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mb-0.5">
              <Bot className="w-4 h-4 text-primary" />
            </div>
            <div className="bg-muted rounded-2xl rounded-bl-sm px-4 py-3 max-w-[80%]">
              <p className="text-sm text-foreground">{WELCOME}</p>
            </div>
          </div>

          {/* Suggestion chips (only when no messages yet) */}
          {messages.length === 0 && (
            <div className="flex flex-col gap-6 mt-4">
              <div className="flex flex-wrap gap-2 pl-11">
                {SUGGESTIONS.map(s => (
                  <button
                    key={s}
                    onClick={() => handleSend(s)}
                    className="text-sm px-3 py-1.5 rounded-full border border-border hover:border-primary/50 hover:bg-primary/5 hover:text-primary transition-all text-muted-foreground"
                  >
                    {s}
                  </button>
                ))}
              </div>
              <div className="flex items-center gap-2 text-muted-foreground/50 justify-center mt-8">
                <Sparkles className="w-4 h-4" />
                <p className="text-xs">Stell Pia eine Frage, um zu beginnen</p>
              </div>
            </div>
          )}

          {messages.map((msg, i) =>
            msg.role === 'user' ? (
              <div key={i} className="flex justify-end">
                <div
                  className="px-4 py-3 rounded-2xl rounded-br-sm max-w-[80%] text-sm text-white"
                  style={{ background: 'var(--gradient-primary)' }}
                >
                  <p className="whitespace-pre-wrap">{msg.content}</p>
                </div>
              </div>
            ) : (
              <div key={i} className="flex gap-3 items-end">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mb-0.5">
                  <Bot className="w-4 h-4 text-primary" />
                </div>
                <div className="bg-muted rounded-2xl rounded-bl-sm px-4 py-3 max-w-[80%]">
                  {isStreaming && i === messages.length - 1 && msg.content === '' ? (
                    <div className="flex gap-1 items-center py-0.5">
                      {[0, 150, 300].map(delay => (
                        <span
                          key={delay}
                          className="w-1.5 h-1.5 rounded-full bg-muted-foreground/50 animate-bounce"
                          style={{ animationDelay: `${delay}ms` }}
                        />
                      ))}
                    </div>
                  ) : (
                    <p className="text-sm text-foreground whitespace-pre-wrap">{msg.content}</p>
                  )}
                </div>
              </div>
            )
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input bar */}
        <div className="px-6 py-4 border-t border-border/60 flex-shrink-0">
          <div className="flex gap-3 items-end">
            <textarea
              ref={inputRef}
              value={input}
              onChange={handleInput}
              onKeyDown={handleKeyDown}
              placeholder="Stell Pia eine Frage…"
              rows={1}
              disabled={isStreaming}
              className="flex-1 resize-none rounded-xl border border-border bg-muted/50 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 placeholder:text-muted-foreground disabled:opacity-50 max-h-32"
            />
            <button
              onClick={() => handleSend()}
              disabled={!input.trim() || isStreaming}
              className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 disabled:opacity-40 disabled:cursor-not-allowed transition-all hover:scale-105 active:scale-95"
              style={{ background: 'var(--gradient-primary)' }}
              aria-label="Senden"
            >
              {isStreaming ? (
                <Loader2 className="w-4 h-4 text-white animate-spin" />
              ) : (
                <Send className="w-4 h-4 text-white" />
              )}
            </button>
          </div>
          <p className="text-xs text-muted-foreground text-center mt-2">
            Enter zum Senden · Shift+Enter für neue Zeile
          </p>
        </div>
      </div>
    </div>
  );
}
