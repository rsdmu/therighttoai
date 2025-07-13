"use client";
import { createContext, useContext, useState, ReactNode } from "react";

interface ModalContext {
  open: boolean;
  show: () => void;
  hide: () => void;
}

const Context = createContext<ModalContext | undefined>(undefined);

export function EndorseModalProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const show = () => setOpen(true);
  const hide = () => setOpen(false);
  return <Context.Provider value={{ open, show, hide }}>{children}</Context.Provider>;
}

export function useEndorseModal() {
  const ctx = useContext(Context);
  if (!ctx) throw new Error("useEndorseModal must be used within EndorseModalProvider");
  return ctx;
}
