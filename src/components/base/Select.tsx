import { useState, useRef, useEffect } from "react";

interface Props {
  options?: Array<string | number>;
  className?: string;
  label?: string;
  placeholder?: string;
  onChange?: (value: string | any) => void;
  value?: string | number;
  name?: string;
}

function Select({
  options = [],
  className = "",
  label,
  placeholder = "Select an option",
  onChange,
  value,
  name,
}: Props) {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);


  // close when clicked outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);


  // onchange set the current item
  const handleSelect = (item: string | number) => {
    if (onChange) {
      onChange({
        target: {
          name,
          value: item,
        },
      });
    }
    console.log("Selected:", item);
    setOpen(false);
  };

  return (
    <div className={`relative ${className}`} ref={containerRef}>
      {label && <p className="font-medium mb-2">{label}</p>}


      {/* custom input field select */}
      <div
        className="border text-sm  border-gray-300 rounded-lg px-3 py-2 cursor-pointer flex justify-between items-center"
        onClick={() => setOpen((prev) => !prev)}
      >
        <span className="truncate">
          {value !== undefined && value !== "" ? value : placeholder}
        </span>
        <svg
          className={`w-4 h-4 transform transition-transform ${open ? "rotate-180" : ""
            }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            d="M19 9l-7 7-7-7"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>


      {/* custom options of the select */}
      {open && (
        <ul className="absolute z-10 mt-1 w-full bg-white border border-gray-300 rounded-lg shadow-md max-h-60 overflow-y-auto">
          {options.map((item, index) => (
            <li
              key={index}
              className={`px-4 py-2 text-sm  hover:bg-gray-100 cursor-pointer ${item === value ? "bg-gray-100 font-medium" : ""
                }`}
              onClick={() => handleSelect(item)}
            >
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Select;
