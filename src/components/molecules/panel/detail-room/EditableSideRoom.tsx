"use client";

import { editRoomAction } from "@/actions/room";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { relativeToAppURL } from "@/lib/utils";
import { editRoomScheme, EditRoomScheme } from "@/scheme/room/edit-room-scheme";
import { zodResolver } from "@hookform/resolvers/zod";
import { Room } from "@prisma/client";
import { Save } from "lucide-react";
import { useAction } from "next-safe-action/hooks";
import { useMemo } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

type EditableSideRoomProps = {
  userId: number;
  room: Room;
  onCancel?: () => void;
};

export default function EditableSideRoom({
  userId,
  room,
  onCancel,
}: EditableSideRoomProps) {
  const form = useForm<EditRoomScheme>({
    resolver: zodResolver(editRoomScheme),
    defaultValues: {
      title: room.title,
      description: room.description,
      slug: room.slug,
    },
    mode: "onChange",
  });
  const slug = form.watch("slug");
  const roomURL = useMemo(() => relativeToAppURL("r", slug), [slug]);

  // @ts-ignore
  const editRoomWithUser = editRoomAction.bind(null, userId, room.id);
  const { execute: editRoom, isExecuting } = useAction(editRoomWithUser, {
    onSuccess: () => {
      form.reset();
      if (onCancel) onCancel();
      toast.success("Room updated!");
    },
    onError: (error) => {
      toast.error(error.error.fetchError);
    },
  });

  return (
    <Card className="w-full top-24 lg:max-w-xl lg:sticky">
      <CardHeader>
        <CardTitle className="text-2xl">Edit Room</CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form className="space-y-5" onSubmit={form.handleSubmit(editRoom)}>
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel htmlFor="title">Title</FormLabel>
                  <FormControl>
                    <Input id="title" placeholder="Room title" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel htmlFor="description">Description</FormLabel>
                  <FormControl>
                    <Textarea
                      id="description"
                      placeholder="Room description"
                      rows={5}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="slug"
              render={({ field }) => (
                <FormItem>
                  <FormLabel htmlFor="slug">Slug</FormLabel>
                  <FormControl>
                    <Input id="slug" placeholder="Room slug" {...field} />
                  </FormControl>
                  <FormDescription>{roomURL}</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="flex flex-col w-full gap-3 md:gap-5 md:flex-row">
              <Button
                onClick={onCancel}
                className="w-full gap-2"
                variant="outline"
              >
                Cancel
              </Button>
              <Button
                className="w-full gap-2"
                type="submit"
                disabled={isExecuting}
              >
                <Save className="w-4 h-4" />
                Submit
              </Button>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
