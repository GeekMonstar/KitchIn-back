/*
  Warnings:

  - You are about to drop the column `duration` on the `Recipe` table. All the data in the column will be lost.
  - Added the required column `cookingDuration` to the `Recipe` table without a default value. This is not possible if the table is not empty.
  - Added the required column `preparationDuration` to the `Recipe` table without a default value. This is not possible if the table is not empty.
  - Made the column `authorId` on table `Recipe` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "Recipe" DROP CONSTRAINT "Recipe_authorId_fkey";

-- AlterTable
ALTER TABLE "Recipe" DROP COLUMN "duration",
ADD COLUMN     "cookingDuration" INTEGER NOT NULL,
ADD COLUMN     "preparationDuration" INTEGER NOT NULL,
ALTER COLUMN "authorId" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "Recipe" ADD CONSTRAINT "Recipe_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
