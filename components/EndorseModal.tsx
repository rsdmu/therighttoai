"use client";
import { useEndorseModal } from "./EndorseModalContext";
import EndorseForm from "./EndorseForm";

export default function EndorseModal() {
  const { open, hide } = useEndorseModal();
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
      <div className="relative rounded bg-background p-6 max-h-[90vh] overflow-auto">
        <button
          onClick={hide}
          className="absolute right-2 top-2 text-foreground"
          aria-label="Close"
        >
          ✕
        </button>
        <EndorseForm />
      </div>
    </div>
  );
}
