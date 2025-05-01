/*
  Warnings:

  - Added the required column `difficulty` to the `Recipe` table without a default value. This is not possible if the table is not empty.
  - Added the required column `duration` to the `Recipe` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Recipe" ADD COLUMN     "difficulty" INTEGER NOT NULL,
ADD COLUMN     "duration" INTEGER NOT NULL;
