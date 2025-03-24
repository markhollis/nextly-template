import React from "react";

const LocationPage = () => {
  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">
        Welcome to Columbus Park
      </h1>
      <p className="text-gray-600 leading-relaxed mb-4">
        Columbus Park is a vibrant neighborhood located next to the River Market
        and the KC Current Stadium. Known for its rich history and cultural
        charm, this area offers a unique blend of urban living and community
        spirit.
      </p>
      <p className="text-gray-600 leading-relaxed">
        Across the street, you&apos;ll find the famous Italian restaurant,{" "}
        <strong className="text-gray-800 font-semibold">Garozzo&apos;s</strong>,
        a local favorite known for its authentic cuisine and warm atmosphere.
        Whether you&apos;re a foodie, a sports fan, or just looking to explore
        Kansas City&apos;s hidden gems, Columbus Park has something for
        everyone.
      </p>
    </div>
  );
};

export default LocationPage;
