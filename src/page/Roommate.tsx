import Hero from "../components/Hero";
import RoommateCardComponent from "../components/RoommateCard";
import { mockRoommates } from "../types";

function Roommate() {
  const roommateInfo = {
    heading: "Find Your Perfect Roommate",
    text: "Create your roommate profile and browse through others to find the right match. Whether you’re a student, professional, or freelancer, Homify helps you connect with people who fit your lifestyle.",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
  };

  return (
    <div>
      <Hero
        heading={roommateInfo.heading}
        text={roommateInfo.text}
        image={roommateInfo.image}
        showButton
      />

      <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockRoommates.map((roommate) => (
          <RoommateCardComponent key={roommate.id} card={roommate} />
        ))}
      </div>
    </div>
  );
}

export default Roommate;
