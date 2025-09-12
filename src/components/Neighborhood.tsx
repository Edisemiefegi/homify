function Neighborhood() {
  const images = [
    {
      url: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=800&q=80",
      type: "House",
      properties: 120,
      grid: "col-span-1",
    },
    {
      url: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80",
      type: "Apartment",
      properties: 80,
      grid: "col-span-1 row-span-2",
    },
    {
      url: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=800&q=80",
      type: "Villa",
      properties: 45,
      grid: "col-span-1 ",
    },
    {
      url: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=80",
      type: "Cottage",
      properties: 60,
      grid: "col-span-1 row-span-2",
    },
    {
      url: "https://images.unsplash.com/photo-1479839672679-a46483c0e7c8?auto=format&fit=crop&w=800&q=80",
      type: "Studio",
      properties: 90,
      grid: "col-span-1",
    },
    {
      url: "https://images.unsplash.com/photo-1448630360428-65456885c650?auto=format&fit=crop&w=800&q=80",
      type: "Condo",
      properties: 70,
      grid: "col-span-1 ",
    },
    {
      url: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=80",
      type: "Townhouse",
      properties: 50,
      grid: "col-span-1",
    },
  
  ];

  return (
    <div className="container  mx-auto w-11/12 sm:w-10/12 space-y-20">
      <div className=" space-y-3   md:w-3/4 text-center mx-auto">
        <h1 className="md:text-4xl text-3xl font-mono ">
          Explore The Neightborhood​
        </h1>
        <p className="text-gray-700  md:text-lg ">
          THERE ARE DIFFERENT PROPERTY OPTIONS TO CHOOSE FROM, EACH SERVING A
          PURPOSE TO HELP YOU BUILD A FINISHED SITE.​
        </p>
      </div>

      <div className="grid grid-cols-2 w-full  lg:h-lvh md:grid-cols-3 gap-6">
        {images.map((image, index) => (
          <div
            key={index}
            className={`relative h-full rounded-lg hover:opacity-90 cursor-pointer overflow-hidden group ${image.grid}`}
          >
            <img
              src={image.url}
              alt={image.type}
              className="w-full h-full object-cover  transform group-hover:scale-105 transition duration-300"
            />
            <div className="absolute inset-0 bg-black/30  flex flex-col justify-center items-center  transition duration-300">
              <h3 className="text-white text-xl font-semibold">{image.type}</h3>
              <p className="text-white">{image.properties} Properties</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Neighborhood;
