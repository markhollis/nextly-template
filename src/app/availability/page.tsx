import { Container } from "@/components/Container";

const AvailabilityPage = () => {
  return (
    <Container className="flex flex-wrap">
      <div className="w-full flex flex-col items-center justify-center py-10">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-6">
          Schedule a Tour Date
        </h1>
        <p className="text-lg text-gray-600 text-center mb-8">
          Use the widget below to select a date and time for your tour. We look
          forward to seeing you!
        </p>
      </div>
    </Container>
  );
};

export default AvailabilityPage;
