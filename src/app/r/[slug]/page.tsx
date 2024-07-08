import MessageBox from "@/components/molecules/MessageBox";
import { buildMetadata } from "@/lib/metadata";
import { getRoomBySlugActive } from "@/repositories/room";
import { Metadata } from "next";
import { notFound } from "next/navigation";

type RoomMessageProps = {
  params: { slug: string };
};

export async function generateMetadata({
  params,
}: RoomMessageProps): Promise<Metadata> {
  const room = await getRoomBySlugActive(params.slug);

  if (!room) return notFound();

  return buildMetadata({
    title: room.title,
    description: room.description,
  });
}

export default async function RoomMessage({ params }: RoomMessageProps) {
  const room = await getRoomBySlugActive(params.slug);

  if (!room) return notFound();

  return (
    <main className="container flex justify-center items-center min-h-screen py-20">
      <MessageBox
        title={room.title}
        description={room.description}
        roomId={room.id}
      />
    </main>
  );
}
