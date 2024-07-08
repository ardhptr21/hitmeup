import PanelTitle from "@/components/atoms/typography/PanelTitle";
import CardMessageRoom from "@/components/molecules/card/CardMessageRoom";
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
        <div className="flex flex-col w-full gap-5">
          <CardMessageRoom message="Coba ke ITS bang, katanya kampus nya bagus." />
          <CardMessageRoom message="btww cafe deket keputih itu enak banget loh, cobain deh." />
          <CardMessageRoom message="ke mall aja sii, ke pakuwon, biar kayak orang elite aowkaowkaowk" />
          <CardMessageRoom message="Dirumah aja lahh. Soalnya rebahan lebih asik hehe" />
        </div>
      </section>
    </>
  );
}
