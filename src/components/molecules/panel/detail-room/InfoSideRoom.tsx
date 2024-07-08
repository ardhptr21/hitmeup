"use client";

import { setRoomActiveAction } from "@/actions/room";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn, relativeToAppURL } from "@/lib/utils";
import { Room } from "@prisma/client";
import { formatDistanceToNow } from "date-fns";
import {
  Calendar,
  CircleCheckBig,
  Copy,
  Lock,
  LockOpen,
  Pencil,
} from "lucide-react";
import { useAction } from "next-safe-action/hooks";
import { useMemo, useState } from "react";
import { toast } from "sonner";
import DeleteRoom from "./DeleteRoom";

type InfoSideRoomProps = {
  userId: number;
  room: Room;
  onEdit?: () => void;
};

export default function InfoSideRoom({
  userId,
  room,
  onEdit,
}: InfoSideRoomProps) {
  const [copied, setCopied] = useState(false);
  const roomURL = useMemo(() => relativeToAppURL("r", room.slug), [room.slug]);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(roomURL);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const { execute: setRoomActive, isExecuting } = useAction(
    setRoomActiveAction,
    {
      onSuccess: () => {
        toast.success("Change room active state success.");
      },
      onError: (error) => {
        toast.error(error.error.fetchError);
      },
    }
  );

  return (
    <Card className="w-full top-24 lg:max-w-xl lg:sticky">
      <CardHeader>
        <CardTitle className="text-2xl">{room.title}</CardTitle>
        <CardDescription className="text-lg">
          {room.description}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-between gap-2 px-5 py-2 bg-muted rounded-xl">
          <p className="w-full overflow-hidden overflow-x-scroll text-nowrap text-muted-foreground no-scrollbar">
            {roomURL}
          </p>
          <Button variant="ghost" size="icon" onClick={copyToClipboard}>
            {copied ? (
              <CircleCheckBig className="w-5 h-5 text-green-400" />
            ) : (
              <Copy className="w-5 h-5" />
            )}
          </Button>
        </div>
      </CardContent>
      <CardFooter className="flex-col items-stretch gap-5">
        <div className="flex items-center justify-between w-full">
          <p className="flex items-center text-sm text-muted-foreground">
            <Calendar className="w-4 h-4" />
            <span className="ml-2">
              Created {formatDistanceToNow(room.createdAt)}
            </span>
          </p>
          <div className="flex items-center gap-2">
            <div
              className={cn(
                "h-3 w-3 rounded-full",
                room.isActive ? "bg-green-500 animate-pulse" : "bg-destructive"
              )}
            ></div>
            <p className="text-muted-foreground">
              {room.isActive ? "Active" : "Inactive"}
            </p>
          </div>
        </div>
        <div className="flex flex-col w-full gap-3 md:gap-5 md:flex-row">
          <DeleteRoom userId={userId} roomId={room.id} disabled={isExecuting} />
          <Button
            className="w-full gap-2"
            onClick={onEdit}
            disabled={isExecuting}
          >
            <Pencil className="w-4 h-4" />
            Edit
          </Button>
          <Button
            className="w-full gap-2"
            variant="outline"
            disabled={isExecuting}
            onClick={() =>
              setRoomActive({
                roomId: room.id,
                userId,
                isActive: !room.isActive,
              })
            }
          >
            {room.isActive ? (
              <Lock className="w-4 h-4" />
            ) : (
              <LockOpen className="w-4 h-4" />
            )}
            {room.isActive ? "Deactivate" : "Activate"}
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}
