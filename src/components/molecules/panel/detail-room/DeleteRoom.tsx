"use client";

import { deleteRoomAction } from "@/actions/room";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Trash } from "lucide-react";
import { useAction } from "next-safe-action/hooks";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

type DeleteRoomProps = {
  userId: number;
  roomId: number;
  disabled?: boolean;
};

export default function DeleteRoom({
  userId,
  roomId,
  disabled,
}: DeleteRoomProps) {
  const router = useRouter();
  const { execute: deleteRoom, isExecuting } = useAction(deleteRoomAction, {
    onSuccess: () => {
      toast.success("Room deleted successfully.");
      router.push("/panel/room");
    },
    onError: (error) => {
      toast.error(error.error.fetchError);
    },
  });

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button
          className="w-full gap-2"
          variant="destructive"
          disabled={disabled}
        >
          <Trash className="w-4 h-4" /> Delete
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>
            Are you absolutely sure want delete this room?
          </AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete room and
            all the messages data.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel disabled={isExecuting}>Cancel</AlertDialogCancel>
          <Button
            variant="destructive"
            disabled={isExecuting}
            onClick={() => deleteRoom({ userId, roomId })}
          >
            Delete
          </Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
