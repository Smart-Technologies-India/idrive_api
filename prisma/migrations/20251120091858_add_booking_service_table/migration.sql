/*
  Warnings:

  - You are about to drop the column `selectedServices` on the `booking` table. All the data in the column will be lost.
  - You are about to drop the column `services` on the `booking` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `booking` DROP COLUMN `selectedServices`,
    DROP COLUMN `services`;

-- CreateTable
CREATE TABLE `bookingService` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `bookingId` INTEGER NOT NULL,
    `serviceId` INTEGER NOT NULL,
    `serviceName` VARCHAR(191) NOT NULL,
    `serviceType` VARCHAR(191) NOT NULL,
    `price` DOUBLE NOT NULL,
    `description` LONGTEXT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `deletedAt` DATETIME(3) NULL,

    INDEX `bookingService_bookingId_idx`(`bookingId`),
    INDEX `bookingService_serviceId_idx`(`serviceId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `bookingService` ADD CONSTRAINT `bookingService_bookingId_fkey` FOREIGN KEY (`bookingId`) REFERENCES `booking`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `bookingService` ADD CONSTRAINT `bookingService_serviceId_fkey` FOREIGN KEY (`serviceId`) REFERENCES `service`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
