import PanelTitle from "@/components/atoms/typography/PanelTitle";
import CardRoom from "@/components/molecules/card/CardRoom";
import { Button } from "@/components/ui/button";
import { auth } from "@/lib/auth";
import { getUserRooms } from "@/repositories/room";

import { Inbox } from "lucide-react";
import Link from "next/link";

export default async function Room() {
  const { user } = (await auth())!;
  const rooms = await getUserRooms(user.id);

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
        {rooms.length === 0 ? (
          <div className="flex items-center justify-center col-span-full">
            <p className="text-gray-500 ">You don{"'"}t have any room yet.</p>
          </div>
        ) : (
          rooms.map((room) => (
            <CardRoom
              key={room.id}
              id={room.id}
              title={room.title}
              slug={room.slug}
              isActive={room.isActive}
              createdAt={room.createdAt}
            />
          ))
        )}
      </section>
    </>
  );
}
