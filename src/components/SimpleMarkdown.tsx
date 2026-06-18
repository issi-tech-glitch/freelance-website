import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

// Parses **bold** and *italic* within a single line of text.
// The regex matches **bold** first (greedy priority) so *italic* never
// accidentally consumes the inner chars of **bold**.
function parseInline(text: string): ReactNode[] {
  const parts: ReactNode[] = [];
  const regex = /\*\*(.+?)\*\*|\*(.+?)\*/g;
  let last = 0;
  let i = 0;

  for (const m of text.matchAll(regex)) {
    if (m.index! > last) parts.push(text.slice(last, m.index));
    if (m[1] !== undefined) {
      parts.push(<strong key={i} className="font-semibold">{m[1]}</strong>);
    } else {
      parts.push(<em key={i}>{m[2]}</em>);
    }
    last = m.index! + m[0].length;
    i++;
  }

  if (last < text.length) parts.push(text.slice(last));
  return parts;
}

interface SimpleMarkdownProps {
  content: string;
  className?: string;
}

export function SimpleMarkdown({ content, className }: SimpleMarkdownProps) {
  const lines = content.split('\n');
  const nodes: ReactNode[] = [];
  let listItems: ReactNode[] = [];
  let listType: 'ul' | 'ol' | null = null;

  const flushList = (key: string) => {
    if (!listType) return;
    const cls = 'my-1 space-y-0.5 ' + (listType === 'ul' ? 'list-disc list-inside' : 'list-decimal list-inside');
    const Tag = listType;
    nodes.push(<Tag key={key} className={cls}>{listItems}</Tag>);
    listItems = [];
    listType = null;
  };

  lines.forEach((line, i) => {
    // /^[*-]\s+/ requires whitespace after the *, so **bold** is never a bullet
    const bulletMatch = line.match(/^[*-]\s+(.*)/);
    const numberedMatch = line.match(/^\d+\.\s+(.*)/);

    if (bulletMatch) {
      if (listType === 'ol') flushList(`list-${i}`);
      listType = 'ul';
      listItems.push(<li key={i} className="leading-relaxed">{parseInline(bulletMatch[1])}</li>);
    } else if (numberedMatch) {
      if (listType === 'ul') flushList(`list-${i}`);
      listType = 'ol';
      listItems.push(<li key={i} className="leading-relaxed">{parseInline(numberedMatch[1])}</li>);
    } else {
      flushList(`list-${i}`);
      if (line.trim() === '') {
        if (nodes.length > 0 && i < lines.length - 1) {
          nodes.push(<div key={`sp-${i}`} className="h-1" />);
        }
      } else {
        nodes.push(
          <p key={i} className="leading-relaxed mb-0.5 last:mb-0">
            {parseInline(line)}
          </p>
        );
      }
    }
  });

  flushList('list-end');

  return <div className={cn('text-sm', className)}>{nodes}</div>;
}
