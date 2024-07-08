import PanelTitle from "@/components/atoms/typography/PanelTitle";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { auth } from "@/lib/auth";
import { totalUserRoom } from "@/repositories/room";
import { Inbox } from "lucide-react";
import Link from "next/link";

export default async function Panel() {
  const { user } = (await auth())!;
  const totalRoom = await totalUserRoom(user.id);

  return (
    <>
      <section className="container">
        <PanelTitle>Dashboard</PanelTitle>
      </section>
      <section className="container flex flex-col gap-5 my-10 md:flex-row">
        <Card className="max-w-xl">
          <CardHeader>
            <CardTitle className="text-2xl">
              Welcome, {user.username}!
            </CardTitle>
            <CardDescription className="max-w-md">
              This is your dashboard. You can manage your room, profile, and
              settings here. Get started by creating a new room.
            </CardDescription>
          </CardHeader>
          <CardFooter>
            <Button asChild className="gap-2">
              <Link href="/panel/room/new">
                <Inbox /> New Room
              </Link>
            </Button>
          </CardFooter>
        </Card>
        <Card className="max-w-xl">
          <CardHeader>
            <CardTitle className="inline-flex items-center gap-2 text-2xl">
              <Inbox /> Total Room
            </CardTitle>
            <CardDescription className="max-w-md">
              Total room that you have created.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <h3 className="text-6xl font-bold">{totalRoom}</h3>
          </CardContent>
        </Card>
      </section>
    </>
  );
}
