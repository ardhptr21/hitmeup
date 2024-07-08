import PanelTitle from "@/components/atoms/typography/PanelTitle";
import CardRoom from "@/components/molecules/card/CardRoom";
import { Button } from "@/components/ui/button";

import { Inbox } from "lucide-react";
import Link from "next/link";

export default function Room() {
  return (
    <>
      <section className="container">
        <div className="flex items-center justify-between">
          <PanelTitle>Room</PanelTitle>
          <Button asChild className="gap-2">
            <Link href="/panel/room/new">
              <Inbox /> New Room
            </Link>
          </Button>
        </div>
      </section>
      <section className="container grid grid-cols-1 gap-3 my-20 md:grid-cols-2 lg:grid-cols-3">
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
