import { useParams } from "react-router-dom";
import House from "../components/base/House";
import { mockCards } from "../types";

function HouseId() {
  const { housetype, title } = useParams();
  const card = mockCards.find((card) => {
    // console.log(card.propertyType, housetype, "sjjsj");
    return (
      card.propertyType.toLowerCase().replace(/\s+/g, "") ===
        housetype?.toLowerCase() &&
      card.title.toLowerCase().replace(/\s+/g, "") === title?.toLowerCase()
    );
  });
  if (!card) {
    return <p className="text-center text-red-500">Property not found</p>;
  }

  return (
    <main className="bg-background">
      <div className="w-11/12 sm:w-10/12 mx-auto container py-30">
        <House
          breadcrumb={[
            { label: "Home", link: "/" },
            { label: card?.propertyType, link: "/" },
            { label: card?.title },
          ]}
          card={card}
        />
      </div>
    </main>
  );
}

export default HouseId;
