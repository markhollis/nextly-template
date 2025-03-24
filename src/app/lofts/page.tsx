import { Units } from "@/components/Units";

const LoftsPage = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/units`
  );
  const data = await response.json();

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Available Lofts</h1>
      <Units units={data} />
    </div>
  );
};

export default LoftsPage;
