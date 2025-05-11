-- AlterEnum
-- This migration adds more than one value to an enum.
-- With PostgreSQL versions 11 and earlier, this is not possible
-- in a single migration. This can be worked around by creating
-- multiple migrations, each migration adding only one value to
-- the enum.


ALTER TYPE "Unit" ADD VALUE 'stalk';
ALTER TYPE "Unit" ADD VALUE 'clove';
ALTER TYPE "Unit" ADD VALUE 'head';
ALTER TYPE "Unit" ADD VALUE 'bulb';
ALTER TYPE "Unit" ADD VALUE 'root';
ALTER TYPE "Unit" ADD VALUE 'pod';
ALTER TYPE "Unit" ADD VALUE 'stick';

-- AlterTable
ALTER TABLE "Ingredient" ALTER COLUMN "quantity" DROP NOT NULL,
ALTER COLUMN "unit" DROP NOT NULL;
