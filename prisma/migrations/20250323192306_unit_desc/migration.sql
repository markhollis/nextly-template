/*
  Warnings:

  - Added the required column `description` to the `Unit` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Unit" ADD COLUMN     "description" TEXT NOT NULL;
