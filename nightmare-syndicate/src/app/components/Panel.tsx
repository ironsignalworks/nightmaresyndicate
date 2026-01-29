interface PanelProps {
  children: React.ReactNode;
  className?: string;
}

export function Panel({ children, className = '' }: PanelProps) {
  return (
    <div className={`border border-[#242422]/60 bg-[#242422]/50 p-6 ${className}`}>
      {children}
    </div>
  );
}
