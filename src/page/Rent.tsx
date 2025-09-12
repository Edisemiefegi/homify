import Search from "../components/base/Search";
import Hero from "../components/Hero";
import ListingPage from "../components/ListingPage";
import { mockCards, } from "../types";
import { useFilteredCards } from "../utils";

function Rent() {

  const { filteredCards, filters } = useFilteredCards(mockCards, "For Rent");

  const rentInfo = {
    heading: "Our Rent Services",
    text: "At Homify, we offer comprehensive rent services to help you find the perfect rental property...",
    image:
      "https://images.unsplash.com/photo-1448630360428-65456885c650?auto=format&fit=crop&w=800&q=80",
  };




  return (
    <div >
      <Hero
        heading={rentInfo.heading}
        text={rentInfo.text}
        image={rentInfo.image}
      />
      <Search />
      {filteredCards.length > 0 ? (
        <ListingPage
          breadcrumb={[{ label: "Home", link: "/" }, { label: "For Rent" }]}
          title="For Rent"
          cards={filteredCards}
        />
      ) : (
        <div className="text-center py-10 text-gray-600 font-medium">
          No results found{" "}
          {filters.location && `in ${filters.keyword} || ${filters.location}`}{" "}
          {filters.type && `for the property type ${filters.type}`}{" "}
          {filters.range && `within ${filters.range} budget`}
        </div>
      )}
    </div>
  );
}

export default Rent;
