import Card from "./base/Card";
import Button from "./base/Button";
import HeroSearch from "./base/HeroSearch";

interface Props {
  className?: string;
  heading?: string;
  text?: string;
  image?: string;
  home?: boolean;
  showButton?: boolean;
}

function Hero({
  heading,
  text,
  image,
  home = false,
  showButton = false,
}: Props) {
  const why = [
    {
      heading: "Smart Search",
      text: "AI-powered property matching",
      icon: "pi pi-search",
      color: "bg-primary",
    },
    {
      heading: "Roommate Matching",
      text: "Find compatible housemates",
      icon: "pi pi-users text-primary",
      color: "bg-warning",
    },
    {
      heading: "Location Insights",
      text: "Neighborhood analytics",
      icon: "pi pi-map-marker",
      color: "bg-secondary",
    },
  ];



  return (
    <div
      className="w-full bg-no-repeat bg-cover lg:h-screen h-fit   "
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="absolute inset-0 bg-black/50 lg:h-screen h-fit"></div>
      <div className="relative z-10  lg:h-screen h-fit ">
        {home ? (
          <div className="container py-30    mx-auto sm:w-10/12 w-11/12 grid lg:grid-cols-2 grid-cols-1   gap-10  h-full  items-center ">
            <div className=" space-y-4    ">
              <h1 className="text-4xl text-white font-medium text-center ">
                Find Your Perfect Home
              </h1>
              <p className="text-lg text-white text-center">
                Discover amazing properties and connect with compatible
                roommates. Your dream home is just a search away.
              </p>
              <HeroSearch />

            </div>

            <Card className="bg-opacity-75 space-y-6 ">
              <h1 className="font-bold text-2xl ">Why Choose HomiFy?</h1>
              <div className="w-full space-y-3 ">
                {why.map((item, index) => (
                  <div key={index} className="flex gap-4 ">
                    <div
                      className={`h-10 w-10 rounded-full ${item.color} text-white flex justify-center items-center`}
                    >
                      <i className={item.icon}></i>
                    </div>
                    <div className="">
                      <p className="font-medium text-lg">{item.heading}</p>
                      <p className="text-gray-700">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        ) : (
          <div className="text-white text-center  flex flex-col justify-center  items-center h-full   space-y-6  py-20  container  w-11/12 sm:w-10/12 mx-auto">
            <h1 className="font-bold text-4xl">{heading}</h1>
            <p className="w-full md:w-2/3">{text}</p>
            {showButton && (
              <Button onclick={() => alert("profile created!")}>
                {" "}
                <i className="pi pi-plus text-xs"></i>Create Your Profile
              </Button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default Hero;
