import PanelTitle from "@/components/atoms/typography/PanelTitle";
import NewRoomForm from "@/components/organisms/panel/new-room/NewRoomForm";
import { auth } from "@/lib/auth";

export default async function NewRoomPanel() {
  const { user } = (await auth())!;

  return (
    <>
      <section className="container">
        <PanelTitle>New Room</PanelTitle>
      </section>
      <NewRoomForm userId={user.id} />
    </>
  );
}
