import { useState } from "react";
import { Placeholder } from "./Placeholder";

export type GalleryImage = { src?: string; alt?: string; label?: string };

export function Gallery({ images }: { images: GalleryImage[] }) {
  const [active, setActive] = useState(0);
  const main = images[active];
  return (
    <div className="flex flex-col gap-4">
      <div className="relative overflow-hidden rounded-2xl border border-border/60 bg-card shadow-card">
        <div className="aspect-square w-full">
          <Placeholder
            label={main?.label ?? `Imagem ${active + 1}`}
            src={main?.src}
            alt={main?.alt}
            ratio="aspect-square"
            className="rounded-2xl"
          />
        </div>
      </div>
      <div className="grid grid-cols-5 sm:grid-cols-6 gap-2">
        {images.map((img, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={`overflow-hidden rounded-lg border-2 transition ${
              i === active ? "border-primary" : "border-border/40 hover:border-border"
            }`}
            aria-label={`Ver imagem ${i + 1}`}
          >
            <Placeholder
              label={`${i + 1}`}
              src={img.src}
              alt={img.alt}
              ratio="aspect-square"
            />
          </button>
        ))}
      </div>
    </div>
  );
}