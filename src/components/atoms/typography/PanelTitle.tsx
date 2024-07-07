import { PropsWithChildren } from "react";

export default function PanelTitle({ children }: PropsWithChildren) {
  return <h1 className="text-4xl font-bold">{children}</h1>;
}
