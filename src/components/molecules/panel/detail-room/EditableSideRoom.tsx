import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Room } from "@prisma/client";
import { Save } from "lucide-react";

type EditableSideRoomProps = {
  room: Room;
  onCancel?: () => void;
};

export default function EditableSideRoom({ onCancel }: EditableSideRoomProps) {
  return (
    <Card className="w-full top-24 lg:max-w-xl lg:sticky">
      <CardHeader>
        <CardTitle className="text-2xl">Edit Room</CardTitle>
      </CardHeader>
      <CardContent>
        <form className="space-y-3">
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
        </form>
      </CardContent>
      <CardFooter>
        <div className="flex flex-col w-full gap-3 md:gap-5 md:flex-row">
          <Button className="w-full gap-2" variant="outline" onClick={onCancel}>
            Cancel
          </Button>
          <Button className="w-full gap-2" type="submit">
            <Save className="w-4 h-4" />
            Save
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}
