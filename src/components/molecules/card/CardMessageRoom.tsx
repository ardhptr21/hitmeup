import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Calendar, Clock } from "lucide-react";

type CardMessageRoomProps = {
  message: string;
};

export default function CardMessageRoom({ message }: CardMessageRoomProps) {
  return (
    <Card>
      <CardHeader>
        <CardDescription className="text-base">{message}</CardDescription>
      </CardHeader>
      <CardFooter>
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            <Calendar className="w-3 h-3" />
            <p>21 Juni 2024</p>
          </div>
          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            <Clock className="w-3 h-3" />
            <p>10:00</p>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}
