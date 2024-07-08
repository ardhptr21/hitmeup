import PanelTitle from "@/components/atoms/typography/PanelTitle";
import CardRoom from "@/components/molecules/card/CardRoom";
import { Button } from "@/components/ui/button";

import { Inbox } from "lucide-react";

export default function Room() {
  return (
    <>
      <section className="container">
        <div className="flex justify-between items-center">
          <PanelTitle>Room</PanelTitle>
          <Button className="gap-2">
            <Inbox /> New Room
          </Button>
        </div>
      </section>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 container my-20">
        <CardRoom
          title="Tempat Bagus di Surabaya"
          slug="tempat-bagus-surabaya"
          isActive={true}
          createdAt="2 days ago"
        />
        <CardRoom
          title="Info Barang Kos Bagus"
          slug="barang-kos"
          isActive={false}
          createdAt="10 days ago"
        />
      </section>
    </>
  );
}
