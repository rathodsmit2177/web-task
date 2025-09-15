import { PaginationControl } from "@/component/PaginationControl";
import { PropertyCard } from "@/component/PropertyCard";
import { Property } from "@/interface";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
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

  // const totalData:number = 30;
  // const dataPerPage : number = 6;

  // const totalPages : number = Math.ceil( x: totalData / dataPerPage);

  const page = searchParams["page"] ?? "1";
  const per_page = searchParams["per_page"] ?? "6";

  const start = (Number(page) - 1) * Number(per_page);
  const end = start + Number(per_page);

  const Items = properties.slice(start, end);

  // const totalData:number = 30;
  // const dataPerPage : number = 6;

  // const totalPages : number = Math.ceil( x: totalData / dataPerPage);
  // let currentPage:number = 1;

  // if(Number(searchParams.page) >= 1){
  //   currentPage = Number(searchParams.page)
  // }

  // let offSet:number = (currentPage - 1) * dataPerPage;

  return (
    <div className="py-20  px-15">
      <h1 className="text-xl font-bold mb-4">Properties</h1>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {Items?.map((el) => (
          <PropertyCard key={el?._id} data={el} />
        ))}
      </div>
      <PaginationControl />
    </div>
  );
}
