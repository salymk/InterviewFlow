import { Button } from "./ui/button"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip"

interface ToolTipButtonProps {
  buttonText: string
  tooltipText: string
}

export function ToolTipButton({buttonText, tooltipText}: ToolTipButtonProps) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button className="h-8 hover:bg-slate-200" variant="outline">{buttonText}</Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>{tooltipText}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
