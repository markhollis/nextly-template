/*
  Warnings:

  - Added the required column `bathrooms` to the `Unit` table without a default value. This is not possible if the table is not empty.
  - Added the required column `bedrooms` to the `Unit` table without a default value. This is not possible if the table is not empty.
  - Added the required column `rent` to the `Unit` table without a default value. This is not possible if the table is not empty.
  - Added the required column `sqft` to the `Unit` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Unit" ADD COLUMN     "amenities" TEXT[],
ADD COLUMN     "bathrooms" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "bedrooms" INTEGER NOT NULL,
ADD COLUMN     "leaseTerms" INTEGER[],
ADD COLUMN     "rent" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "sqft" INTEGER NOT NULL;
