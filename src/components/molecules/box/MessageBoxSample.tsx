import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Send } from "lucide-react";

type MessageBoxSampleProps = {
  title: string;
  description: string;
};

export default function MessageBoxSample({
  title,
  description,
}: MessageBoxSampleProps) {
  return (
    <Card className="w-full max-w-2xl">
      <CardHeader>
        <CardTitle className="text-2xl">{title}</CardTitle>
        <CardDescription className="text-base">{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <form className="space-y-5">
          <Textarea placeholder="Type your message here" rows={5} readOnly />
          <Button className="w-full gap-2" type="submit" disabled>
            <Send className="w-4 h-4" /> Send
          </Button>
          <p className="text-sm text-muted-foreground">
            *All messages are sent anonymously.
          </p>
        </form>
      </CardContent>
    </Card>
  );
}
