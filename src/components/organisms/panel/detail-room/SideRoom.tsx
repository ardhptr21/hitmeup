"use client";

import EditableSideRoom from "@/components/molecules/panel/detail-room/EditableSideRoom";
import InfoSideRoom from "@/components/molecules/panel/detail-room/InfoSideRoom";
import { useState } from "react";

export default function SideRoom() {
  const [isEdit, setIsEdit] = useState(false);
  return isEdit ? (
    <EditableSideRoom onCancel={() => setIsEdit(false)} />
  ) : (
    <InfoSideRoom onEdit={() => setIsEdit(true)} />
  );
}
