"use client";

import CardMessageRoom, {
  CardMessageRoomSkeleton,
} from "@/components/molecules/card/CardMessageRoom";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { useGetMessagesRoom } from "@/queries/room/get-messages-room";
import { ExclamationTriangleIcon } from "@radix-ui/react-icons";
import { Info } from "lucide-react";

type MessageListProps = {
  roomId: number;
};

export default function MessageList({ roomId }: MessageListProps) {
  const { data, isPending, isError } = useGetMessagesRoom(
    { roomId },
    { refetchInterval: 1000 * 60 }
  );

  if (isPending) return <MessageListSkeleton />;

  if (isError)
    return (
      <Alert variant="destructive">
        <ExclamationTriangleIcon className="w-4 h-4" />
        <AlertTitle>Error</AlertTitle>
        <AlertDescription>
          {data?.meta.message || "Something went wrong"}
        </AlertDescription>
      </Alert>
    );

  if (data.data.length === 0)
    return (
      <Alert>
        <Info className="w-4 h-4" />
        <AlertTitle>Info</AlertTitle>
        <AlertDescription>
          There is no message yet in this room
        </AlertDescription>
      </Alert>
    );

  return (
    <div className="flex flex-col w-full gap-5">
      {data?.data.map((message) => (
        <CardMessageRoom
          key={message.id}
          message={message.text}
          createdAt={message.createdAt}
        />
      ))}
    </div>
  );
}

const MessageListSkeleton = () => {
  return (
    <div className="flex flex-col w-full gap-5">
      <CardMessageRoomSkeleton />
      <CardMessageRoomSkeleton />
      <CardMessageRoomSkeleton />
      <CardMessageRoomSkeleton />
    </div>
  );
};
