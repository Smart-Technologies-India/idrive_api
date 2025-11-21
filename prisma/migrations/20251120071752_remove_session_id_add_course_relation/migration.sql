-- CreateTable
CREATE TABLE `car` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `schoolId` INTEGER NOT NULL,
    `carId` VARCHAR(191) NOT NULL,
    `carName` VARCHAR(191) NOT NULL,
    `model` VARCHAR(191) NOT NULL,
    `registrationNumber` VARCHAR(191) NOT NULL,
    `year` INTEGER NOT NULL,
    `color` VARCHAR(191) NOT NULL,
    `fuelType` ENUM('PETROL', 'DIESEL', 'ELECTRIC', 'HYBRID', 'CNG') NOT NULL,
    `transmission` ENUM('MANUAL', 'AUTOMATIC', 'AMT', 'CVT') NOT NULL,
    `seatingCapacity` INTEGER NOT NULL DEFAULT 5,
    `engineNumber` VARCHAR(191) NULL,
    `chassisNumber` VARCHAR(191) NULL,
    `purchaseDate` DATETIME(3) NULL,
    `purchaseCost` DOUBLE NULL,
    `currentMileage` INTEGER NOT NULL DEFAULT 0,
    `insuranceNumber` VARCHAR(191) NULL,
    `insuranceExpiry` DATETIME(3) NULL,
    `pucExpiry` DATETIME(3) NULL,
    `fitnessExpiry` DATETIME(3) NULL,
    `lastServiceDate` DATETIME(3) NULL,
    `nextServiceDate` DATETIME(3) NULL,
    `assignedDriverId` INTEGER NULL,
    `totalBookings` INTEGER NOT NULL DEFAULT 0,
    `status` ENUM('AVAILABLE', 'IN_USE', 'MAINTENANCE', 'INACTIVE') NOT NULL DEFAULT 'AVAILABLE',
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `deletedAt` DATETIME(3) NULL,

    UNIQUE INDEX `car_carId_key`(`carId`),
    UNIQUE INDEX `car_registrationNumber_key`(`registrationNumber`),
    UNIQUE INDEX `car_engineNumber_key`(`engineNumber`),
    UNIQUE INDEX `car_chassisNumber_key`(`chassisNumber`),
    INDEX `car_schoolId_idx`(`schoolId`),
    INDEX `car_status_idx`(`status`),
    INDEX `car_assignedDriverId_idx`(`assignedDriverId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `course` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `schoolId` INTEGER NOT NULL,
    `courseId` VARCHAR(191) NOT NULL,
    `courseName` VARCHAR(191) NOT NULL,
    `courseType` ENUM('BEGINNER', 'INTERMEDIATE', 'ADVANCED', 'REFRESHER') NOT NULL,
    `minsPerDay` INTEGER NOT NULL,
    `courseDays` INTEGER NOT NULL,
    `price` DOUBLE NOT NULL,
    `enrolledStudents` INTEGER NOT NULL DEFAULT 0,
    `description` LONGTEXT NOT NULL,
    `syllabus` LONGTEXT NULL,
    `requirements` LONGTEXT NULL,
    `sessionsCompleted` INTEGER NOT NULL DEFAULT 0,
    `totalRevenue` DOUBLE NOT NULL DEFAULT 0,
    `status` ENUM('ACTIVE', 'INACTIVE', 'UPCOMING', 'ARCHIVED') NOT NULL DEFAULT 'ACTIVE',
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `deletedAt` DATETIME(3) NULL,

    UNIQUE INDEX `course_courseId_key`(`courseId`),
    INDEX `course_schoolId_idx`(`schoolId`),
    INDEX `course_status_idx`(`status`),
    INDEX `course_courseType_idx`(`courseType`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `syllabus` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `courseId` INTEGER NOT NULL,
    `syllabusId` VARCHAR(191) NOT NULL,
    `dayNumber` INTEGER NOT NULL,
    `title` VARCHAR(191) NOT NULL,
    `topics` LONGTEXT NOT NULL,
    `objectives` LONGTEXT NULL,
    `practicalActivities` LONGTEXT NULL,
    `assessmentCriteria` LONGTEXT NULL,
    `notes` LONGTEXT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `deletedAt` DATETIME(3) NULL,

    UNIQUE INDEX `syllabus_syllabusId_key`(`syllabusId`),
    INDEX `syllabus_courseId_idx`(`courseId`),
    INDEX `syllabus_dayNumber_idx`(`dayNumber`),
    UNIQUE INDEX `syllabus_courseId_dayNumber_key`(`courseId`, `dayNumber`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `service` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `schoolId` INTEGER NOT NULL,
    `serviceId` VARCHAR(191) NOT NULL,
    `serviceName` VARCHAR(191) NOT NULL,
    `serviceType` ENUM('LICENSE', 'ADDON') NOT NULL,
    `category` VARCHAR(191) NOT NULL,
    `price` DOUBLE NOT NULL,
    `duration` INTEGER NOT NULL,
    `description` LONGTEXT NOT NULL,
    `features` LONGTEXT NULL,
    `includedServices` LONGTEXT NULL,
    `requirements` LONGTEXT NULL,
    `termsAndConditions` LONGTEXT NULL,
    `activeUsers` INTEGER NOT NULL DEFAULT 0,
    `totalRevenue` DOUBLE NOT NULL DEFAULT 0,
    `status` ENUM('ACTIVE', 'INACTIVE', 'UPCOMING', 'DISCONTINUED') NOT NULL DEFAULT 'ACTIVE',
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `deletedAt` DATETIME(3) NULL,

    UNIQUE INDEX `service_serviceId_key`(`serviceId`),
    INDEX `service_schoolId_idx`(`schoolId`),
    INDEX `service_status_idx`(`status`),
    INDEX `service_serviceType_idx`(`serviceType`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `holiday` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `schoolId` INTEGER NOT NULL,
    `declarationType` ENUM('ALL_CARS_MULTIPLE_DATES', 'ONE_CAR_MULTIPLE_DATES', 'ALL_CARS_PARTICULAR_SLOTS', 'ONE_CAR_PARTICULAR_SLOTS') NOT NULL,
    `carId` INTEGER NULL,
    `startDate` DATETIME(3) NOT NULL,
    `endDate` DATETIME(3) NOT NULL,
    `slots` LONGTEXT NULL,
    `reason` TEXT NOT NULL,
    `status` ENUM('ACTIVE', 'EXPIRED', 'UPCOMING', 'CANCELLED') NOT NULL DEFAULT 'ACTIVE',
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `deletedAt` DATETIME(3) NULL,

    INDEX `holiday_schoolId_idx`(`schoolId`),
    INDEX `holiday_carId_idx`(`carId`),
    INDEX `holiday_status_idx`(`status`),
    INDEX `holiday_startDate_idx`(`startDate`),
    INDEX `holiday_endDate_idx`(`endDate`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `booking` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `schoolId` INTEGER NOT NULL,
    `bookingId` VARCHAR(191) NOT NULL,
    `carId` INTEGER NOT NULL,
    `carName` VARCHAR(191) NOT NULL,
    `slot` VARCHAR(191) NOT NULL,
    `bookingDate` DATETIME(3) NOT NULL,
    `customerMobile` VARCHAR(191) NOT NULL,
    `customerName` VARCHAR(191) NULL,
    `customerEmail` VARCHAR(191) NULL,
    `customerId` INTEGER NULL,
    `courseId` INTEGER NOT NULL,
    `courseName` VARCHAR(191) NOT NULL,
    `coursePrice` DOUBLE NOT NULL,
    `services` LONGTEXT NULL,
    `selectedServices` LONGTEXT NULL,
    `totalAmount` DOUBLE NOT NULL,
    `notes` LONGTEXT NULL,
    `status` ENUM('PENDING', 'CONFIRMED', 'COMPLETED', 'CANCELLED', 'NO_SHOW') NOT NULL DEFAULT 'PENDING',
    `confirmationNumber` VARCHAR(191) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `deletedAt` DATETIME(3) NULL,

    UNIQUE INDEX `booking_bookingId_key`(`bookingId`),
    INDEX `booking_schoolId_idx`(`schoolId`),
    INDEX `booking_customerId_idx`(`customerId`),
    INDEX `booking_bookingDate_idx`(`bookingDate`),
    INDEX `booking_status_idx`(`status`),
    INDEX `booking_carId_idx`(`carId`),
    INDEX `booking_courseId_idx`(`courseId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `bookingSession` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `bookingId` INTEGER NOT NULL,
    `dayNumber` INTEGER NOT NULL,
    `sessionDate` DATETIME(3) NOT NULL,
    `slot` VARCHAR(191) NOT NULL,
    `carId` INTEGER NOT NULL,
    `carName` VARCHAR(191) NOT NULL,
    `driverId` INTEGER NULL,
    `driverName` VARCHAR(191) NULL,
    `status` ENUM('PENDING', 'CONFIRMED', 'COMPLETED', 'CANCELLED', 'NO_SHOW') NOT NULL DEFAULT 'PENDING',
    `attended` BOOLEAN NOT NULL DEFAULT false,
    `completedAt` DATETIME(3) NULL,
    `instructorNotes` LONGTEXT NULL,
    `customerFeedback` LONGTEXT NULL,
    `internalNotes` LONGTEXT NULL,
    `performanceRating` INTEGER NULL,
    `skillsAssessed` LONGTEXT NULL,
    `progressNotes` LONGTEXT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `deletedAt` DATETIME(3) NULL,

    INDEX `bookingSession_bookingId_idx`(`bookingId`),
    INDEX `bookingSession_sessionDate_idx`(`sessionDate`),
    INDEX `bookingSession_status_idx`(`status`),
    INDEX `bookingSession_carId_idx`(`carId`),
    INDEX `bookingSession_driverId_idx`(`driverId`),
    INDEX `bookingSession_dayNumber_idx`(`dayNumber`),
    UNIQUE INDEX `bookingSession_bookingId_dayNumber_key`(`bookingId`, `dayNumber`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `car` ADD CONSTRAINT `car_schoolId_fkey` FOREIGN KEY (`schoolId`) REFERENCES `school`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `course` ADD CONSTRAINT `course_schoolId_fkey` FOREIGN KEY (`schoolId`) REFERENCES `school`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `syllabus` ADD CONSTRAINT `syllabus_courseId_fkey` FOREIGN KEY (`courseId`) REFERENCES `course`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `service` ADD CONSTRAINT `service_schoolId_fkey` FOREIGN KEY (`schoolId`) REFERENCES `school`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `holiday` ADD CONSTRAINT `holiday_schoolId_fkey` FOREIGN KEY (`schoolId`) REFERENCES `school`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `holiday` ADD CONSTRAINT `holiday_carId_fkey` FOREIGN KEY (`carId`) REFERENCES `car`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `booking` ADD CONSTRAINT `booking_schoolId_fkey` FOREIGN KEY (`schoolId`) REFERENCES `school`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `booking` ADD CONSTRAINT `booking_customerId_fkey` FOREIGN KEY (`customerId`) REFERENCES `user`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `booking` ADD CONSTRAINT `booking_carId_fkey` FOREIGN KEY (`carId`) REFERENCES `car`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `booking` ADD CONSTRAINT `booking_courseId_fkey` FOREIGN KEY (`courseId`) REFERENCES `course`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `bookingSession` ADD CONSTRAINT `bookingSession_bookingId_fkey` FOREIGN KEY (`bookingId`) REFERENCES `booking`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `bookingSession` ADD CONSTRAINT `bookingSession_carId_fkey` FOREIGN KEY (`carId`) REFERENCES `car`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
