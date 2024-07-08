"use client";

import EditableSideRoom from "@/components/molecules/panel/detail-room/EditableSideRoom";
import InfoSideRoom from "@/components/molecules/panel/detail-room/InfoSideRoom";
import { Room } from "@prisma/client";
import { useState } from "react";

type SideRoomProps = {
  userId: number;
  room: Room;
};

export default function SideRoom({ room, userId }: SideRoomProps) {
  const [isEdit, setIsEdit] = useState(false);
  return isEdit ? (
    <EditableSideRoom
      userId={userId}
      room={room}
      onCancel={() => setIsEdit(false)}
    />
  ) : (
    <InfoSideRoom userId={userId} room={room} onEdit={() => setIsEdit(true)} />
  );
}
