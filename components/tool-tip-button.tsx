import React from "react";
import { Button } from "./ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";

function ToolTipButton(
  props: any,
  forwardRef: React.Ref<HTMLButtonElement> | undefined
) {
  return (
    <TooltipProvider>
      <Tooltip>
        {/* The asChild prop allows you to apply the behaviors and functionalities of a Radix primitive to your custom element or component. 
        Essentially, when asChild is set to true, Radix does not render its default element, 
        but instead, it applies its behaviors to the child element you provide. i.e. Button has the functionality of TooltipTrigger and 
        SheetTrigger since ToolTipButton is its child. */}
        <TooltipTrigger asChild>
          <Button
            {...props}
            ref={forwardRef}
            className="h-8 hover:bg-slate-200"
            variant="outline"
          >
            {props.buttonText}
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>{props.tooltipText}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}

export default React.forwardRef(ToolTipButton);
