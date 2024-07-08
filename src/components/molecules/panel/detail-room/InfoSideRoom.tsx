"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Calendar,
  CircleCheckBig,
  Copy,
  Lock,
  Pencil,
  Trash,
} from "lucide-react";
import { useState } from "react";

type InfoSideRoomProps = {
  onEdit?: () => void;
};

export default function InfoSideRoom({ onEdit }: InfoSideRoomProps) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(`https://hitmeup.com/r/hahahoho`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Card className="w-full top-24 lg:max-w-xl lg:sticky">
      <CardHeader>
        <CardTitle className="text-2xl">Rekomendasi Tempat Surabaya</CardTitle>
        <CardDescription className="text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat optio
          blanditiis harum aspernatur eveniet ut? Nisi praesentium, officiis
          autem asperiores vel deserunt quis quia veritatis cumque maiores
          necessitatibus ex ipsam?
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-between gap-2 px-5 py-2 bg-muted rounded-xl">
          <p className="w-full overflow-hidden overflow-x-scroll text-nowrap text-muted-foreground no-scrollbar">
            https://hitmeup.com/r/hahahoho
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
      <CardFooter className="flex-col items-stretch gap-5">
        <div className="flex items-center justify-between w-full">
          <p className="flex items-center text-sm text-muted-foreground">
            <Calendar className="w-4 h-4" />
            <span className="ml-2">Created 2 days ago</span>
          </p>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
            <p className="text-muted-foreground">Active</p>
          </div>
        </div>
        <div className="flex flex-col w-full gap-3 md:gap-5 md:flex-row">
          <Button className="w-full gap-2" variant="destructive">
            <Trash className="w-4 h-4" /> Delete
          </Button>
          <Button className="w-full gap-2" onClick={onEdit}>
            <Pencil className="w-4 h-4" />
            Edit
          </Button>
          <Button className="w-full gap-2" variant="outline">
            <Lock className="w-4 h-4" />
            Deactivate
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}
