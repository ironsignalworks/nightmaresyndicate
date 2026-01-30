interface StampProps {
  text: string;
}

export function Stamp({ text }: StampProps) {
  return (
    <div className="tab-control text-[0.55rem] tracking-[0.3em] uppercase px-3 py-1">
      {text}
    </div>
  );
}
