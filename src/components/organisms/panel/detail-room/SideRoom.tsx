"use client";

import EditableSideRoom from "@/components/molecules/panel/detail-room/EditableSideRoom";
import InfoSideRoom from "@/components/molecules/panel/detail-room/InfoSideRoom";
import { Room } from "@prisma/client";
import { useState } from "react";

type SideRoomProps = {
  room: Room;
};

export default function SideRoom({ room }: SideRoomProps) {
  const [isEdit, setIsEdit] = useState(false);
  return isEdit ? (
    <EditableSideRoom room={room} onCancel={() => setIsEdit(false)} />
  ) : (
    <InfoSideRoom room={room} onEdit={() => setIsEdit(true)} />
  );
}
