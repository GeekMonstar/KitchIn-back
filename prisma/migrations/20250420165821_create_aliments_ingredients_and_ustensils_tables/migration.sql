/*
  Warnings:

  - You are about to drop the column `rank` on the `Step` table. All the data in the column will be lost.
  - Added the required column `updated_at` to the `Media` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `Recipe` table without a default value. This is not possible if the table is not empty.
  - Added the required column `order` to the `Step` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `Step` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Unit" AS ENUM ('g', 'kg', 'l', 'cl', 'ml', 'tsp', 'tbsp', 'cup', 'pinch', 'slice', 'piece', 'bunch', 'sprig', 'leaf');

-- AlterTable
ALTER TABLE "Media" ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "Recipe" ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "Step" DROP COLUMN "rank",
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "order" INTEGER NOT NULL,
ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL;

-- CreateTable
CREATE TABLE "Aliment" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Aliment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Ingredient" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "quantity" DOUBLE PRECISION NOT NULL,
    "unit" "Unit" NOT NULL,
    "aliment_id" TEXT NOT NULL,
    "recipe_id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Ingredient_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Ustensil" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Ustensil_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_RecipeToUstensil" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,

    CONSTRAINT "_RecipeToUstensil_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateTable
CREATE TABLE "_StepToUstensil" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,

    CONSTRAINT "_StepToUstensil_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateTable
CREATE TABLE "_AlimentToStep" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,

    CONSTRAINT "_AlimentToStep_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE INDEX "_RecipeToUstensil_B_index" ON "_RecipeToUstensil"("B");

-- CreateIndex
CREATE INDEX "_StepToUstensil_B_index" ON "_StepToUstensil"("B");

-- CreateIndex
CREATE INDEX "_AlimentToStep_B_index" ON "_AlimentToStep"("B");

-- AddForeignKey
ALTER TABLE "Ingredient" ADD CONSTRAINT "Ingredient_aliment_id_fkey" FOREIGN KEY ("aliment_id") REFERENCES "Aliment"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Ingredient" ADD CONSTRAINT "Ingredient_recipe_id_fkey" FOREIGN KEY ("recipe_id") REFERENCES "Recipe"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_RecipeToUstensil" ADD CONSTRAINT "_RecipeToUstensil_A_fkey" FOREIGN KEY ("A") REFERENCES "Recipe"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_RecipeToUstensil" ADD CONSTRAINT "_RecipeToUstensil_B_fkey" FOREIGN KEY ("B") REFERENCES "Ustensil"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_StepToUstensil" ADD CONSTRAINT "_StepToUstensil_A_fkey" FOREIGN KEY ("A") REFERENCES "Step"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_StepToUstensil" ADD CONSTRAINT "_StepToUstensil_B_fkey" FOREIGN KEY ("B") REFERENCES "Ustensil"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AlimentToStep" ADD CONSTRAINT "_AlimentToStep_A_fkey" FOREIGN KEY ("A") REFERENCES "Aliment"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AlimentToStep" ADD CONSTRAINT "_AlimentToStep_B_fkey" FOREIGN KEY ("B") REFERENCES "Step"("id") ON DELETE CASCADE ON UPDATE CASCADE;
