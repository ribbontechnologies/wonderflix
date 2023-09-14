-- CreateTable
CREATE TABLE "Film" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "releaseDate" DATETIME NOT NULL,
    "directorId" INTEGER NOT NULL,
    "cover" TEXT,
    CONSTRAINT "Film_directorId_fkey" FOREIGN KEY ("directorId") REFERENCES "Director" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Actor" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "image" TEXT
);

-- CreateTable
CREATE TABLE "Director" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "image" TEXT
);

-- CreateTable
CREATE TABLE "_ActorToFilm" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,
    CONSTRAINT "_ActorToFilm_A_fkey" FOREIGN KEY ("A") REFERENCES "Actor" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_ActorToFilm_B_fkey" FOREIGN KEY ("B") REFERENCES "Film" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "_ActorToFilm_AB_unique" ON "_ActorToFilm"("A", "B");

-- CreateIndex
CREATE INDEX "_ActorToFilm_B_index" ON "_ActorToFilm"("B");
