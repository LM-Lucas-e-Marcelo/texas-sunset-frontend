import type { ReactNode } from "react";
import { Header } from "../components/header";
import { WhatsAppButton } from "../components/whatsapp-button";

export const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex flex-col bg-brand-bg">
      <Header />

      <main>{children}</main>

      <WhatsAppButton />
    </div>
  );
};
