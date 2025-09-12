import Card from "./Card";
import Carousel from "./Carousel";
import type { Card as CardType } from "../../types";
import Button from "./Button";
import { useNavigate } from "react-router-dom";

interface ModalProps {
  onClose?: () => void;
  details: CardType;
}

function Modal({  onClose, details }: ModalProps) {
const navigate = useNavigate();

  const property = [
    { icon: "/icons/bed.png", value: details.properties.bedrooms, text: "Bedrooms" },
    { icon: "/icons/shower.png", value: details.properties.bathrooms, text: "Bathrooms" },
    { icon: "/icons/car.svg", value: details.properties.garages, text: "Garages" },
    { icon: "/icons/location.png", value: details.properties.sqft, text: "Area" },
  ];

  return (
    <Card className="fixed !border-none sm:top-10 top-20 left-1/2 -translate-x-1/2 z-50 w-11/12 sm:w-10/12  !p-0 overflow-hidden ">
      <div className="py-2 px-8 bg-black text-white flex justify-between">
        <p>HomiFy</p>
        <div className="flex">
          <Button variant="text">
            <i className="pi pi-heart"></i>
          </Button>

          <Button onclick={onClose} variant="text">
            <i className="pi pi-times"></i>
          </Button>
        </div>
      </div>
      <div className="grid overflow-y-scroll h-96 grid-cols-3 gap-6 p-8">
        <div className="md:col-span-2 col-span-3 h-96">
          <Carousel images={details.imageUrls} />
        </div>
        <div className="md:col-span-1  col-span-3  flex flex-col gap-3">
          <Button
            size="small"
            className="!bg-gray-600 w-fit  !px-1 text-xs !py-1 "
          >
            {details.status}
          </Button>
          <h1 className="font-medium">{details.title}</h1>
          <p className="text-sm text-gray-600">{details.address.city}  </p>
          <hr />
          <p className="font-medium">{details.price}</p>
          <hr />

          <div className="flex gap-4 ">
            {property.map((item, index) => (
              <div>
                <p key={index} className="flex  gap-1">
                  <img src={item.icon} alt="" className="w-4" /> {item.value}
                </p>
                <p className="text-xs">{item.text}</p>
              </div>
            ))}
          </div>

          <hr />
          <Button onclick={() => navigate(`/${details.propertyType.toLowerCase().replace(/\s+/g, "")}/${details.title.toLowerCase().replace(/\s+/g, "")}`)}> Details</Button>
        </div>
      </div>
    </Card>
  );
}

export default Modal;
