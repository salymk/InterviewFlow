import { CheckCircledIcon } from "@radix-ui/react-icons";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Textarea } from "./ui/textarea";

export function ReviewLogModal() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          className="p-2 h-full flex-col items-baseline"
        >
          <p className="text-lg font-semibold flex items-center">
            <CheckCircledIcon className="h-4 w-4 mr-2 text-green-500" />
            review
          </p>
          <span className="italic">September 5, 2023</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>review</DialogTitle>
          <DialogDescription>
            Talk about how your review session went.
          </DialogDescription>
        </DialogHeader>
        <div className="grid h-30 w-full gap-2">
          <Textarea placeholder="How did it go?" className="min-h-[220px]" />
        </div>
        <DialogFooter>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
