"use client";
import React from "react";
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
import { ToastAction } from "./ui/toast";
import { useToast } from "./ui/use-toast";

function ReviewLogConfirmationModal(
  props: any,
  forwardRef: React.Ref<HTMLButtonElement> | undefined
) {
  const { toast } = useToast();
  const [open, setOpen] = React.useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {/* <Button variant="outline">Edit Profile</Button> */}
        <Button
          {...props}
          ref={forwardRef}
          variant="outline"
          className="w-full flex items-center h-12 text-center"
        >
          <p className="flex items-center">
            {props.icon && (
              <props.icon className="mr-2 h-4 w-4 text-muted-foreground" />
            )}
            {props.label}
          </p>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Review will be logged</DialogTitle>
          <DialogDescription>
            Are you sure you want to log this review for Corresponding Node
            exercise?
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button
            variant="destructive"
            onClick={() => {
              toast({
                description: "Review not logged",
              });
              setOpen(false);
            }}
          >
            Cancel
          </Button>
          <Button
            type="submit"
            onClick={() => {
              toast({
                title: "Scheduled Next Review: Corresponding Node",
                description: "Friday, Sep 15, 2023",
                action: (
                  <ToastAction altText="Goto schedule to undo">
                    Undo
                  </ToastAction>
                ),
              });
              setOpen(false);
            }}
          >
            Sounds good
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default React.forwardRef(ReviewLogConfirmationModal);
