import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma"; // Import the Prisma client

export async function GET() {
  try {
    const units = await prisma.unit.findMany({
      include: {
        bookings: true, // Include bookings in the response
      },
    });

    const unitsWithAvailability = units.map((unit) => {
      const nextAvailable = getNextAvailableTime(unit.bookings);
      return {
        ...unit,
        nextAvailable,
      };
    });

    return NextResponse.json(unitsWithAvailability, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch units" },
      { status: 500 }
    );
  }
}

function getNextAvailableTime(
  bookings: { bookedFrom: Date; bookedUntil: Date }[]
) {
  const now = new Date();
  const futureBookings = bookings.filter(
    (booking) => booking.bookedUntil > now
  );

  if (futureBookings.length === 0) {
    return now; // If no future bookings, the unit is available now
  }

  futureBookings.sort(
    (a, b) => a.bookedFrom.getTime() - b.bookedFrom.getTime()
  );

  const nextAvailable = futureBookings.reduce(
    (availability, booking, index, arr) => {
      if (index === 0 && now < booking.bookedFrom) {
        return now; // Available now if current time is before the first booking
      }

      if (index > 0 && arr[index - 1].bookedUntil < booking.bookedFrom) {
        return arr[index - 1].bookedUntil; // Available between bookings
      }

      return booking.bookedUntil; // Default to the bookedUntil of the last booking
    },
    now
  );

  return nextAvailable;
}
