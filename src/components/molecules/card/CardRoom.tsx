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
import { Calendar, CircleCheckBig, Copy } from "lucide-react";
import { useState } from "react";

type CardRoomProps = {
  title: string;
  slug: string;
  createdAt: string;
  isActive: boolean;
};

export default function CardRoom({
  title,
  slug,
  createdAt,
  isActive,
}: CardRoomProps) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(`https://hitmeup.com/r/${slug}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Card className="hover:cursor-pointer">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="bg-muted py-2 px-5 rounded-xl flex justify-between items-center gap-2">
          <p className="text-nowrap overflow-hidden w-full overflow-x-scroll text-muted-foreground no-scrollbar">
            https://hitmeup.com/r/{slug}
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
        <div className="flex justify-between items-center w-full">
          <p className="text-muted-foreground flex items-center text-sm">
            <Calendar className="w-4 h-4" />
            <span className="ml-2">Created {createdAt}</span>
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
