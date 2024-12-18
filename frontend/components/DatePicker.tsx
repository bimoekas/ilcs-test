import { format } from "date-fns";
import { id } from "date-fns/locale";
import { CalendarIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

type DatePickerProps = {
  selectedDate: Date;
  placeholder: string;
  formatDate: string;
  disabled?: boolean;
  onSelect: (date: Date) => void;
};

export function DatePicker({
  selectedDate,
  placeholder,
  formatDate,
  disabled = false,
  onSelect,
}: DatePickerProps) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          type="button"
          variant="outline"
          className={`w-full justify-start text-left font-normal ${
            !selectedDate && "text-muted-foreground"
          }`}
          disabled={disabled}
        >
          <CalendarIcon />
          {selectedDate ? (
            format(selectedDate, formatDate, { locale: id })
          ) : (
            <span>{placeholder}</span>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
        <Calendar
          mode="single"
          selected={selectedDate}
          onSelect={(e) => e && onSelect(e)}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  );
}
