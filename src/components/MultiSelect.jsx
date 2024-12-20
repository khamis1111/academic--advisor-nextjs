"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { Check, ChevronDown, X } from "lucide-react";
import { useState } from "react";

export default function MultiSelect({
  name,
  selected,
  setSelected,
  items = [],
  disabled,
}) {
  const [open, setOpen] = useState(false);
  // const [selected, setSelected] = useState([])
  const [searchTerm, setSearchTerm] = useState("");

  const toggleItem = (item) => {
    setSelected((prev) => {
      // Check if the item is already in the array by matching the name
      const exists = prev.some(
        (selectedItem) => selectedItem.name === item.name
      );

      if (exists) {
        // If the item exists, remove it
        return prev.filter((selectedItem) => selectedItem.name !== item.name);
      } else {
        // If the item doesn't exist, add it
        return [...prev, { name: item.name, _id: item._id }];
      }
    });
  };

  const filtered = items.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="w-full">
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            disabled={disabled}
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className={cn(
              "w-full justify-between text-left font-normal py-5",
              disabled ? "hover:cursor-not-allowed" : "hover:cursor-pointer"
            )}
          >
            {selected.length > 0
              ? `${selected.length} ${name} selected`
              : `Select ${name}`}
            <ChevronDown className="mr-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="p-0">
          <div className="p-2">
            <Input
              placeholder={`Search ${name} ...`}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="mb-2"
            />

            <div className="max-h-60 overflow-auto scroll-hidden">
              {filtered?.length === 0 || !filtered ? (
                <div className="py-6 text-center text-sm text-muted-foreground">
                  No {name} found.
                </div>
              ) : (
                filtered?.map((item, index) => (
                  <div
                    key={index}
                    className={cn(
                      "flex cursor-pointer items-center rounded-sm px-2 py-1.5 text-sm outline-none",
                      selected.map((item) => item.name).includes(item.name)
                        ? "bg-accent text-accent-foreground"
                        : "hover:bg-accent hover:text-accent-foreground"
                    )}
                    onClick={() =>
                      toggleItem({ name: item.name, _id: item._id })
                    }
                  >
                    <Check
                      className={cn(
                        "ml-2 h-4 w-4",
                        selected.map((item) => item.name).includes(item.name)
                          ? "opacity-100"
                          : "opacity-0"
                      )}
                    />
                    {item.nameAr}
                  </div>
                ))
              )}
            </div>
          </div>
        </PopoverContent>
      </Popover>
      {selected.length !== 0 && (
        <div className="mt-3 flex flex-wrap gap-2">
          {selected.map((item, index) => (
            <Badge key={index} variant="secondary" className="text-sm">
              {item.name}
              <div
                className="mr-1 rounded-full outline-none ring-offset-background focus:ring-2 focus:ring-ring focus:ring-offset-2 cursor-pointer"
                onClick={() => toggleItem({ name: item.name })}
              >
                <X className="h-3 w-3 text-muted-foreground hover:text-foreground" />
              </div>
            </Badge>
          ))}
        </div>
      )}
    </div>
  );
}
