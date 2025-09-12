import React from "react";
import { agents } from "../types";
import Card from "./base/Card";
import Button from "./base/Button";
import Select from "./base/Select";
import Input from "./base/Input";

interface Props {
  row?: boolean;
}

function Agents({ row = false }: Props) {
  const searchField = [
    {
      type: "input",
      placeholder: "Enter Agent Name",
      prepend: <i className="pi pi-map-marker"></i>,
    },
    {
      placeholder: "All Categories",
      type: "select",
      options: ["Apartment", "House", "Congo", "Studio"],
    },
    {
      placeholder: "All Locations",
      type: "select",
      options: ["Apartment", "House", "Congo", "Studio"],
    },
  ];
  const Agents = agents;
  return (
    <div className="w-full bg-background">
      <div className="container  mx-auto sm:w-10/12 w-11/12  space-y-20  py-20">
        <div className=" space-y-3   md:w-3/4 text-center mx-auto">
          <h1 className="md:text-4xl text-3xl font-mono ">Meet Our Agents</h1>
          <p className="text-gray-700  md:text-lg ">
            Choose from different listing templates and lay them outas lists or
            grids, full-width or boxed ​
          </p>
        </div>

        {row ? (
          <div className="space-y-10 ">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {searchField.map((e, index) => (
                <div key={index}>
                  {e.type == "input" ? (
                    <Input placeholder="Enter Location" />
                  ) : (
                    <Select options={e.options} placeholder={e.placeholder} />
                  )}
                </div>
              ))}
              <Button>Search Agent</Button>
            </div>
            <div className="grid grid-cols-1 w-full gap-4 sm:grid-cols-2  ">
              {Agents.map((agent) => (
                <Card
                  key={agent.id}
                  className="   w-full grid grid-cols-1 md:gap-0 gap-4 md:grid-cols-2  rounded-none shadow-none  "
                >
                  <img
                    src={agent.imageUrl}
                    alt={agent.name}
                    className="md:w-40 md:h-40 w-28 h-28 "
                  />
                  <div className="space-y-2  w-fit">
                    <p className="flex gap-2">
                      <Button
                        rounded
                        className="text-primary !px-1 !py-1 text-xs"
                      >
                        VERIFIED
                      </Button>
                     <span className=" font-semibold">
                       {agent.name}
                     </span>
                    </p>
                    <p className="text-gray-600 text-sm">{agent.agency}</p>

                    <i className="pi pi-phone"> {agent.phone}</i>

                    <i className="pi pi-envelope text-secondary "><span className="ml-2">{agent.email}</span></i>
                    <div className="flex justify-between items-center">
                      <div className="flex gap-2">
                        <i className="pi pi-facebook"></i>
                        <i className="pi pi-twitter"></i>
                        <i className="pi pi-linkedin"></i>
                        <i className="pi pi-instagram"></i>
                      </div>
                      <Button variant="text" className="text-primary">
                        View Profile
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 w-full  sm:gap-0 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
            {Agents.map((agent) => (
              <Card
                key={agent.id}
                className=" flex rounded-none shadow-none font-light hover:shadow-xl transform hover:scale-105 transition duration-300 flex-col items-center text-center space-y-4"
              >
                <img
                  src={agent.imageUrl}
                  alt={agent.name}
                  className="w-40 h-40 rounded-full "
                />
                <div>
                  <p className="text-primary font-semibold">{agent.name}</p>
                  <p className="text-gray-700">{agent.agency}</p>
                </div>
                <p>{agent.description}</p>
                <Button variant="text" className="text-primary">
                  View Profile
                </Button>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Agents;
