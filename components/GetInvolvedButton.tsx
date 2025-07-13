"use client";
import { useEndorseModal } from "./EndorseModalContext";

export default function GetInvolvedButton({ className }: { className?: string }) {
  const { show } = useEndorseModal();
  return (
    <button type="button" onClick={show} className={className}>
      Get involved
    </button>
  );
}
