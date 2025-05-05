import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

import { Label } from "@/components/ui/label";
import { useState } from "react";
import GithubCorner from "react-github-corner";
import { Input } from "./components/ui/input";
import { InfoCard } from "./Info";

function calculateCrcpTime(ops: string, totalTimeString: string) {
  const factor = ops === "3" ? 2 / 3 : 1 / 2;

  if (!totalTimeString.trim().match(/^\d{1,2}:\d{2}$/)) {
    return undefined;
  }

  const totalTimeHrs = +totalTimeString.split(":")[0];
  const totalTimeMins = +totalTimeString.split(":")[1];
  const totalTime = totalTimeHrs * 60 + totalTimeMins;

  const crcpTime = Math.round((totalTime - 60) * factor);
  const crcpHrs = Math.floor(crcpTime / 60);
  const crcpMins = crcpTime % 60;

  return `${String(crcpHrs).padStart(2, "0")}:${String(crcpMins).padStart(
    2,
    "0"
  )}`;
}

export default function App() {
  const [operation, setOperation] = useState("3");
  const [totalFlightTime, setTotalFlightTime] = useState("3");

  const crcpTime = calculateCrcpTime(operation, totalFlightTime);

  return (
    <>
      <Card className="w-[350px] mx-auto mt-10">
        <CardHeader>
          <CardTitle>Calculate CRCP time</CardTitle>
          <CardDescription>
            Calculate time as copilot based on total flight time. <InfoCard />
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Operation</Label>
                <RadioGroup
                  defaultValue="3"
                  className="flex flex-row"
                  onValueChange={setOperation}
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="3" id="r1" />
                    <Label htmlFor="r1">Crew of 3</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="4" id="r2" />
                    <Label htmlFor="r2">Crew of 4</Label>
                  </div>
                </RadioGroup>
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Total time of flight</Label>
                <Input
                  id="name"
                  placeholder="hh:mm"
                  value={totalFlightTime}
                  onChange={(e) => setTotalFlightTime(e.target.value)}
                />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex flex-col space-y-1.5">
          <span>Copilot time</span>
          <span className="font-bold text-3xl">{crcpTime || "00:00"}</span>
        </CardFooter>
      </Card>
      <GithubCorner href="https://github.com/danielkappelle/crcp-web" />
    </>
  );
}
