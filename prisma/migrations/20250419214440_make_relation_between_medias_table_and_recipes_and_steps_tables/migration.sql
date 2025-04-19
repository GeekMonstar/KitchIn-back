/*
  Warnings:

  - You are about to drop the column `medias` on the `Recipe` table. All the data in the column will be lost.
  - You are about to drop the `_MediaToStep` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_MediaToStep" DROP CONSTRAINT "_MediaToStep_A_fkey";

-- DropForeignKey
ALTER TABLE "_MediaToStep" DROP CONSTRAINT "_MediaToStep_B_fkey";

-- AlterTable
ALTER TABLE "Media" ADD COLUMN     "recipe_id" TEXT,
ADD COLUMN     "step_id" TEXT;

-- AlterTable
ALTER TABLE "Recipe" DROP COLUMN "medias";

-- DropTable
DROP TABLE "_MediaToStep";

-- AddForeignKey
ALTER TABLE "Media" ADD CONSTRAINT "Media_recipe_id_fkey" FOREIGN KEY ("recipe_id") REFERENCES "Recipe"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Media" ADD CONSTRAINT "Media_step_id_fkey" FOREIGN KEY ("step_id") REFERENCES "Step"("id") ON DELETE SET NULL ON UPDATE CASCADE;
