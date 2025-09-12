import Agents from "../components/Agents";
import Hero from "../components/Hero";
import Services from "../components/Services";

function About() {
  const aboutInfo = {
    heading: "About Us",
    text: "Welcome to Homify, your trusted partner in finding the perfect home and roommate. Our mission is to simplify the rental process through innovative technology and personalized service. Whether you're searching for a cozy apartment or a compatible roommate, Homify is here to help you every step of the way.",
    image:
      "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=800&q=80",
  };
  return (
    <div>
      {" "}
      <Hero
        heading={aboutInfo.heading}
        text={aboutInfo.text}
        image={aboutInfo.image}
      />
      <div className="shadow-lg z-10 relative  container mx-auto w-11/12 md:w-10/12 md:-mt-20 rounded-md  bg-white mb-20  ">
        <Services/>
      </div>

      <div>
        <Agents row/>
      </div>
    </div>
  );
}

export default About;
