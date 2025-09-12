import { useLocation } from "react-router-dom";
import { useMemo } from "react";
import { type Card } from "../types";


export const checkPriceRange = (price: number, range: string): boolean => {
  if (!range) return true;

  const cleaned = range.replace(/₦/g, "").replace(/,/g, "").trim();

  if (cleaned.includes("-")) {
    const [minStr, maxStr] = cleaned.split("-").map((s) => s.trim());
    const min = parseInt(minStr, 10);
    const max = parseInt(maxStr, 10);
    return price >= min && price <= max;
  }

  if (cleaned.endsWith("+")) {
    const min = parseInt(cleaned.replace("+", ""), 10);
    return price >= min;
  }

  return true;
}


export const useFilters = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);

  return {
    location: params.get("location") || "",
    range: params.get("range") || "",
    keyword: params.get("keyword") || "",
    city: params.get("city") || "",
    area: params.get("area") || "",
    status: params.get("status") || "",
    minPrice: params.get("minPrice") || "",
    maxPrice: params.get("maxPrice") || "",
    bathrooms: params.get("bathrooms") || "",
    bedrooms: params.get("bedrooms") || "",
    type: params.get("type") || "",
  };
};

/**
 * Filter cards based on status + filters
 */
export const useFilteredCards = (mockCards: Card[], status: string) => {
  const filters = useFilters();

  const filteredCards = useMemo(() => {
    return mockCards.filter((card) => {
      return (
        card.status === status &&
        (filters.location
          ? card.address.area?.toLowerCase().includes(filters.location.toLowerCase())
          : true) &&
        (filters.city
          ? card.address.city?.toLowerCase().includes(filters.city.toLowerCase())
          : true) &&
        (filters.area
          ? card.address.area?.toLowerCase().includes(filters.area.toLowerCase())
          : true) &&
        (filters.type ? card.propertyType === filters.type : true) &&
        (filters.minPrice
          ? card.price >= parseInt(filters.minPrice, 10)
          : true) &&
        (filters.maxPrice
          ? card.price <= parseInt(filters.maxPrice, 10)
          : true) &&
        (filters.bathrooms
          ? card.properties.bathrooms >= Number(filters.bathrooms)
          : true) &&
        (filters.bedrooms
          ? card.properties.bedrooms >= Number(filters.bedrooms)
          : true) &&
        (filters.keyword
          ? card.title.toLowerCase().includes(filters.keyword.toLowerCase())
          : true)
        &&
        (filters.range ? checkPriceRange(card.price, filters.range) : true)
      );
    });
  }, [filters, mockCards, status]);

  return { filteredCards, filters };
};