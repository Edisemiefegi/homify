import { useNavigate } from "react-router-dom";
import Button from "./Button";
import Card from "./Card";
import Input from "./Input";
import Review from "./Review";
import Select from "./Select";

interface Props {
  breadcrumb?: { label?: string; link?: string }[];
  card?: any;
}


function House({ breadcrumb, card }: Props) {
  const navigate = useNavigate();

  const details = [
    { text: card.propertyType, value: "Property Type" },
    {
      text: "Bedrooms",
      icon: "/icons/bed.png",
      value: card.properties.bedrooms,
    },
    {
      text: "Bathroms",
      icon: "/icons/shower.png",
      value: card.properties.bathrooms,
    },
    { text: "Garage", icon: "/icons/car.svg", value: card.properties.garages },
    { text: "Area", icon: "/icons/location.png", value: card.properties.sqft },
  ];

  const address = [
    {
      name: "Address:",
      value: card.address.area,
    },
    {
      name: "City:",
      value: card.address.city,
    },
    {
      name: "Zip/Postal Code:",
      value: card.address.zipCode,
    },
    {
      name: "Area:",
      value: card.address.street,
    },
  ];
  const propertyDetails = {
    details: [
      { name: "Price", value: `N${card.price}/year` },
      { name: "Property Size", value: `${card.properties.sqft} m2` },
      { name: "Bathrooms", value: card.properties.bathrooms },
      { name: "Bedrooms", value: card.properties.bedrooms },
      { name: "Garage", value: card.properties.garage },
      { name: "Garage size", value: "200 SqFt" },
      { name: "Property Type", value: card.propertyType },
      { name: "Status", value: card.status },
    ],
    additional: [
      { name: "Deposit", value: card.properties.deposit },
      { name: "Pool Size", value: card.properties.poolSize },
      { name: "Last remodel year", value: card.properties.lastRemodelYear },
      { name: "Additional Rooms:", value: card.extras.additionalRooms },
      {
        name: "Amenities",
        value: card.extras.amenities.map((e: string) => e),
      },
      {
        name: "Equipment",
        value: card.extras.equipment.map((e: string) => e),
      },
    ],
  };
  return (
    <main className="space-y-6 w-full ">
      {/* breadcrums */}
      <div className="flex   gap-2 sm:flex-row flex-col justify-between sm:items-center">
        <div className="flex  gap-2 items-center text-gray-600">
          {breadcrumb?.map((item, idx) => (
            <div key={idx} className="flex gap-2 items-center">
              {idx > 0 && <i className="pi pi-angle-right"></i>}
              {item.link ? (
                <Button
                  onclick={() => navigate(item.link!)}
                  variant="text"
                  className="!text-xs text-primary !px-0 !py-0"
                >
                  {item.label}
                </Button>
              ) : (
                <p className="text-xs">{item.label}</p>
              )}
            </div>
          ))}
        </div>

        <div>
          <Button variant="outline" className=" pi pi-heart">
            {" "}
          </Button>
          <Button variant="outline" className="  !ml-2 pi pi-share-alt">
            {" "}
          </Button>
        </div>
      </div>

      {/* title */}
      <div className="flex justify-between">
        <div>
          <h1 className="font-medium text-lg sm:text-2xl">{card.title}</h1>
          <p className="text-gray-700 text-xs">{`${card.address.city}, ${card.address.area}, ${card.address.zipCode}`}</p>
        </div>
        <p className=" text-lg sm:text-2xl font-bold ">
          N{card.price}
          <span className="font-normal">/year</span>
        </p>
      </div>

      {/* feature */}
      <div className=" flex gap-2">
        <Button className="text-xs  ">FEATURED</Button>
        <Button className="!bg-gray-600   text-xs ">{card.status}</Button>
      </div>

      {/* images and details */}
      <div className="space-y-6">
        <div className="grid grid-cols-3 gap-6">
          {card.imageUrls.slice(0, 3).map((img: string, index: number) => {
            const colSpans = [
              "col-span-2 row-span-2",
              "col-span-1 row-span-1",
              "col-span-1 row-span-1",
            ];

            return (
              <img
                key={index}
                src={img}
                className={`w-full h-auto object-cover rounded-lg ${colSpans[index]}`}
              />
            );
          })}
        </div>
        <div className="grid grid-cols-3 sm:grid-cols-5 w-full gap-4 items-center  justify-between">
          {details.map((detail, index) => (
            <div className="flex flex-col text-center items-center" key={index}>
              <p className="flex  gap-1">
                {detail.icon && (<img src={detail.icon} alt={detail.text} className="w-4 h-4" />
                )}
                <span className="font-medium">{detail?.value}</span>
              </p>
              <p>{detail?.text}</p>
            </div>
          ))}
        </div>
      </div>

      <main className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* description and address */}
        <div className="lg:col-span-2  space-y-6">
          {/* description */}
          <Card>
            <h1 className=" text-lg  mb-4 border-b border-gray-400 pb-4">
              Description
            </h1>

            <p className="text-gray-700 text-sm leading-7">
              {card.description}
            </p>
          </Card>

          {/* address */}
          <Card className="space-y-4">
            <div className="flex justify-between">
              <h1 className="text-lg  ">Address</h1>
              <Button className="pi pi-map">Open Google map</Button>
            </div>
            <hr className="text-gray-400" />
            <div className="grid grid-cols-2  gap-y-2 gap-x-8">
              {address.map((item, index) => (
                <div
                  key={index}
                  className="flex gap-2 justify-between border-b pb-3 border-gray-400"
                >
                  <h1 className="font-medium  ">{item.name}</h1>
                  <p>{item.value}</p>
                </div>
              ))}
            </div>
          </Card>

          {/* details */}
          <Card className="space-y-4">
            <div className="grid sm:grid-cols-2 grid-cols-1  ljustify-between">
              <h1 className="text-lg  ">Details</h1>
              <Button
                variant="text"
                className="pi  !px-0 text-start pi-paperclip text-xs text-gray-600"
              >
                Updated on April 4, 2020 at 10:23 pm
              </Button>
            </div>
            <hr className="text-gray-400" />

            <div className="space-y-8">
              {/* Details Section */}
              <div>
                <div className="grid grid-cols-1 p-6 rounded-md md:grid-cols-2 gap-4 border-primary border bg-primary-light">
                  {propertyDetails.details.map((item: any, index: number) => (
                    <div
                      key={index}
                      className="flex justify-between border-b border-gray-400 pb-2"
                    >
                      <span className="font-medium text-gray-600">
                        {item.name}
                      </span>
                      <span className="text-gray-800">{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Additional Info Section */}
              <div>
                <h2 className="text-xl font-semibold mb-4">
                  Additional Information
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {propertyDetails.additional.map(
                    (item: any, index: number) => (
                      <div
                        key={index}
                        className="flex justify-between gap-4 md:gap-0 border-b border-gray-200 pb-2"
                      >
                        <span className="font-medium text-gray-600">
                          {item.name}
                        </span>
                        <span className="text-gray-800">
                          {Array.isArray(item.value)
                            ? item.value.join(", ")
                            : item.value}
                        </span>
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>
          </Card>

          {/* features */}
          <Card className="space-y-4">
            <h1 className="text-lg  ">Features</h1>

            <hr className="text-gray-400" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {card.extras.features.map((item: any, index: number) => (
                <div
                  key={index}
                  className="flex justify-between gap-4 md:gap-0 "
                >
                  <p className="pi pi-check-circle  text-gray-600 ">
                    <span className="font-medium ml-2">{item}</span>
                  </p>
                </div>
              ))}
            </div>
          </Card>

          {/* flow plan */}
          <Card className="space-y-4">
            <h1 className="text-lg  ">Floor Plans</h1>

            <hr className="text-gray-400" />

            <div>
              <img
                src={card.extras.floorPlan}
                alt="Floor Plan"
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>
          </Card>
        </div>

        {/* agent */}
        <Card className="lg:col-span-1 space-y-6 h-fit ">
          <div className="flex gap-4">
            <img
              src={card.agent.imageUrl}
              alt=""
              className="w-20 h-20 rounded-md"
            />
            <div className="flex flex-col">
              <p className="pi pi-user font-light">{card.agent.name}</p>
              <Button
                variant="text"
                className="text-primary !px-0 !py-0 !text-start"
              >
                View Listings
              </Button>
            </div>
          </div>

          <form onSubmit={(e) => {
            e.preventDefault();
            alert("Form submitted");
          }} action="" className="space-y-4 ">
            <Input placeholder="Name" />
            <Input placeholder="Email" />
            <Input placeholder="Phone" />
            <Input placeholder="Message" className=" h-26" />
            <Select
              placeholder="Select"
              options={[
                "I'm a buyer",
                "I'm a tenant",
                "I'm an agent",
                "others",
              ]}
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              <Button >Send Message</Button>
              <Button variant="outline">Call</Button>
            </div>
          </form>
        </Card>


      </main>
      {/* review  */}
      <div className="">
        <Review />
      </div>
    </main>
  );
}

export default House;
