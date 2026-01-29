interface StampProps {
  text: string;
  variant?: 'red' | 'white';
}

export function Stamp({ text, variant = 'red' }: StampProps) {
  return (
    <div
      className={`inline-block border px-3 py-1 ${
        variant === 'red'
          ? 'border-[#ff2b2b] text-[#ff2b2b]'
          : 'border-[#e9e9ea] text-[#e9e9ea]'
      }`}
    >
      <span className="text-xs font-bold tracking-wider">{text}</span>
    </div>
  );
}
