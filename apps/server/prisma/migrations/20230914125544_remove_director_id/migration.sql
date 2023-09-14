/*
  Warnings:

  - You are about to drop the column `directorId` on the `Film` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Film" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "releaseDate" DATETIME NOT NULL,
    "cover" TEXT
);
INSERT INTO "new_Film" ("cover", "description", "id", "releaseDate", "title") SELECT "cover", "description", "id", "releaseDate", "title" FROM "Film";
DROP TABLE "Film";
ALTER TABLE "new_Film" RENAME TO "Film";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
