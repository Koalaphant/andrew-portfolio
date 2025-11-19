type Props = {
  text: string;
  emoji?: string;
};

export default function Title({ text, emoji }: Props) {
  return (
    <div className="my-5">
      <h2 className="text-xl font-bold bg-foreground text-background text-center p-1.5">
        {text} {emoji}
      </h2>
    </div>
  );
}
