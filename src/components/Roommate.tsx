import { useNavigate } from "react-router-dom";
import Button from "./base/Button";
import Carousel from "./base/Carousel";

function Roommate() {
  const images = [
    "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=800&q=80",
  ];

  const navigate = useNavigate()

  return (
    <div className="w-full h-screen relative">
      <div className="w-1/3 bg-gray-400/60 z-20 absolute h-full"></div>
      <Carousel autoplay images={images} />
      <div>
        <div  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 text-center space-y-6 w-11/12 sm:w-10/12">
          <h2 className="text-4xl font-bold text-white">
            Find Your Ideal Roommate
          </h2>
          <p className="text-white text-lg font-semibold">
            Connect with compatible housemates effortlessly.
          </p>
          <Button className="bg-primary" onclick={() => navigate("/roommate")}>
            Get Started
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Roommate;
