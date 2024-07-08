import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { format } from "date-fns";
import { Calendar, Clock } from "lucide-react";

type CardMessageRoomProps = {
  message: string;
  createdAt: Date;
};

export default function CardMessageRoom({
  message,
  createdAt,
}: CardMessageRoomProps) {
  return (
    <Card>
      <CardHeader>
        <CardDescription className="text-base">{message}</CardDescription>
      </CardHeader>
      <CardFooter>
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            <Calendar className="w-3 h-3" />
            <p>{format(createdAt, "dd MMMM yyyy")}</p>
          </div>
          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            <Clock className="w-3 h-3" />
            <p>{format(createdAt, "HH:mm")}</p>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}

export const CardMessageRoomSkeleton = () => {
  return (
    <Card>
      <CardHeader>
        <div className="space-y-1">
          <Skeleton className="w-3/4 h-3" />
          <Skeleton className="w-1/2 h-3" />
        </div>
      </CardHeader>
      <CardFooter>
        <div className="flex items-center justify-between w-full">
          <Skeleton className="h-3 w-28" />
          <Skeleton className="h-3 w-14" />
        </div>
      </CardFooter>
    </Card>
  );
};
