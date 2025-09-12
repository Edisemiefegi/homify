interface Props {
  heading?: string;
}

function Services({  heading }: Props) {
  const services = [
    {
      title: "Property Management",
      description:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy",
      icon: "pi pi-home",
    },
    {
      title: "Capital Improvements",
      description:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy",
      icon: "pi pi-building",
    },
    {
      title: "Financial Reporting",
      description:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy",
      icon: "pi pi-chart-line",
    },
    {
      title: "Business Development",
      description:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy",
      icon: "pi pi-briefcase",
    },
    {
      title: "Finance Real Estate",
      description:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy",
      icon: "pi pi-dollar",
    },
    {
      title: "Recover Asset Value",
      description:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy",
      icon: "pi pi-refresh",
    },
  ];

  return (
    <div className="container  mx-auto w-11/12 sm:w-10/12  space-y-20  py-10">
      {heading && (
        <h1 className="md:text-4xl text-3xl font-mono text-center mx-auto ">
          {heading}
        </h1>
      )}

      <div className="grid grid-cols-1 w-full   gap-8 sm:grid-cols-2 lg:grid-cols-3 ">
        {services.map((service) => (
          <div key={service.title} className=" flex items-center    gap-6">
            <i className={`${service.icon} text-2xl text-gray-700`}></i>
            <div>
              <p className="text-primary  text-xl  mb-2 font-semibold">
                {service.title}
              </p>
              <p className="text-gray-700 font-light">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
