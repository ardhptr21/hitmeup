"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { formatDistanceToNow } from "date-fns";
import {
  Calendar,
  CircleCheckBig,
  Copy,
  SquareArrowOutUpRight,
} from "lucide-react";
import Link from "next/link";
import { useMemo, useState } from "react";

type CardRoomProps = {
  id: number;
  title: string;
  slug: string;
  createdAt: Date;
  isActive: boolean;
};

export default function CardRoom({
  id,
  title,
  slug,
  createdAt,
  isActive,
}: CardRoomProps) {
  const [copied, setCopied] = useState(false);
  const roomURL = useMemo(
    () => `${process.env.NEXT_PUBLIC_APP_URL}/r/${slug}`,
    [slug]
  );

  const copyToClipboard = () => {
    navigator.clipboard.writeText(roomURL);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Card className="relative">
      <CardHeader>
        <div className="absolute text-right -right-2 -top-2">
          <Button asChild size="icon" variant="outline">
            <Link href={`/panel/room/${id}`}>
              <SquareArrowOutUpRight />
            </Link>
          </Button>
        </div>
        <CardTitle className="text-2xl font-bold">{title}</CardTitle>
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
      <CardFooter>
        <div className="flex items-center justify-between w-full">
          <p className="flex items-center text-sm text-muted-foreground">
            <Calendar className="w-4 h-4" />
            <span className="ml-2">
              Created {formatDistanceToNow(createdAt)}
            </span>
          </p>
          <div className="flex items-center gap-2">
            <div
              className={cn(
                "h-3 w-3 rounded-full",
                isActive ? "bg-green-500 animate-pulse" : "bg-destructive"
              )}
            ></div>
            <p className="text-muted-foreground">
              {isActive ? "Active" : "Inactive"}
            </p>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}
