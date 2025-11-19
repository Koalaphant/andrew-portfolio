type Props = {
  amount?: string;
};

export default function Divider({ amount = "20" }: Props) {
  return (
    <div
      style={{ marginTop: `${amount}px`, marginBottom: `${amount}px` }}
    ></div>
  );
}
