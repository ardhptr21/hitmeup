import PanelTitle from "@/components/atoms/typography/PanelTitle";
import MessageBox from "@/components/molecules/MessageBox";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Save } from "lucide-react";
import Link from "next/link";

export default function NewRoomPanel() {
  return (
    <>
      <section className="container">
        <PanelTitle>New Room</PanelTitle>
      </section>
      <section className="container flex items-start gap-10 my-10">
        <Card className="w-full top-24 lg:max-w-xl lg:sticky">
          <CardHeader>
            <CardTitle className="text-2xl">Create New</CardTitle>
          </CardHeader>
          <CardContent>
            <form className="space-y-5">
              <div className="space-y-1.5">
                <Label htmlFor="title">Title</Label>
                <Input id="title" placeholder="Room title" />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  placeholder="Room description"
                  rows={5}
                />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="slug">Slug</Label>
                <Input id="slug" placeholder="Room slug" />
                <p className="text-sm text-muted-foreground">
                  https://hitmeup.io/r/room-slug
                </p>
              </div>
              <div className="flex space-x-2 items-top">
                <Checkbox id="isActive" />
                <div className="grid gap-1.5 leading-none">
                  <label
                    htmlFor="isActive"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Activate Room
                  </label>
                  <p className="text-sm text-muted-foreground">
                    Activate room to make it public can be accessed.
                  </p>
                </div>
              </div>
            </form>
          </CardContent>
          <CardFooter>
            <div className="flex flex-col w-full gap-3 md:gap-5 md:flex-row">
              <Button asChild className="w-full gap-2" variant="outline">
                <Link href="/panel/room">Cancel</Link>
              </Button>
              <Button className="w-full gap-2" type="submit">
                <Save className="w-4 h-4" />
                Submit
              </Button>
            </div>
          </CardFooter>
        </Card>
        <MessageBox
          title="Sample"
          description="This is a sample message box."
          disabled
        />
      </section>
    </>
  );
}
