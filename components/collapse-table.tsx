"use client";

import * as React from "react";
import { CaretSortIcon } from "@radix-ui/react-icons";

import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

export function CollapseTable({ text, children }: any) {
  const [isOpen, setIsOpen] = React.useState(true);

  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen}>
      <div className="flex items-center gap-4  mb-4">
        <h1 className="text-md sm:text-xl font-bold text-slate-950">{text}</h1>
        <CollapsibleTrigger asChild>
          <Button variant="ghost" size="icon">
            <CaretSortIcon className="h-8 w-8" />
            <span className="sr-only">Toggle</span>
          </Button>
        </CollapsibleTrigger>
      </div>

      <CollapsibleContent className="CollapsibleContent">
        {children}
      </CollapsibleContent>
    </Collapsible>
  );
}
