import type { ReactNode } from "react";

export const Layout = ({ children }: { children: ReactNode }) => {
  return <div className="flex flex-col bg-brand-bg">{children}</div>;
};
