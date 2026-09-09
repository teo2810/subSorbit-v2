import { X } from "lucide-react";
import { cn } from "@/lib/cn";

export function CloseButton({
  onClick,
  className,
  label = "Chiudi",
}: {
  onClick: () => void;
  className?: string;
  label?: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      className={cn(
        "glow-tap flex size-9 shrink-0 items-center justify-center rounded-full bg-white/8 text-fg",
        className,
      )}
    >
      <X className="size-4.5" strokeWidth={2} />
    </button>
  );
}
