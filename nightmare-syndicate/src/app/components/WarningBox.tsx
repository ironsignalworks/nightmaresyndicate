interface WarningBoxProps {
  children: React.ReactNode;
  tag?: string;
}

export function WarningBox({ children, tag = '[REDACTED]' }: WarningBoxProps) {
  return (
    <div className="border border-dashed border-[#242422]/60 bg-[#242422]/50 p-4">
      <div className="flex items-start gap-3">
        <span className="text-[#896000] text-xs font-bold shrink-0">{tag}</span>
        <div className="text-sm text-[#7fd1ae]">{children}</div>
      </div>
    </div>
  );
}
