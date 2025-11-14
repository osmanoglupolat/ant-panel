"use client";
import { useKBar } from "kbar";
import { IconSearch } from "@tabler/icons-react";
import { Button } from "@/components/ui/button";

export default function SearchInput() {
  const { query } = useKBar();
  return (
    <div className="w-full space-y-2">
      <Button
        variant="outline"
        className="bg-background text-muted-foreground relative h-8 w-full justify-start rounded-sm text-sm font-normal shadow-none sm:pr-12 md:w-40 lg:w-64"
        onClick={query.toggle}
      >
        <IconSearch className="mr-2 h-4 w-4" />
        Search...
        <kbd className="bg-muted pointer-events-none ml-auto hidden h-5 items-center gap-1 rounded border px-1.5 font-mono text-[10px] font-medium opacity-100 select-none sm:flex">
          <span className="text-xs">⌘</span>K
        </kbd>
      </Button>
    </div>
  );
}
