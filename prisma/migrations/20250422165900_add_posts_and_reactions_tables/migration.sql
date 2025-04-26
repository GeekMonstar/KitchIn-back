/*
  Warnings:

  - You are about to drop the column `image` on the `Aliment` table. All the data in the column will be lost.
  - You are about to drop the column `image` on the `Ustensil` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[image_id]` on the table `Aliment` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[image_id]` on the table `Ustensil` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `image_id` to the `Aliment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `image_id` to the `Ustensil` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "ReactionType" AS ENUM ('like', 'love', 'haha', 'wow', 'sad', 'angry');

-- AlterTable
ALTER TABLE "Aliment" DROP COLUMN "image",
ADD COLUMN     "image_id" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Media" ADD COLUMN     "aliment_id" TEXT,
ADD COLUMN     "post_id" TEXT,
ADD COLUMN     "ustensil_id" TEXT;

-- AlterTable
ALTER TABLE "Recipe" ADD COLUMN     "authorId" TEXT;

-- AlterTable
ALTER TABLE "Ustensil" DROP COLUMN "image",
ADD COLUMN     "image_id" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "Post" (
    "id" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "published" BOOLEAN NOT NULL DEFAULT false,
    "recipeId" TEXT,
    "authorId" TEXT,
    "repost_of_id" TEXT,
    "response_of_id" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Post_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Reaction" (
    "id" TEXT NOT NULL,
    "type" "ReactionType" NOT NULL,
    "postId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Reaction_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Aliment_image_id_key" ON "Aliment"("image_id");

-- CreateIndex
CREATE UNIQUE INDEX "Ustensil_image_id_key" ON "Ustensil"("image_id");

-- AddForeignKey
ALTER TABLE "Recipe" ADD CONSTRAINT "Recipe_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Aliment" ADD CONSTRAINT "Aliment_image_id_fkey" FOREIGN KEY ("image_id") REFERENCES "Media"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Ustensil" ADD CONSTRAINT "Ustensil_image_id_fkey" FOREIGN KEY ("image_id") REFERENCES "Media"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Post" ADD CONSTRAINT "Post_recipeId_fkey" FOREIGN KEY ("recipeId") REFERENCES "Recipe"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Post" ADD CONSTRAINT "Post_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Post" ADD CONSTRAINT "Post_repost_of_id_fkey" FOREIGN KEY ("repost_of_id") REFERENCES "Post"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Post" ADD CONSTRAINT "Post_response_of_id_fkey" FOREIGN KEY ("response_of_id") REFERENCES "Post"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Reaction" ADD CONSTRAINT "Reaction_postId_fkey" FOREIGN KEY ("postId") REFERENCES "Post"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Reaction" ADD CONSTRAINT "Reaction_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Media" ADD CONSTRAINT "Media_post_id_fkey" FOREIGN KEY ("post_id") REFERENCES "Post"("id") ON DELETE SET NULL ON UPDATE CASCADE;
