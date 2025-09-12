import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Card from "./Card";
import Button from "./Button";
import Input from "./Input";
import Select from "./Select";

function HeroSearch() {
  const [activeType, setActiveType] = useState<
    "for-sale" | "for-rent" | "roommate"
  >("for-sale");

  const [searchValues, setSearchValues] = useState({
    location: "",
    type: "",
    range: ""
  })

  const searchField = [
    {
      type: "input",
      placeholder: "Enter city Location",
      value: searchValues.location,
      name: "location",
    },
    {
      placeholder: "Property type",
      type: "select",
      name: "type",
      options: ["Apartment", "House", "Congo", "Studio"],
      value: searchValues.type
    },
    {
      placeholder: "Price range",
      type: "select",
      name: "range",
      options: [
        "₦100,000 - ₦300,000",
        "₦300,100 - ₦500,000",
        "₦510,000 - ₦800,000",
        "₦900,000+",
      ],
      value: searchValues.range
    },
  ];


  const navigate = useNavigate();

  const handleSearch = () => {
    const query = new URLSearchParams(searchValues).toString();
    // console.log(query, 'query');
    navigate(`/${activeType}?${query}`);
    
  };

  const handleChange = (e: { target: { name?: string; value: string } }) => {
    const { name, value } = e.target;
    if (!name) return;
    setSearchValues((prev) => ({
      ...prev,
      [name]: value,
    }));

  };


  return (
    <Card className="bg-opacity-75 space-y-4">
      {/* status Toggle */}
      <div className="flex flex-wrap gap-4">
        <Button
          variant="outline"
          className={`${activeType === "for-sale" ? "bg-primary text-white" : ""
            }`}
          onclick={() => setActiveType("for-sale")}
        >
          <i className="pi pi-home"></i> Buy
        </Button>
        <Button
          variant="outline"
          className={`${activeType === "for-rent" ? "bg-primary text-white" : ""
            }`}
          onclick={() => setActiveType("for-rent")}
        >
          <i className="pi pi-home"></i> Rent
        </Button>
        <Button
          className={`${activeType === "roommate" ? "bg-primary text-white" : "bg-warning !text-primary"
            }`}
          onclick={() => setActiveType("roommate")}
        >
          <i className="pi pi-users"></i> Roommate
        </Button>
      </div>

      {/* Search Fields */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {searchField.map((field, index) => (
          <div key={index}>
            {field.type === "input" ? (
              <Input
                name={field.name}
                onChange={handleChange}
                value={field.value}
                placeholder={field.placeholder}
              />
            ) : (
              <Select
                name={field.name}
                value={field.value}
                options={field.options}
                placeholder={field.placeholder}
                onChange={handleChange}
              />
            )}
          </div>
        ))}
      </div>

      {/* Search Button */}
      <Button className="w-full" onclick={handleSearch}>
        <i className="pi pi-search"></i> Search Properties
      </Button>
    </Card>
  );
}

export default HeroSearch;
