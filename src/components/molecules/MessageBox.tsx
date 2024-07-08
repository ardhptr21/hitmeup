import { Send } from "lucide-react";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Textarea } from "../ui/textarea";

type MessageBoxProps = {
  title: string;
  description: string;
  disabled?: boolean;
  onSubmit?: () => void;
};

export default function MessageBox({
  title,
  description,
  disabled,
  onSubmit,
}: MessageBoxProps) {
  return (
    <Card className="w-full max-w-2xl">
      <CardHeader>
        <CardTitle className="text-2xl">{title}</CardTitle>
        <CardDescription className="text-base">{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <form className="space-y-5" onSubmit={onSubmit}>
          <Textarea
            placeholder="Type your message here"
            rows={5}
            readOnly={disabled}
          />
          <Button className="w-full gap-2" type="submit" disabled={disabled}>
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
