interface StampProps {
  text: string;
  variant?: 'red' | 'white';
}

export function Stamp({ text, variant = 'red' }: StampProps) {
  return (
    <div
      className={`inline-block border px-3 py-1 whitespace-nowrap ${
        variant === 'red'
          ? 'border-[#896000] text-[#896000]'
          : 'border-[#878785] text-[#878785]'
      }`}
    >
      <span className="text-xs font-bold tracking-wider">{text}</span>
    </div>
  );
}
