/*
  Warnings:

  - You are about to drop the `Director` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Director";
PRAGMA foreign_keys=on;

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Film" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "releaseDate" DATETIME NOT NULL,
    "directorId" INTEGER NOT NULL,
    "cover" TEXT
);
INSERT INTO "new_Film" ("cover", "description", "directorId", "id", "releaseDate", "title") SELECT "cover", "description", "directorId", "id", "releaseDate", "title" FROM "Film";
DROP TABLE "Film";
ALTER TABLE "new_Film" RENAME TO "Film";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
