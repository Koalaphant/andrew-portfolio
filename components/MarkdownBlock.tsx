import ReactMarkdown, { type Components } from "react-markdown";

type MarkdownBlockProps = {
  content: string;
  components?: Components;
};

const defaultComponents: Components = {
  h2: ({ children, ...props }) => (
    <p className="mb-2 text-[1.35rem] font-bold" {...props}>
      {children}
    </p>
  ),
  hr: () => (
    <hr className="my-0 border-0 border-t border-neutral-200 dark:border-neutral-800" />
  ),
  p: ({ children, ...props }) => (
    <p className="mb-2 text-[0.95rem] leading-relaxed last:mb-0" {...props}>
      {children}
    </p>
  ),
};

export default function MarkdownBlock({
  content,
  components,
}: MarkdownBlockProps) {
  return (
    <ReactMarkdown components={{ ...defaultComponents, ...components }}>
      {content}
    </ReactMarkdown>
  );
}
