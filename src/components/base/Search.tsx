import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Select from "./Select";
import Button from "./Button";
import Input from "./Input";

interface SearchFieldValues {
  keyword: string;
  city: string;
  area: string;
  status: string;
  minPrice: string;
  maxPrice: string;
  bathrooms: string;
  bedrooms: string;
  type: string;
}


export default function Search() {
  const navigate = useNavigate();

  const [values, setValues] = useState<SearchFieldValues>({
    keyword: "",
    city: "",
    area: "",
    status: "",
    minPrice: "",
    maxPrice: "",
    bathrooms: "",
    bedrooms: "",
    type: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleClear = () => {
    setValues({
      keyword: "",
      city: "",
      area: "",
      status: "",
      minPrice: "",
      maxPrice: "",
      bathrooms: "",
      bedrooms: "",
      type: "",
    });
  };

  const fieldsConfig = [
    { name: "keyword", type: "input", placeholder: "Keyword" },
    {
      name: "city",
      type: "select",
      placeholder: "All Cities",
      options: ["Lagos", "Abuja", "Port Harcourt"],
    },
    {
      name: "area",
      type: "select",
      placeholder: "All Areas",
      options: ["Ikeja", "Victoria Island", "Garki"],
    },
    {
      name: "status",
      type: "select",
      placeholder: "Any Status",
      options: ["For Rent", "For Sale", "Roommate"],
    },
    { name: "minPrice", type: "input", placeholder: "Min Price", inputType: "number", prepend: "₦" },
    { name: "maxPrice", type: "input", placeholder: "Max Price", inputType: "number", prepend: "₦" },
    { name: "bathrooms", type: "input", placeholder: "Bathrooms", inputType: "number" },
    { name: "bedrooms", type: "input", placeholder: "Bedrooms", inputType: "number" },
    {
      name: "type",
      type: "select",
      placeholder: "Any Type",
      options: ["Apartment", "House", "Duplex"],
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Build query params
    const params = new URLSearchParams();
    Object.entries(values).forEach(([key, val]) => {
      if (val) params.set(key, val);
    });

    // Navigate with query params
    navigate(`?${params.toString()}`);

    // Call callback if provided
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="grid grid-cols-2 md:grid-cols-3 gap-4 p-4 bg-white shadow rounded-lg"
    >
      {fieldsConfig.map((field, index) =>
        field.type === "input" ? (
          <Input
            key={index}
            type={field.inputType || "text"}
            name={field.name}
            value={values[field.name as keyof SearchFieldValues]}
            onChange={handleChange}
            placeholder={field.placeholder}
            prepend={field.prepend}
          />
        ) : (
          <Select
            key={index}
            options={field.options || []}
            name={field.name}
            value={values[field.name as keyof SearchFieldValues]}
            placeholder={field.placeholder}
            onChange={handleChange}
          />
        )
      )}

      {/* Buttons */}
      <div className="flex gap-2 md:col-span-3 justify-end">
        <Button variant="outline" onclick={handleClear}>
          Clear
        </Button>
        <Button>Search</Button>
      </div>
    </form>
  );
}
