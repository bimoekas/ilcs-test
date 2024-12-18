import { Check, ChevronsUpDown, LoaderCircle, Plus } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import axios from "axios";
import { useEffect, useState } from "react";

type AutocompleteProps = {
  placeholder?: string;
  className?: string;
  value: string;
  options: string[];
  disabled?: boolean;
  onSelect: (value: string) => void;
};

export function Autocomplete({
  placeholder = "Pilih...",
  className,
  value,
  options,
  disabled = false,
  onSelect,
}: AutocompleteProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>("");

  const handleSelect = (selectedValue: string) => {
    setIsOpen(false);
    onSelect(selectedValue);
  };

  const filteredOptions = options.filter((option) =>
    option.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const labelValue = () => {
    if (!value) return placeholder;

    if (value.trim() === "") return placeholder;

    return value;
  };

  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger asChild>
        <Button
          disabled={disabled}
          variant="outline"
          role="combobox"
          aria-expanded={isOpen}
          className={cn(
            "flex w-full justify-between",
            className,
            !value && "text-gray-500/90"
          )}
        >
          {labelValue()}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="p-0">
        <Command>
          <CommandInput
            placeholder="Search..."
            value={searchQuery}
            onValueChange={setSearchQuery}
            className="border-0 focus:ring-0"
          />
          <CommandList>
            {filteredOptions.length > 0 && (
              <CommandGroup>
                {filteredOptions.map((option) => (
                  <CommandItem
                    key={option}
                    value={option}
                    onSelect={() => handleSelect(option)}
                  >
                    {option}
                    <Check
                      className={cn(
                        "ml-auto",
                        value === option ? "opacity-100" : "opacity-0"
                      )}
                    />
                  </CommandItem>
                ))}
              </CommandGroup>
            )}

            {filteredOptions.length === 0 && searchQuery.length === 0 && (
              <CommandEmpty className="flex items-center justify-center py-4">
                <Label>Tidak ada data</Label>
              </CommandEmpty>
            )}
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
