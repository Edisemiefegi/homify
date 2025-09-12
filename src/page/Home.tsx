import Agents from "../components/Agents";
import Feature from "../components/Feature";
import Hero from "../components/Hero";
import Neighborhood from "../components/Neighborhood";
import Roommate from "../components/Roommate";
import Services from "../components/Services";

function Home() {
  return (
    <div className="space-y-20 h-full mb-10">
      <Hero home image="/background.jpg" />
      <Feature />
      <Roommate/>
      <Neighborhood/>
      <Agents/>
      <Services heading="Our Services"/>
    </div>
  );
}

export default Home;
