-- CreateTable
CREATE TABLE "Portfolio" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "tech" TEXT[],
    "link" TEXT,

    CONSTRAINT "Portfolio_pkey" PRIMARY KEY ("id")
);
