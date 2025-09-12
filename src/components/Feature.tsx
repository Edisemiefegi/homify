import { mockCards, type Card } from "../types";
import Button from "./base/Button";
import DetailCard from "./base/DetailCard";

function Feature() {
  const data: Card[] = mockCards;
  return (
    <div className="container  mx-auto sm:w-10/12 w-11/12  space-y-20">
      <div className=" space-y-3 w-full  md:w-3/4 text-center mx-auto">
        <h1 className="md:text-4xl   text-3xl font-mono ">
          Our Featured Exclusives
        </h1>
        <p className="text-gray-700 uppercase md:text-lg ">
          Discover handpicked properties that offer the perfect blend of
          comfort, style, and location for your next home.
        </p>
      </div>
      <div className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.map((card) => (
            <DetailCard key={card.id} card={card} />
          ))}
        </div>
        <div className=" w-60 mx-auto">
          <Button variant="outline" className="w-full">
            Load More
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Feature;
