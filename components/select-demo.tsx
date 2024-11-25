import * as React from "react";
import z from "zod";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const schema = z.object({
  name: z.string(),
  className: z.string(),
  options: z.array(z.string()),
});

type schemaForm = z.infer<typeof schema>;

export function SelectDemo({ className, options, name }: schemaForm) {
  return (
    <Select>
      <SelectTrigger className={`w-[180px] ${className}`}>
        <SelectValue placeholder={`${name} `} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>{name}</SelectLabel>
          {options.map((option, index) => (
            <SelectItem key={index} value={option}>
              رحلات {option}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
