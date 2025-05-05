import { CalendarIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

export function InfoCard() {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button variant="link">More info</Button>
      </HoverCardTrigger>
      <HoverCardContent className="w-80">
        <div className="space-y-1">
          <h4 className="text-sm font-semibold">How is the time calculated?</h4>
          <p className="text-sm">
            The copilot time is calculated by subtracting 1 hour from the total
            flight time and multiplying the remaing time by a factor of 2/3 (for
            crew of 3) or 1/2 (for a crew of 4).
          </p>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
}
