interface PanelProps {
  children: React.ReactNode;
  className?: string;
}

export function Panel({ children, className = '' }: PanelProps) {
  return (
    <div className={`border border-[#8a8a8c]/30 bg-[#11131a] p-6 ${className}`}>
      {children}
    </div>
  );
}
