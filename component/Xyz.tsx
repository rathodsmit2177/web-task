// import { FackData } from "@/component/FackData";
// import { Products } from "@/interface";
// import { useEffect, useState } from "react";
// import { useInView } from "react-intersection-observer";

// export default async function Xyz() {
//   const [data, setData] = useState<Products[]>([]);
//   const [page, setPage] = useState<number>(1);
//   const [isLoading, setIsLoading] = useState<boolean>(false);
//   const [hasMore, setHasMore] = useState<boolean>(true);

//   const { ref, inView } = useInView({
//     thresholde: 0,
//   });

//   const fetchData = async (pageNumber) => {
//     setIsLoading(true);
//     try {
//       const response = await fetch(
//         `https://dummyjson.com/products?page=${pageNumber}&limit=10`
//       );
//       const newData = await response.json();
//       setData((prevData) => [...prevData, ...newData]);
//       if (newData.length === 0) {
//         setHasMore(false);
//       }
//     } catch (error) {
//       console.log("Faild to fetch Data:", error);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   useEffect(() => {
//     if (inView && !isLoading && hasMore) {
//       setPage((prevPage) => prevPage + 1);
//     }
//   }, [inView, isLoading, hasMore]);

//   useEffect(() => {
//     if (page === 1) {
//       fetchData(1);
//     }
//   }, []);

//   // const url = "https://dummyjson.com/products?limit=200";
//   // let response = await fetch(url);
//   // response = await response.json();
//   // const finalData: Products[] = response?.products;

//   return (
//     <div className="py-20 px-15 bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen">
//       <h1 className="font-extrabold text-center text-4xl text-gray-800 mb-10 ">
//         DummyData
//       </h1>

//       <ul className="grid gap-15">
//         {data.map((product) => (
//           <li
//             key={product?.id}
//             className="bg-white rounded-2xl hover:scale-105   p-6  items-center "
//           >
//             <FackData data={product} />
//           </li>
//         ))}
//       </ul>
//       <div ref={ref} className="h-1"></div>
//       {isLoading && <div>Loading The Data..</div>}
//       {/* {!hasMore && !isLoading && <div>end of the data</div>} */}
//     </div>
//   );
// }
