"use client";
import { ReactNode } from "react";
import { EndorseModalProvider } from "./EndorseModalContext";
import EndorseModal from "./EndorseModal";

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <EndorseModalProvider>
      {children}
      <EndorseModal />
    </EndorseModalProvider>
  );
}
