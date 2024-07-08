"use client";

import { sendMessageAction } from "@/actions/message";
import {
  sendMessageScheme,
  SendMessageScheme,
} from "@/scheme/message/send-message-scheme";
import { zodResolver } from "@hookform/resolvers/zod";
import { Send } from "lucide-react";
import { useAction } from "next-safe-action/hooks";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormMessage,
} from "../ui/form";
import { Textarea } from "../ui/textarea";

type MessageBoxProps = {
  title: string;
  description: string;
  roomId: number;
  onSubmit?: () => void;
};

export default function MessageBox({
  title,
  description,
  roomId,
}: MessageBoxProps) {
  const form = useForm<SendMessageScheme>({
    resolver: zodResolver(sendMessageScheme),
    defaultValues: {
      message: "",
      roomId,
    },
  });
  const message = form.watch("message");

  const { execute: sendMessage, isExecuting } = useAction(sendMessageAction, {
    onSuccess: () => {
      form.reset();
      toast.success("Message sent", { position: "top-center" });
    },
    onError: (error) => {
      toast.error(error.error.fetchError || "Failed to send message", {
        position: "top-center",
      });
    },
  });

  return (
    <Card className="w-full max-w-2xl">
      <CardHeader>
        <CardTitle className="text-2xl">{title}</CardTitle>
        <CardDescription className="text-base">{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form className="space-y-5" onSubmit={form.handleSubmit(sendMessage)}>
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Textarea
                      placeholder="Type your message here"
                      rows={8}
                      readOnly={isExecuting}
                      {...field}
                    />
                  </FormControl>
                  <FormDescription className="text-right">
                    {message.length}/300
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              className="w-full gap-2"
              type="submit"
              disabled={isExecuting}
            >
              <Send className="w-4 h-4" /> Send
            </Button>
            <p className="text-sm text-muted-foreground">
              *All messages are sent anonymously.
            </p>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
