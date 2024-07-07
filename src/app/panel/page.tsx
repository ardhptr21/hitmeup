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
import { Inbox } from "lucide-react";

export default function Panel() {
  return (
    <>
      <section className="container">
        <PanelTitle>Dashboard</PanelTitle>
      </section>
      <section className="container flex flex-col gap-5 my-10 md:flex-row">
        <Card className="max-w-xl">
          <CardHeader>
            <CardTitle className="text-2xl">Welcome, Ardh!</CardTitle>
            <CardDescription className="max-w-md">
              This is your dashboard. You can manage your room, profile, and
              settings here. Get started by creating a new room.
            </CardDescription>
          </CardHeader>
          <CardFooter>
            <Button className="gap-2">
              <Inbox /> New Room
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
            <h3 className="text-6xl font-bold">0</h3>
          </CardContent>
        </Card>
      </section>
    </>
  );
}
