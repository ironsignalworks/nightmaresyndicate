import { useState } from 'react';

type LightboxImageProps = {
  src: string;
  alt: string;
  className?: string;
  imageClassName?: string;
};

export function LightboxImage({
  src,
  alt,
  className = '',
  imageClassName = 'object-cover',
}: LightboxImageProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className={`relative overflow-hidden focus:outline-none ${className}`}
      >
        <img src={src} alt={alt} className={`w-full ${imageClassName}`} />
        <span className="absolute bottom-2 right-2 bg-black/70 text-white text-[10px] px-2 py-1 tracking-[0.3em] uppercase">
          zoom
        </span>
      </button>
      {open && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-6"
          onClick={() => setOpen(false)}
          role="button"
          tabIndex={0}
          aria-label="Close image preview"
        >
          <img
            src={src}
            alt={alt}
            className="max-h-full max-w-full object-contain"
            onClick={(event) => event.stopPropagation()}
          />
        </div>
      )}
    </>
  );
}
