import {   Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

const Topbar = () => {
  return (
    <header className="h-16 bg-white border-b flex items-center justify-between px-6">
      <div></div>

      <div className="flex items-center gap-4">
        <span className="text-sm text-gray-600">+1-202-555-0198</span>

        <div className="flex items-center gap-1 text-sm text-gray-700 cursor-pointer">
          <Globe className="w-4 h-4" />
          English
        </div>

        <Button className="bg-blue-600 hover:bg-blue-700">Post A Job</Button>
      </div>
    </header>
  );
};

export default Topbar;
