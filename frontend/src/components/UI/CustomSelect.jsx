import React, { useState, useRef, useEffect } from "react";
import { ChevronDown, Check, Search } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function CustomSelect({
  options = [],
  value = "",
  onChange,
  placeholder = "Select an option",
  searchable = false,
  allowCustomInput = false,
  className = "",
  name = ""
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const dropdownRef = useRef(null);
  const searchInputRef = useRef(null);

  // Normalize options array into object format { label, value, subtext }
  const normalizedOptions = options.map((opt) => {
    if (typeof opt === "string") {
      return { label: opt, value: opt };
    }
    return opt;
  });

  // Filter options based on search query
  const filteredOptions = normalizedOptions.filter((opt) =>
    opt.label.toLowerCase().includes(searchQuery.toLowerCase()) ||
    (opt.subtext && opt.subtext.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Focus search input on open
  useEffect(() => {
    if (isOpen && searchable && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [isOpen, searchable]);

  const handleSelect = (optionValue) => {
    if (onChange) {
      onChange({ target: { name, value: optionValue } });
    }
    setIsOpen(false);
    setSearchQuery("");
  };

  const selectedOption = normalizedOptions.find((opt) => opt.value === value);
  const displayLabel = selectedOption ? selectedOption.label : (value || placeholder);

  return (
    <div className={`relative w-full ${className}`} ref={dropdownRef}>
      {/* Select Trigger Box */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full flex items-center justify-between px-4 py-3 bg-surface-container-lowest border border-outline-variant rounded-lg text-left text-sm text-on-surface transition-all duration-200 focus:outline-none focus:ring-1 focus:ring-tertiary focus:border-tertiary hover:border-tertiary/60 ${
          isOpen ? "border-tertiary ring-1 ring-tertiary shadow-sm" : ""
        }`}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
      >
        <span className={`truncate ${!value && !selectedOption ? "text-secondary/70" : "font-medium text-primary"}`}>
          {displayLabel}
        </span>
        <ChevronDown
          size={18}
          className={`text-secondary shrink-0 ml-2 transition-transform duration-200 ${
            isOpen ? "rotate-180 text-tertiary" : ""
          }`}
        />
      </button>

      {/* Animated Dropdown Menu Popover */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -6, scale: 0.98 }}
            animate={{ opacity: 1, y: 4, scale: 1 }}
            exit={{ opacity: 0, y: -6, scale: 0.98 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            className="absolute top-full left-0 right-0 z-50 bg-white border border-outline-variant rounded-xl card-shadow overflow-hidden"
          >
            {/* Optional Search Bar for Combobox */}
            {searchable && (
              <div className="p-2 border-b border-outline-variant/50 bg-surface-container-low/50 flex items-center gap-2">
                <Search size={16} className="text-secondary shrink-0 ml-1" />
                <input
                  ref={searchInputRef}
                  type="text"
                  placeholder="Search society name..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-transparent text-sm text-on-surface focus:outline-none border-none p-1"
                />
              </div>
            )}

            {/* Options List */}
            <div className="max-h-72 overflow-y-auto p-1.5 space-y-1">
              {filteredOptions.length > 0 ? (
                filteredOptions.map((opt, idx) => {
                  const isSelected = opt.value === value;
                  return (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => handleSelect(opt.value)}
                      className={`w-full flex items-start justify-between px-3.5 py-3 rounded-lg text-sm text-left transition-colors duration-150 ${
                        isSelected
                          ? "bg-tertiary/10 text-tertiary font-bold"
                          : "text-primary hover:bg-tertiary/10 hover:text-tertiary"
                      }`}
                    >
                      <div className="flex flex-col pr-2 flex-1">
                        <span className="text-sm leading-snug break-words">{opt.label}</span>
                        {opt.subtext && (
                          <span className="text-xs text-secondary font-normal mt-0.5">
                            {opt.subtext}
                          </span>
                        )}
                      </div>
                      {isSelected && (
                        <Check size={18} className="text-tertiary shrink-0 mt-0.5 ml-2" />
                      )}
                    </button>
                  );
                })
              ) : allowCustomInput && searchQuery ? (
                <button
                  type="button"
                  onClick={() => handleSelect(searchQuery)}
                  className="w-full px-3 py-2.5 rounded-lg text-sm text-left text-tertiary hover:bg-tertiary-light/40 font-medium"
                >
                  Use custom society: "<span className="font-bold">{searchQuery}</span>"
                </button>
              ) : (
                <div className="px-3 py-4 text-center text-xs text-secondary">
                  No matching options found
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
