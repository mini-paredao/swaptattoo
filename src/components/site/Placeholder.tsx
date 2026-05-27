import { ImageIcon } from "lucide-react";

/**
 * Image slot — substitua trocando o `src` por uma imagem real
 * (ex: importada de @/assets ou colocada em /public).
 */
export function Placeholder({
  label,
  src,
  alt,
  className = "",
  ratio = "aspect-square",
}: {
  label?: string;
  src?: string;
  alt?: string;
  className?: string;
  ratio?: string;
}) {
  if (src) {
    return (
      <img
        src={src}
        alt={alt ?? label ?? ""}
        className={`w-full h-full object-cover ${className}`}
        loading="lazy"
      />
    );
  }
  return (
    <div
      className={`${ratio} w-full grid place-items-center bg-gradient-to-br from-muted to-secondary text-muted-foreground rounded-lg border border-dashed border-border/60 ${className}`}
    >
      <div className="flex flex-col items-center gap-2 p-4 text-center">
        <ImageIcon className="h-8 w-8 opacity-60" />
        <span className="text-xs font-medium opacity-80">{label ?? "Imagem"}</span>
      </div>
    </div>
  );
}