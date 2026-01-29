interface WarningBoxProps {
  children: React.ReactNode;
  tag?: string;
}

export function WarningBox({ children, tag = '[REDACTED]' }: WarningBoxProps) {
  return (
    <div className="border border-dashed border-[#ff2b2b]/50 bg-[#ff2b2b]/5 p-4">
      <div className="flex items-start gap-3">
        <span className="text-[#ff2b2b] text-xs font-bold shrink-0">{tag}</span>
        <div className="text-sm text-[#e9e9ea]">{children}</div>
      </div>
    </div>
  );
}
