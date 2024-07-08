import { auth } from "@/lib/auth";
import { getMessagesByRoom } from "@/repositories/messages";
import { isRoomWithUserExists } from "@/repositories/room";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (
  req: NextRequest,
  { params }: { params: { roomId: string } }
) => {
  const session = await auth();
  if (!session) {
    return NextResponse.json({
      meta: { status: 401, success: false, message: "Unauthorized" },
    });
  }

  const roomId = parseInt(params.roomId);

  const roomExsists = await isRoomWithUserExists(session.user.id, roomId);

  if (!roomExsists) {
    return NextResponse.json({
      meta: { status: 404, success: false, message: "Room not found" },
    });
  }

  const messages = await getMessagesByRoom(roomId);

  return NextResponse.json({
    meta: { status: 200, success: true, message: "OK" },
    data: messages,
  });
};
