import { Forms } from "@/component/Forms";

export default async function Update({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const propertyName = await searchParams.propertyname;

  return (
    <div className="max-w-2xl mx-auto py-25 p-8">
      <h1 className="text-center text-3xl font-bold text-orange-600 mb-8">
        Update Property Form
      </h1>
      <div>
        <Forms propertyName={propertyName} />
      </div>
    </div>
  );
}
