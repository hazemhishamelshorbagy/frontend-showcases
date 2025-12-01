"use client";
import { SearchIcon } from "lucide-react";
import React, { useState, useRef } from "react";
import { InputGroup, InputGroupInput, InputGroupAddon } from "./Input-group";
import { Dialog, DialogContent } from "./Dialog";
import { SearchInputProps } from "@/interfaces/SearchInput";
import { DialogTitle } from "@radix-ui/react-dialog";
import { Text } from "../Atoms/Text";
import { Button } from "../Atoms/Button";

const SearchInput = ({
  placeholder = "Search...",
  modalContent,
  onSearch,
}: SearchInputProps) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFocus = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    onSearch?.(e.target.value);
  };

  return (
    <>
      <InputGroup className="hidden lg:flex max-w-[255px] border-0 focus:ring-0  bg-grey-light rounded-3xl shadow-card">
        <InputGroupInput
          ref={inputRef}
          placeholder={placeholder}
          onFocus={handleFocus}
          value={value}
          onChange={handleChange}
        />
        <InputGroupAddon>
          <SearchIcon />
        </InputGroupAddon>
      </InputGroup>
      <Button
        variant={"ghost"}
        className="lg:hidden w-8 h-8"
        onClick={handleFocus}
      >
        <SearchIcon />
      </Button>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="bg-grey-light">
          {modalContent || (
            <div className="p-4">
              <DialogTitle className="mb-4 text-lg font-semibold">
                {" "}
                <Text
                  as="span"
                  className="font-semibold text-background text-lg"
                >
                  Search for: {value}
                </Text>
              </DialogTitle>

              {/* Add your search results or custom content here */}
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default SearchInput;
