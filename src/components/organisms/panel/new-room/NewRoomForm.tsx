"use client";

import { newRoomScheme, NewRoomScheme } from "@/scheme/room/new-room-scheme";
import { zodResolver } from "@hookform/resolvers/zod";

import { newRoomAction } from "@/actions/room";
import { useAction } from "next-safe-action/hooks";

import MessageBox from "@/components/molecules/MessageBox";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
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
import { Save } from "lucide-react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

type NewRoomFormProps = {
  userId: number;
};

export default function NewRoomForm({ userId }: NewRoomFormProps) {
  const form = useForm<NewRoomScheme>({
    resolver: zodResolver(newRoomScheme),
    defaultValues: {
      title: "",
      description: "",
      slug: "",
      isActive: true,
    },
    mode: "onChange",
  });
  const [title, description] = form.watch(["title", "description"]);
  const router = useRouter();

  // @ts-ignore
  const newRoomActionWithUser = newRoomAction.bind(null, userId as any);
  const { execute: newRoom, isExecuting } = useAction(newRoomActionWithUser, {
    onSuccess: () => {
      form.reset();
      toast.success("Room created!");
      router.replace("/panel/room");
    },
    onError: (error) => {
      toast.error(error.error.fetchError);
    },
  });

  return (
    <section className="container flex items-start gap-10 my-10">
      <Card className="w-full top-24 lg:max-w-xl lg:sticky">
        <CardHeader>
          <CardTitle className="text-2xl">Create New</CardTitle>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form className="space-y-5" onSubmit={form.handleSubmit(newRoom)}>
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
                    <FormDescription>
                      https://hitmeup.io/r/room-slug
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="isActive"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <div className="space-y-2 leading-none">
                      <FormLabel>Activate Room</FormLabel>
                      <FormDescription>
                        This will make the room available for public access.
                      </FormDescription>
                      <FormMessage />
                    </div>
                  </FormItem>
                )}
              />
              <div className="flex flex-col w-full gap-3 md:gap-5 md:flex-row">
                <Button asChild className="w-full gap-2" variant="outline">
                  <Link href="/panel/room">Cancel</Link>
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
      <MessageBox
        title={title || "[Room Title]"}
        description={description || "[Room description will goes here]"}
        disabled
      />
    </section>
  );
}
