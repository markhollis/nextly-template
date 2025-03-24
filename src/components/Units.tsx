"use client";
import { useEffect } from "react";
import { useState } from "react";
import Image from "next/image";
import { Unit } from "@/types";

interface LoftsProps {
  units: Unit[];
}

export function Units({ units }: LoftsProps) {
  const [filteredLofts, setFilteredLofts] = useState<Unit[]>(units);
  const [bedroomsFilter, setBedroomsFilter] = useState<number | null>(null);
  const [availabilityFilter, setAvailabilityFilter] = useState<string>("");
  useEffect(() => {
    let filtered = units;

    if (bedroomsFilter) {
      filtered = filtered.filter((unit) => unit.bedrooms === bedroomsFilter);
    }

    if (availabilityFilter) {
      filtered = filtered.filter(
        (unit) =>
          new Date(unit.nextAvailableDate) >= new Date(availabilityFilter)
      );
    }

    setFilteredLofts(filtered);
  }, [bedroomsFilter, availabilityFilter, units]);

  return (
    <>
      <div className="flex gap-4 mb-6">
        <select
          className="border p-2"
          value={bedroomsFilter || ""}
          onChange={(e) =>
            setBedroomsFilter(e.target.value ? parseInt(e.target.value) : null)
          }
        >
          <option value="">All Bedrooms</option>
          <option value="1">1 Bedroom</option>
          <option value="2">2 Bedrooms</option>
        </select>

        <input
          type="date"
          className="border p-2"
          value={availabilityFilter}
          onChange={(e) => setAvailabilityFilter(e.target.value)}
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredLofts.map((unit) => (
          <div
            key={unit.id}
            className="border rounded-lg overflow-hidden shadow-md"
          >
            <Image
              src={`/img/unit-${unit.number}.png`}
              alt="Unit"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-lg font-bold mb-2">{unit.description}</h2>
              <p className="text-sm text-gray-600">Bedrooms: {unit.bedrooms}</p>
              <p className="text-sm text-gray-600">
                Price: ${unit.rent.toLocaleString()}
              </p>
              <p className="text-sm text-gray-600">
                Square Footage: {unit.sqft} sqft
              </p>
              <p className="text-sm text-gray-600">
                Next Available:{" "}
                {new Date(unit.nextAvailableDate).toDateString()}
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
