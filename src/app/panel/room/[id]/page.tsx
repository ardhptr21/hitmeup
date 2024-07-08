import PanelTitle from "@/components/atoms/typography/PanelTitle";
import MessageList from "@/components/organisms/panel/detail-room/MessageList";
import SideRoom from "@/components/organisms/panel/detail-room/SideRoom";
import { auth } from "@/lib/auth";
import { detailUserRoom } from "@/repositories/room";
import { notFound } from "next/navigation";

export default async function DetailRoomPanel({
  params,
}: {
  params: { id: string };
}) {
  const { user } = (await auth())!;
  const room = await detailUserRoom(user.id, parseInt(params.id));

  if (!room) return notFound();

  return (
    <>
      <section className="container">
        <PanelTitle>Detail Room</PanelTitle>
      </section>
      <section className="container flex flex-col items-start gap-10 my-10 lg:flex-row">
        <SideRoom room={room} />
        <MessageList roomId={room.id} />
      </section>
    </>
  );
}
