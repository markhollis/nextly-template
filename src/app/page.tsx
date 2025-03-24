import { Container } from "@/components/Container";
import Link from "next/link";
export default function Home() {
  return (
    <div className="relative w-full h-screen">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        muted
        loop
        autoPlay
        playsInline
      >
        <source src="/img/video.mp4" type="video/mp4" />
        <track
          src="/path/to/captions.vtt"
          kind="subtitles"
          srcLang="en"
          label="English"
        />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>

      <Container className="relative justify-center items-center z-20 flex flex-wrap h-3/4">
        <div className="flex items-center items-center text-center w-full lg:w-1/2">
          <div className="">
            <p className="py-5 text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300">
              Nestled in the heart of Columbus Park, Brick & Beam Lofts is where
              industrial heritage meets modern living. Our brand is rooted in
              timeless craftsmanship—drawing inspiration from the raw beauty of
              exposed brick, steel beams, and the rich character of historic
              urban architecture.
            </p>
            <p className="py-5 text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300"></p>

            <div className="flex flex-col justify-center space-y-3 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row">
              <Link
                href="/"
                target="_blank"
                rel="noopener"
                className="px-8 py-4 text-lg font-medium text-center text-white bg-primary rounded-md "
              >
                SCHEDULE A TOUR
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
