import PanelBar from "@/components/molecules/navbar/PanelBar";
import { PropsWithChildren } from "react";

export default function PanelLayout({ children }: Readonly<PropsWithChildren>) {
  return (
    <>
      <PanelBar />
      <main className="min-h-[calc(100vh-4rem)] bg-muted/40 py-16">
        {children}
      </main>
    </>
  );
}
