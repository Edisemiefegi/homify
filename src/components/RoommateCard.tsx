import type { RoommateCard } from "../types";
import Button from "./base/Button";
import Card from "./base/Card";

interface Props {
  card: RoommateCard;
}

function RoommateCardComponent({ card }: Props) {
  return (
    <Card className="space-y-3">
      <img
        src={card.image}
        alt={card.name}
        className="w-full h-48 object-cover rounded-md mb-4"
      />
      <h3 className="text-lg font-semibold">{card.name}, {card.age}</h3>
      <p className="text-sm text-gray-500">{card.occupation} • {card.location}</p>
      <p className=" text-sm">{card.bio}</p>
      <p className="font-medium text-primary">Budget: ₦{card.budget.toLocaleString()}</p>
      <div className="flex flex-wrap gap-2">
        {card.preferences.map((pref, idx) => (
          <span
            key={idx}
            className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full"
          >
            {pref}
          </span>
        ))}
      </div>
      <div className="flex gap-2">
        <Button variant="outline" onclick={() => alert("seen!")}>View Profile</Button>
        <Button onclick={() => alert("connected!")} >Connect</Button>
      </div>
    </Card>
  );
}

export default RoommateCardComponent;
