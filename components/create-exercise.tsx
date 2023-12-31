"use client";

import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { ScrollArea } from "./ui/scroll-area";

import { Separator } from "./ui/separator";
import { LastReviewDatePicker } from "./last-review-date-picker";
import { NextReviewDatePicker } from "./next-review-date-picker";
import { ReviewLogModal } from "./review-log-modal";

import { labels, confidence, priorities, difficulty } from "../data/data";
import ReviewLogConfirmationModal from "./review-log-confirmation-modal";
import { Plus } from "lucide-react";
import { classNames } from "@/lib/utils";

export function CreateExercise() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="default" className="h-8 px-3">
          <Plus className="mr-2 h-4 w-4" />
          Create exercise
        </Button>
      </SheetTrigger>
      <SheetContent className="max-w-sm md:max-w-md p-0">
        <ScrollArea className="h-full max-w-sm md:max-w-md p-4">
          <div className="p-2">
            <SheetHeader className="p-2">
              <SheetTitle className="mt-6 pb-2">
                <Input
                  id="title"
                  placeholder="Exercise title"
                  className="max-w-max ml-2 text-lg md:text-xl border-none shadow-none focus:outline-none"
                />
              </SheetTitle>
              <Separator className="my-6" />
            </SheetHeader>
            <div className="grid gap-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="label" className="text-right">
                  Label:
                </Label>
                <Select>
                  <SelectTrigger className="col-span-3 border-none shadow-none hover:bg-accent">
                    <SelectValue placeholder="Select a label" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Labels</SelectLabel>
                      {labels.map((label) => (
                        <SelectItem key={label.value} value={label.value}>
                          {label.label}
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex items-center gap-4">
                <Label htmlFor="confidence" className="text-right">
                  Confidence:
                </Label>
                <Select>
                  <SelectTrigger className="border-none shadow-none hover:bg-accent">
                    <SelectValue placeholder="Select a confidence level" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Confidence</SelectLabel>
                      {confidence.map((label) => (
                        <SelectItem key={label.value} value={label.value}>
                          <div className="flex items-center">
                            {label.icon && (
                              <label.icon className="mr-2 h-4 w-4 text-muted-foreground" />
                            )}
                            <span>{label.label}</span>
                          </div>
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>

              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="difficulty" className="text-right">
                  Difficulty:
                </Label>
                <Select>
                  <SelectTrigger className="col-span-3 border-none shadow-none hover:bg-accent">
                    <SelectValue placeholder="Select difficulty" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Difficulties</SelectLabel>
                      {difficulty.map((diff) => (
                        <SelectItem key={diff.value} value={diff.value}>
                          <div className="flex items-center">
                            <span
                              className={classNames(
                                diff.value === "easy" && "text-green-400",
                                diff.value === "medium" && "text-amber-400",
                                diff.value === "hard" && "text-red-400"
                              )}
                            >
                              {diff.label}
                            </span>
                          </div>
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>

              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="priority" className="text-right">
                  Priority:
                </Label>
                <Select>
                  <SelectTrigger className="col-span-3 border-none shadow-none hover:bg-accent">
                    <SelectValue placeholder="Select priority" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Priorities</SelectLabel>
                      {priorities.map((label) => (
                        <SelectItem key={label.value} value={label.value}>
                          <div className="flex items-center">
                            {label.icon && (
                              <label.icon className="mr-2 h-4 w-4 text-muted-foreground" />
                            )}
                            <span>{label.label}</span>
                          </div>
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="lastReview" className="text-right">
                  Last Review:
                </Label>
                <LastReviewDatePicker />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="nextReview" className="text-right">
                  Next Review:
                </Label>
                <NextReviewDatePicker />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="reviewCount" className="text-right">
                  Review Count:
                </Label>
                <Input
                  id="reviewCount"
                  type="number"
                  value="0"
                  className="col-span-3 border-none shadow-none hover:bg-accent"
                />
              </div>
            </div>

            <Separator className="my-6" />

            <div className="flex justify-end">
              <Button variant="default" className="w-full sm:w-min">
                Save
              </Button>
            </div>

            <SheetFooter>
              <SheetClose asChild></SheetClose>
            </SheetFooter>
          </div>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
}
