import QueryProvider from "@/providers/query-provider";
import { Metadata } from "next";
import { PropsWithChildren } from "react";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata();

export default function RootLayout({ children }: Readonly<PropsWithChildren>) {
  return (
    <html lang="en">
      <body>
        <QueryProvider>{children}</QueryProvider>
        <Toaster richColors />
      </body>
    </html>
  );
}
