import { Container } from "@/components/Container";
import Link from "next/link";
export default function Home() {
  return (
    <Container className="flex flex-wrap">
      <div className="flex items-center w-full lg:w-1/2">
        <div className="max-w-2xl ml-8 mb-8">
          <h1 className="text-4xl font-bold leading-snug tracking-tight text-gray-800 lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight dark:text-white">
            Brick and Beam Lofts
          </h1>
          <p className="py-5 text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300">
            Brick and Beam Lofts in Columbus Park offer a unique blend of
            historic charm and modern living. With exposed brick walls and
            wooden beams, these lofts provide a warm and inviting atmosphere.
            Located in the heart of the city, they are perfect for those who
            value both style and convenience.
          </p>

          <div className="flex flex-col items-start space-y-3 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row">
            <Link
              href="/schedule"
              target="_blank"
              rel="noopener"
              className="px-8 py-4 text-lg font-medium text-center text-white bg-indigo-600 rounded-md "
            >
              Schedule a tour
            </Link>
          </div>
        </div>
      </div>
    </Container>
  );
}
