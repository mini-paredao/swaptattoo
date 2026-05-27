import { Hourglass } from "lucide-react";
import { useEffect, useState } from "react";

function pad(n: number) {
  return n.toString().padStart(2, "0");
}

export function Countdown({ minutes = 14 }: { minutes?: number }) {
  const [seconds, setSeconds] = useState(minutes * 60);
  useEffect(() => {
    const t = setInterval(() => setSeconds((s) => (s > 0 ? s - 1 : 0)), 1000);
    return () => clearInterval(t);
  }, []);
  const h = Math.floor(seconds / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = seconds % 60;
  return (
    <div className="inline-flex items-center gap-2 text-sm sm:text-base font-semibold text-foreground/90">
      <Hourglass className="h-4 w-4 text-primary animate-pulse" />
      <span>Oferta termina em</span>
      <span className="font-mono font-bold text-primary tabular-nums">
        {pad(h)}:{pad(m)}:{pad(s)}
      </span>
    </div>
  );
}