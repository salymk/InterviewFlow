import { Button } from "../components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "../components/ui/popover";
import { ListFilter } from "lucide-react";

export function FilterPopover({ children }: { children: any }) {
  return (
    <Popover>
      <PopoverTrigger asChild className="md:hidden">
        <Button variant="ghost" size="icon">
          <ListFilter strokeWidth="1.5" className="h-8 w-8" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-60">{children}</PopoverContent>
    </Popover>
  );
}
