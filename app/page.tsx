import { PropertyCard } from "@/component/PropertyCard";
import { Property } from "@/interface";

export default async function Home() {
  const url = "https://api.housivity.com/production/api/v2/properties";

  const payload = {
    type: 4,
    cityId: "65a7d58f85420585d40a19a7",
    page: 1,
    per_page: 30,
  };

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  const data = await response.json();
  const properties: Property[] = data?.data;

  return (
    <div className="py-20  px-15">
      <h1 className="text-xl font-bold mb-4">Properties</h1>
      <div className="grid grid-cols-3 gap-4">
        {properties?.map((el, index) => (
          <PropertyCard key={index} data={el} />
        ))}
      </div>
    </div>
  );
}
