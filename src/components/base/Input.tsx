import React, { type ReactNode } from "react";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  append?: ReactNode;
  prepend?: ReactNode;
  labelUp?: string;
  className?: string;

}

function Input({ append, prepend, labelUp, className, ...rest   }: Props) {
  return (
    <div>
      {labelUp && <p className="font-medium mb-2">{labelUp}</p>}
      <div
        className={`flex  items-center gap-3 border  border-gray-300  rounded-lg focus-within:ring-2 focus-within:ring-primary  focus-within:transition ease-in delay-200   px-3 py-2 ${className}`}
      >
        {prepend && <div className="text-gray-700">{prepend}</div>}

        <input
          {...rest}
          className=" outline-none overflow-x-auto object-contain w-full  placeholder:text-gray-600 text-sm  flex-1 bg-transparent"
        />

        {append && <div className="text-gray-700">{append}</div>}
      </div>
    </div>
  );
}

export default Input;
