import { Search } from "lucide-react";
import { Input } from "@/src/components/ui/input";

export function SearchForm() {
  return (
    <div className="relative">
      <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
      <Input
        type="search"
        placeholder="Search..."
        className="w-full bg-background pl-8 text-sm"
      />
    </div>
  );
}
