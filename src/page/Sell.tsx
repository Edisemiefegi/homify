import ListingPage from "../components/ListingPage";
import { mockCards } from "../types";
import Hero from "../components/Hero";
import Search from "../components/base/Search";
import { useFilteredCards, } from "../utils";


function Sell() {
  const sellInfo = {
    heading: "Our Selling Services",
    text: "We connect sellers with potential buyers seamlessly...",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
  };


  const { filteredCards, filters } = useFilteredCards(mockCards, "For Rent");


  return (
    <div>
      <Hero
        heading={sellInfo.heading}
        text={sellInfo.text}
        image={sellInfo.image}
      />
      <Search  />

      {filteredCards.length > 0 ? (
        <ListingPage
          breadcrumb={[{ label: "Home", link: "/" }, { label: "For Sale" }]}
          title="For Sale"
          cards={filteredCards as typeof mockCards}
        />
      ) : (
        <div className="text-center py-10 text-gray-600 font-medium">
          No results found{" "}
          {filters.location && `in ${filters.location}`}{" "}
          {filters.type && `for the property type ${filters.type}`}{" "}
          {filters.range && `within ${filters.range} budget`}
        </div>
      )}

    </div>
  );
}

export default Sell;
