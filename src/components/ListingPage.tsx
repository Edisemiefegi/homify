import { useNavigate } from "react-router-dom";
import Button from "./base/Button";
import DetailCard from "./base/DetailCard";

interface ListingPageProps {
  breadcrumb: { label: string; link?: string }[];
  title: string;
  cards: any;
}

export default function ListingPage({
  breadcrumb,
  title,
  cards,
}: ListingPageProps) {


  const Navigate = useNavigate();
  return (
    <div>
      {/* Content Section */}
      <div className="w-full bg-background">
        <div className="container mx-auto w-11/12 sm:w-10/12 space-y-4 py-20">
          {/* Breadcrumb */}
          <div className="flex gap-2 items-center text-gray-600">
            {breadcrumb.map((item, idx) => (
              <div key={idx} className="flex gap-2 items-center">
                {idx > 0 && <i className="pi pi-angle-right"></i>}
                {item.link ? (
                  <Button
                  onclick={() => Navigate(item.link!)}
                    variant="text"
                    className="!text-xs text-primary !px-0 !py-0"
                  >
                    {item.label}
                  </Button>
                ) : (
                  <p className="text-xs">{item.label}</p>
                )}
              </div>
            ))}
          </div>

          {/* Title */}
          <p className="text-3xl font-semibold">{title}</p>

          {/* Properties */}
          <div>
            <p className="text-sm text-gray-600 mb-2">
              {cards.length} Properties
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {cards.map((card: any) => (
                <DetailCard key={card.id} card={card} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
