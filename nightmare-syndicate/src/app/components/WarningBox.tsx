interface WarningBoxProps {
  children: React.ReactNode;
  tag?: string;
}

export function WarningBox({ children, tag = '[REDACTED]' }: WarningBoxProps) {
  return (
    <div className="border border-dashed border-[#242422]/60 bg-[#242422]/50 p-4">
      <div className="flex items-start gap-3">
        <span className="bg-black text-[#7fd1ae] text-[10px] font-bold shrink-0 px-2 py-1 uppercase tracking-[0.3em] border border-[#7fd1ae]/20">
          {tag}
        </span>
        <div className="text-sm text-[#7fd1ae]">{children}</div>
      </div>
    </div>
  );
}
