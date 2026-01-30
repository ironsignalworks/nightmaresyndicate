interface WarningBoxProps {
  children: React.ReactNode;
  tag?: string;
}

export function WarningBox({ children, tag = '[REDACTED]' }: WarningBoxProps) {
  return (
    <div className="border border-dashed border-[#242422]/60 bg-[#242422]/50 p-4">
      <div className="flex items-start gap-3">
        <span className="tab-control text-[0.55rem] tracking-[0.3em] uppercase px-3 py-1">
          {tag}
        </span>
        <div className="text-sm text-white">{children}</div>
      </div>
    </div>
  );
}
