<<<<<<< HEAD
import { Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

const Topbar = () => {
=======
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { useState } from "react";

const Topbar = () => {
  const [country, setCountry] = useState("🇳🇵 Nepal");

>>>>>>> 77fc65b (fix features page)
  return (
    <header className="h-16 bg-white border-b flex items-center justify-between px-6">
      <div></div>

      <div className="flex items-center gap-4">
<<<<<<< HEAD
        <span className="text-sm text-gray-600">+1-202-555-0198</span>

        <div className="flex items-center gap-1 text-sm text-gray-700 cursor-pointer">
          <Globe className="w-4 h-4" />
          English
=======
        <span className="text-sm text-gray-600">+977-9800225588</span>

        <div className="flex items-center gap-1 text-sm text-gray-700 cursor-pointer">
          <DropdownMenu>
            <DropdownMenuTrigger className="cursor-pointer">
              {country}
            </DropdownMenuTrigger>

            <DropdownMenuContent>
              <DropdownMenuLabel>Choose Language</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem onSelect={() => setCountry("🇳🇵 Nepali")}>
                🇳🇵 Nepali
              </DropdownMenuItem>
              <DropdownMenuItem onSelect={() => setCountry("🇮🇳 Hindi")}>
                🇮🇳 Hindi
              </DropdownMenuItem>
              <DropdownMenuItem onSelect={() => setCountry("🇺🇸 English")}>
                🇺🇸 English
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
>>>>>>> 77fc65b (fix features page)
        </div>

        <Button className="bg-blue-600 hover:bg-blue-700">Post A Job</Button>
      </div>
    </header>
  );
};

export default Topbar;
