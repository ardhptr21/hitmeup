import QueryProvider from "@/providers/query-provider";
import { Metadata } from "next";
import { PropsWithChildren } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hit Me Up by ardhptr21",
  description:
    "Self project, yes you can `Hit Me Up` with your message. It's totally anonymous, I won't know who you are. You can send me message, when you have the link to the specific topic that will I create later. Enjoy, just `Hit Me Up`!",
};

export default function RootLayout({ children }: Readonly<PropsWithChildren>) {
  return (
    <html lang="en">
      <body>
        <QueryProvider>{children}</QueryProvider>
      </body>
    </html>
  );
}
