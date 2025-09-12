import { useState } from "react";
import type { Card } from "../../types";
import Button from "./Button";
import Carousel from "./Carousel";
import Modal from "./Modal";
import { useNavigate } from "react-router-dom";

interface DetailCardProps {
  card: Card;
}

function DetailCard({ card }: DetailCardProps) {
  const [openModal, setOpenModal] = useState(false);
  const navigate = useNavigate();

  const buttons = [
    {
      icon: "pi-arrow-up-right-and-arrow-down-left-from-center",
      text: "preview",
      onclick: () => {
        setOpenModal(true);
      },
    },
    { icon: "pi-heart", text: "save" },
    { icon: "pi-plus-circle", text: "compare" },
  ];

  const details = [
    { icon: "/icons/bed.png", value: card.properties.bedrooms },
    { icon: "/icons/shower.png", value: card.properties.bathrooms },
    { icon: "/icons/car.svg", value: card.properties.garages },
    { icon: "/icons/location.png", value: card.properties.sqft },
  ];

  return (
    <div className="flex flex-col  rounded-md shadow-sm overflow-hidden   ">
      <div className="relative       w-full h-64  cursor-pointer transition-colors duration-300">
        <Carousel
          images={card.imageUrls}
          className="w-full h-64 hover:opacity-95"
        />
        <div className=" w-full flex absolute top-0 left-0  justify-between py-4 px-6">
          <Button size="small" className="!px-1 text-xs !py-1 ">
            FEATURED
          </Button>
          <Button size="small" className="!bg-gray-600  !px-1 text-xs !py-1 ">
            {card.status}
          </Button>
        </div>

        <div className="absolute bottom-6 right-6 flex gap-2 ">
          {buttons.map((button, index) => (
            <Button
              key={index}
              size="small"
              onclick={button.onclick}
              className="!bg-gray-400/50 group relative  !rounded-sm !px-2  !py-2 "
            >
              <p className="absolute -top-7 group-hover:block hidden bg-gray-700 text-xs p-1 rounded-sm">
                {button.text}
              </p>
              <i className={`pi ${button.icon}`} />
            </Button>
          ))}
        </div>
      </div>{" "}
      {/* content */}
      <div className="py-6 relative h-40 flex flex-col gap-1 items-center  text-center">
        <h1
          onClick={() =>
            navigate(
              `/${card.propertyType
                .toLowerCase()
                .replace(/\s+/g, "")}/${card.title
                .toLowerCase()
                .replace(/\s+/g, "")}`
            )
          }
          className="text-xl font-medium hover:text-primary cursor-pointer"
        >
          {card.title}
        </h1>
        <p className="font-medium">{card.price}</p>
        <p className="font-light text-xs capitalize">{card.propertyType}</p>
        <div className="flex gap-4 text-sm absolute bottom-6">
          {details.map((detail, index) => (
            <p key={index} className="flex  gap-1">
              <img src={detail.icon} alt="" className="w-4" /> {detail.value}
            </p>
          ))}
        </div>
      </div>
      {/* modal */}
      {openModal && (
        <div className="w-full">
          <div className="fixed inset-0 bg-black/50 z-50"></div>

          <Modal details={card} onClose={() => setOpenModal(false)} />
        </div>
      )}
    </div>
  );
}

export default DetailCard;
