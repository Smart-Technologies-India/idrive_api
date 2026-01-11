
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export enum BookingServiceType {
    ADDON = "ADDON",
    LICENSE = "LICENSE"
}

export enum BookingSessionStatus {
    CANCELLED = "CANCELLED",
    COMPLETED = "COMPLETED",
    CONFIRMED = "CONFIRMED",
    EDITED = "EDITED",
    HOLD = "HOLD",
    NO_SHOW = "NO_SHOW",
    PENDING = "PENDING"
}

export enum BookingStatus {
    CANCELLED = "CANCELLED",
    COMPLETED = "COMPLETED",
    CONFIRMED = "CONFIRMED",
    NO_SHOW = "NO_SHOW",
    PENDING = "PENDING"
}

export enum CarAdminStatus {
    ACTIVE = "ACTIVE",
    INACTIVE = "INACTIVE"
}

export enum CarCategory {
    HATCHBACK = "HATCHBACK",
    MUV = "MUV",
    SEDAN = "SEDAN",
    SUV = "SUV"
}

export enum CarStatus {
    AVAILABLE = "AVAILABLE",
    INACTIVE = "INACTIVE",
    IN_USE = "IN_USE",
    MAINTENANCE = "MAINTENANCE"
}

export enum CourseStatus {
    ACTIVE = "ACTIVE",
    ARCHIVED = "ARCHIVED",
    INACTIVE = "INACTIVE",
    UPCOMING = "UPCOMING"
}

export enum CourseType {
    ADVANCED = "ADVANCED",
    BEGINNER = "BEGINNER",
    INTERMEDIATE = "INTERMEDIATE",
    REFRESHER = "REFRESHER"
}

export enum DriverStatus {
    ACTIVE = "ACTIVE",
    INACTIVE = "INACTIVE",
    ON_LEAVE = "ON_LEAVE",
    SUSPENDED = "SUSPENDED"
}

export enum FuelType {
    CNG = "CNG",
    DIESEL = "DIESEL",
    ELECTRIC = "ELECTRIC",
    HYBRID = "HYBRID",
    PETROL = "PETROL"
}

export enum HolidayDeclarationType {
    ALL_CARS_MULTIPLE_DATES = "ALL_CARS_MULTIPLE_DATES",
    ALL_CARS_PARTICULAR_SLOTS = "ALL_CARS_PARTICULAR_SLOTS",
    ONE_CAR_MULTIPLE_DATES = "ONE_CAR_MULTIPLE_DATES",
    ONE_CAR_PARTICULAR_SLOTS = "ONE_CAR_PARTICULAR_SLOTS"
}

export enum HolidayStatus {
    ACTIVE = "ACTIVE",
    CANCELLED = "CANCELLED",
    EXPIRED = "EXPIRED",
    UPCOMING = "UPCOMING"
}

export enum LeaveStatus {
    APPROVED = "APPROVED",
    CANCELLED = "CANCELLED",
    PENDING = "PENDING",
    REJECTED = "REJECTED"
}

export enum LicenseApplicationStatus {
    CLOSED = "CLOSED",
    DL_APPLIED = "DL_APPLIED",
    DL_PENDING = "DL_PENDING",
    LL_APPLIED = "LL_APPLIED",
    PENDING = "PENDING"
}

export enum Role {
    ADMIN = "ADMIN",
    DRIVER = "DRIVER",
    MT_ACCOUNTS = "MT_ACCOUNTS",
    MT_ADMIN = "MT_ADMIN",
    MT_MANAGER = "MT_MANAGER",
    SYSTEM = "SYSTEM",
    USER = "USER"
}

export enum SalaryStatus {
    PAID = "PAID",
    PENDING = "PENDING",
    PROCESSING = "PROCESSING"
}

export enum SchoolStatus {
    ACTIVE = "ACTIVE",
    INACTIVE = "INACTIVE",
    SUSPENDED = "SUSPENDED"
}

export enum ServiceCategory {
    IDP = "IDP",
    I_HOLD_LICENSE = "I_HOLD_LICENSE",
    NEW_LICENSE = "NEW_LICENSE",
    TRANSPORT = "TRANSPORT"
}

export enum ServiceStatus {
    ACTIVE = "ACTIVE",
    DISCONTINUED = "DISCONTINUED",
    INACTIVE = "INACTIVE",
    UPCOMING = "UPCOMING"
}

export enum Status {
    ACTIVE = "ACTIVE",
    INACTIVE = "INACTIVE"
}

export enum TestStatus {
    ABSENT = "ABSENT",
    FAILED = "FAILED",
    NONE = "NONE",
    PASSED = "PASSED"
}

export enum TransmissionType {
    AMT = "AMT",
    AUTOMATIC = "AUTOMATIC",
    CVT = "CVT",
    MANUAL = "MANUAL"
}

export interface CreateBookingInput {
    bookingDate: DateTime;
    bookingId: string;
    carId: number;
    carName: string;
    confirmationNumber?: Nullable<string>;
    courseId: number;
    courseName: string;
    coursePrice: number;
    customerEmail?: Nullable<string>;
    customerId?: Nullable<number>;
    customerMobile: string;
    customerName?: Nullable<string>;
    discount?: Nullable<number>;
    notes?: Nullable<string>;
    schoolId: number;
    slot: string;
    totalAmount: number;
}

export interface CreateBookingServiceInput {
    bookingId?: Nullable<number>;
    confirmationNumber?: Nullable<string>;
    description?: Nullable<string>;
    discount?: Nullable<number>;
    price: number;
    schoolId: number;
    schoolServiceId: number;
    serviceName: string;
    serviceType: string;
    userId: number;
}

export interface CreateBookingSessionInput {
    attended?: Nullable<boolean>;
    bookingId: number;
    carId: number;
    completedAt?: Nullable<DateTime>;
    customerFeedback?: Nullable<string>;
    dayNumber: number;
    driverId: number;
    instructorNotes?: Nullable<string>;
    internalNotes?: Nullable<string>;
    performanceRating?: Nullable<number>;
    progressNotes?: Nullable<string>;
    sessionDate: DateTime;
    skillsAssessed?: Nullable<string>;
    slot: string;
    status?: Nullable<BookingSessionStatus>;
}

export interface CreateCarAdminInput {
    category: CarCategory;
    manufacturer: string;
    name: string;
    status?: Nullable<CarAdminStatus>;
}

export interface CreateCarCourseInput {
    carId: number;
    courseId: number;
}

export interface CreateCarInput {
    assignedDriverId?: Nullable<number>;
    carAdminId: number;
    carId: string;
    carName: string;
    chassisNumber?: Nullable<string>;
    color: string;
    courseIds?: Nullable<number[]>;
    currentMileage?: Nullable<number>;
    engineNumber?: Nullable<string>;
    fitnessExpiry?: Nullable<DateTime>;
    fuelType: FuelType;
    insuranceExpiry?: Nullable<DateTime>;
    insuranceNumber?: Nullable<string>;
    lastServiceDate?: Nullable<DateTime>;
    model: string;
    nextServiceDate?: Nullable<DateTime>;
    pucExpiry?: Nullable<DateTime>;
    purchaseCost?: Nullable<number>;
    purchaseDate?: Nullable<DateTime>;
    registrationNumber: string;
    schoolId: number;
    seatingCapacity?: Nullable<number>;
    status?: Nullable<CarStatus>;
    transmission: TransmissionType;
    year: number;
}

export interface CreateCourseInput {
    automaticPrice?: Nullable<number>;
    carIds?: Nullable<number[]>;
    courseDays: number;
    courseId: string;
    courseName: string;
    courseType: CourseType;
    description: string;
    enrolledStudents?: Nullable<number>;
    minsPerDay: number;
    price: number;
    requirements?: Nullable<string>;
    schoolId: number;
    sessionsCompleted?: Nullable<number>;
    status?: Nullable<CourseStatus>;
    syllabus?: Nullable<string>;
    totalRevenue?: Nullable<number>;
}

export interface CreateDriverInput {
    address: string;
    alternatePhone?: Nullable<string>;
    bloodGroup?: Nullable<string>;
    cancelledBookings?: Nullable<number>;
    completedBookings?: Nullable<number>;
    dateOfBirth: DateTime;
    driverId: string;
    email?: Nullable<string>;
    emergencyContactName?: Nullable<string>;
    emergencyContactNumber?: Nullable<string>;
    emergencyContactRelation?: Nullable<string>;
    experience?: Nullable<number>;
    gender: string;
    joiningDate?: Nullable<DateTime>;
    licenseExpiryDate: DateTime;
    licenseIssueDate: DateTime;
    licenseNumber: string;
    licenseType: string;
    mobile: string;
    name: string;
    rating?: Nullable<number>;
    salary?: Nullable<number>;
    schoolId: number;
    totalBookings?: Nullable<number>;
    userId: number;
}

export interface CreateHolidayInput {
    carId?: Nullable<number>;
    declarationType: string;
    endDate: string;
    reason: string;
    schoolId: number;
    slots?: Nullable<string>;
    startDate: string;
}

export interface CreateLeaveHistoryInput {
    approvedAt?: Nullable<DateTime>;
    approvedBy?: Nullable<number>;
    driverId: number;
    fromDate: DateTime;
    leaveId: string;
    leaveType?: Nullable<string>;
    reason: string;
    rejectionReason?: Nullable<string>;
    toDate: DateTime;
    totalDays: number;
}

export interface CreateLicenseApplicationInput {
    bookingServiceId: number;
    dlApplicationNumber?: Nullable<string>;
    issuedDate?: Nullable<DateTime>;
    llNumber?: Nullable<string>;
    status?: Nullable<LicenseApplicationStatus>;
    testDate?: Nullable<DateTime>;
    testStatus?: Nullable<TestStatus>;
}

export interface CreatePaymentInput {
    amount: number;
    bookingId: number;
    installmentNumber: number;
    notes?: Nullable<string>;
    paymentMethod?: Nullable<string>;
    paymentNumber: string;
    totalInstallments: number;
    transactionId?: Nullable<string>;
    userId: number;
}

export interface CreateSalaryHistoryInput {
    basicSalary: number;
    bonus?: Nullable<number>;
    deductions?: Nullable<number>;
    driverId: number;
    month: string;
    monthNumber: number;
    netSalary: number;
    paidBy?: Nullable<number>;
    paidOn?: Nullable<DateTime>;
    paymentMethod?: Nullable<string>;
    remarks?: Nullable<string>;
    salaryId: string;
    transactionId?: Nullable<string>;
    year: number;
}

export interface CreateSchoolInput {
    accountNumber?: Nullable<string>;
    address: string;
    alternatePhone?: Nullable<string>;
    bankName?: Nullable<string>;
    branchName?: Nullable<string>;
    dayEndTime?: Nullable<string>;
    dayStartTime?: Nullable<string>;
    email?: Nullable<string>;
    establishedYear: string;
    facebook?: Nullable<string>;
    gstNumber?: Nullable<string>;
    ifscCode?: Nullable<string>;
    instagram?: Nullable<string>;
    insuranceExpiry?: Nullable<DateTime>;
    insurancePolicyNumber?: Nullable<string>;
    insuranceProvider?: Nullable<string>;
    logo?: Nullable<string>;
    lunchEndTime?: Nullable<string>;
    lunchStartTime?: Nullable<string>;
    name: string;
    ownerEmail?: Nullable<string>;
    ownerName?: Nullable<string>;
    ownerPhone?: Nullable<string>;
    phone: string;
    registrationNumber: string;
    rtoLicenseExpiry?: Nullable<DateTime>;
    rtoLicenseNumber?: Nullable<string>;
    twitter?: Nullable<string>;
    website?: Nullable<string>;
    weeklyHoliday?: Nullable<string>;
}

export interface CreateSchoolServiceInput {
    addonPrice: number;
    licensePrice: number;
    schoolId: number;
    serviceId: number;
}

export interface CreateServiceInput {
    category: ServiceCategory;
    description: string;
    duration: number;
    features?: Nullable<string>;
    includedServices?: Nullable<string>;
    requirements?: Nullable<string>;
    serviceId: string;
    serviceName: string;
    status?: Nullable<ServiceStatus>;
    termsAndConditions?: Nullable<string>;
}

export interface CreateServicePaymentInput {
    amount: number;
    bookingServiceId: number;
    installmentNumber: number;
    notes?: Nullable<string>;
    paymentMethod?: Nullable<string>;
    paymentNumber: string;
    totalInstallments: number;
    transactionId?: Nullable<string>;
    userId: number;
}

export interface CreateSyllabusInput {
    assessmentCriteria?: Nullable<string>;
    courseId: number;
    dayNumber: number;
    notes?: Nullable<string>;
    objectives?: Nullable<string>;
    practicalActivities?: Nullable<string>;
    syllabusId: string;
    title: string;
    topics: string;
}

export interface CreateUserInput {
    address?: Nullable<string>;
    bloodGroup?: Nullable<string>;
    contact1: string;
    contact2?: Nullable<string>;
    dob?: Nullable<DateTime>;
    email?: Nullable<string>;
    fatherName?: Nullable<string>;
    name: string;
    otp?: Nullable<string>;
    password?: Nullable<string>;
    permanentAddress?: Nullable<string>;
    profile?: Nullable<string>;
    role?: Nullable<Role>;
    schoolId?: Nullable<number>;
    status?: Nullable<Status>;
    surname?: Nullable<string>;
}

export interface LoginUserInput {
    contact: string;
    password: string;
}

export interface OrderBy {
    direction?: Nullable<string>;
    field?: Nullable<string>;
}

export interface SearchCarCourseInput {
    carId?: Nullable<number>;
    courseId?: Nullable<number>;
}

export interface SearchCarInput {
    assignedDriverId?: Nullable<number>;
    fuelType?: Nullable<FuelType>;
    schoolId?: Nullable<number>;
    search?: Nullable<string>;
    status?: Nullable<CarStatus>;
}

export interface SearchCourseInput {
    courseId?: Nullable<string>;
    courseName?: Nullable<string>;
    courseType?: Nullable<CourseType>;
    schoolId?: Nullable<number>;
    status?: Nullable<CourseStatus>;
}

export interface SearchHolidayInput {
    carId?: Nullable<number>;
    declarationType?: Nullable<string>;
    endDate?: Nullable<string>;
    reason?: Nullable<string>;
    schoolId?: Nullable<number>;
    startDate?: Nullable<string>;
    status?: Nullable<string>;
}

export interface SearchPaginationInput {
    filters?: Nullable<string[]>;
    orderBy?: Nullable<OrderBy[]>;
    search?: Nullable<string>;
    skip: number;
    take: number;
}

export interface SearchPaymentInput {
    bookingId?: Nullable<number>;
    paymentMethod?: Nullable<string>;
    paymentNumber?: Nullable<string>;
    status?: Nullable<string>;
    userId?: Nullable<number>;
}

export interface SearchServicePaymentInput {
    bookingServiceId?: Nullable<number>;
    paymentMethod?: Nullable<string>;
    paymentNumber?: Nullable<string>;
    status?: Nullable<string>;
    userId?: Nullable<number>;
}

export interface SearchSyllabusInput {
    courseId?: Nullable<number>;
    dayNumber?: Nullable<number>;
    syllabusId?: Nullable<string>;
    title?: Nullable<string>;
}

export interface SignUpUserInput {
    mobile: string;
    name: string;
    password: string;
}

export interface UpdateBookingInput {
    bookingDate?: Nullable<DateTime>;
    bookingId?: Nullable<string>;
    carId?: Nullable<number>;
    carName?: Nullable<string>;
    confirmationNumber?: Nullable<string>;
    courseId?: Nullable<number>;
    courseName?: Nullable<string>;
    coursePrice?: Nullable<number>;
    customerEmail?: Nullable<string>;
    customerId?: Nullable<number>;
    customerMobile?: Nullable<string>;
    customerName?: Nullable<string>;
    discount?: Nullable<number>;
    notes?: Nullable<string>;
    schoolId?: Nullable<number>;
    slot?: Nullable<string>;
    status?: Nullable<BookingStatus>;
    totalAmount?: Nullable<number>;
}

export interface UpdateBookingServiceInput {
    bookingId?: Nullable<number>;
    confirmationNumber?: Nullable<string>;
    description?: Nullable<string>;
    discount?: Nullable<number>;
    price?: Nullable<number>;
    schoolId?: Nullable<number>;
    schoolServiceId?: Nullable<number>;
    serviceName?: Nullable<string>;
    serviceType?: Nullable<string>;
    userId?: Nullable<number>;
}

export interface UpdateBookingSessionInput {
    attended?: Nullable<boolean>;
    bookingId?: Nullable<number>;
    carId?: Nullable<number>;
    completedAt?: Nullable<DateTime>;
    customerFeedback?: Nullable<string>;
    dayNumber?: Nullable<number>;
    deletedAt?: Nullable<DateTime>;
    driverId?: Nullable<number>;
    instructorNotes?: Nullable<string>;
    internalNotes?: Nullable<string>;
    performanceRating?: Nullable<number>;
    progressNotes?: Nullable<string>;
    sessionDate?: Nullable<DateTime>;
    skillsAssessed?: Nullable<string>;
    slot?: Nullable<string>;
    status?: Nullable<BookingSessionStatus>;
}

export interface UpdateCarAdminInput {
    category?: Nullable<CarCategory>;
    manufacturer?: Nullable<string>;
    name?: Nullable<string>;
    status?: Nullable<CarAdminStatus>;
}

export interface UpdateCarCourseInput {
    carId?: Nullable<number>;
    courseId?: Nullable<number>;
    deletedAt?: Nullable<DateTime>;
}

export interface UpdateCarInput {
    assignedDriverId?: Nullable<number>;
    carAdminId?: Nullable<number>;
    carId?: Nullable<string>;
    carName?: Nullable<string>;
    chassisNumber?: Nullable<string>;
    color?: Nullable<string>;
    courseIds?: Nullable<number[]>;
    currentMileage?: Nullable<number>;
    engineNumber?: Nullable<string>;
    fitnessExpiry?: Nullable<DateTime>;
    fuelType?: Nullable<FuelType>;
    insuranceExpiry?: Nullable<DateTime>;
    insuranceNumber?: Nullable<string>;
    lastServiceDate?: Nullable<DateTime>;
    model?: Nullable<string>;
    nextServiceDate?: Nullable<DateTime>;
    pucExpiry?: Nullable<DateTime>;
    purchaseCost?: Nullable<number>;
    purchaseDate?: Nullable<DateTime>;
    registrationNumber?: Nullable<string>;
    schoolId?: Nullable<number>;
    seatingCapacity?: Nullable<number>;
    status?: Nullable<CarStatus>;
    totalBookings?: Nullable<number>;
    transmission?: Nullable<TransmissionType>;
    year?: Nullable<number>;
}

export interface UpdateCourseInput {
    automaticPrice?: Nullable<number>;
    carIds?: Nullable<number[]>;
    courseDays?: Nullable<number>;
    courseId?: Nullable<string>;
    courseName?: Nullable<string>;
    courseType?: Nullable<CourseType>;
    description?: Nullable<string>;
    enrolledStudents?: Nullable<number>;
    hoursPerDay?: Nullable<number>;
    minsPerDay?: Nullable<number>;
    price?: Nullable<number>;
    requirements?: Nullable<string>;
    schoolId?: Nullable<number>;
    sessionsCompleted?: Nullable<number>;
    status?: Nullable<CourseStatus>;
    syllabus?: Nullable<string>;
    totalRevenue?: Nullable<number>;
}

export interface UpdateDriverInput {
    address?: Nullable<string>;
    alternatePhone?: Nullable<string>;
    bloodGroup?: Nullable<string>;
    cancelledBookings?: Nullable<number>;
    completedBookings?: Nullable<number>;
    dateOfBirth?: Nullable<DateTime>;
    email?: Nullable<string>;
    emergencyContactName?: Nullable<string>;
    emergencyContactNumber?: Nullable<string>;
    emergencyContactRelation?: Nullable<string>;
    experience?: Nullable<number>;
    gender?: Nullable<string>;
    joiningDate?: Nullable<DateTime>;
    licenseExpiryDate?: Nullable<DateTime>;
    licenseIssueDate?: Nullable<DateTime>;
    licenseNumber?: Nullable<string>;
    licenseType?: Nullable<string>;
    mobile?: Nullable<string>;
    name?: Nullable<string>;
    rating?: Nullable<number>;
    salary?: Nullable<number>;
    status?: Nullable<DriverStatus>;
    totalBookings?: Nullable<number>;
}

export interface UpdateHolidayInput {
    carId?: Nullable<number>;
    declarationType?: Nullable<string>;
    endDate?: Nullable<string>;
    reason?: Nullable<string>;
    schoolId?: Nullable<number>;
    slots?: Nullable<string>;
    startDate?: Nullable<string>;
    status?: Nullable<string>;
}

export interface UpdateLeaveHistoryInput {
    approvedAt?: Nullable<DateTime>;
    approvedBy?: Nullable<number>;
    fromDate?: Nullable<DateTime>;
    leaveType?: Nullable<string>;
    reason?: Nullable<string>;
    rejectionReason?: Nullable<string>;
    status?: Nullable<LeaveStatus>;
    toDate?: Nullable<DateTime>;
    totalDays?: Nullable<number>;
}

export interface UpdateLicenseApplicationInput {
    bookingServiceId?: Nullable<number>;
    dlApplicationNumber?: Nullable<string>;
    issuedDate?: Nullable<DateTime>;
    llNumber?: Nullable<string>;
    status?: Nullable<LicenseApplicationStatus>;
    testDate?: Nullable<DateTime>;
    testStatus?: Nullable<TestStatus>;
}

export interface UpdatePaymentInput {
    amount?: Nullable<number>;
    bookingId?: Nullable<number>;
    installmentNumber?: Nullable<number>;
    notes?: Nullable<string>;
    paymentMethod?: Nullable<string>;
    paymentNumber?: Nullable<string>;
    status?: Nullable<string>;
    totalInstallments?: Nullable<number>;
    transactionId?: Nullable<string>;
    userId?: Nullable<number>;
}

export interface UpdateSalaryHistoryInput {
    basicSalary?: Nullable<number>;
    bonus?: Nullable<number>;
    deductions?: Nullable<number>;
    month?: Nullable<string>;
    monthNumber?: Nullable<number>;
    netSalary?: Nullable<number>;
    paidBy?: Nullable<number>;
    paidOn?: Nullable<DateTime>;
    paymentMethod?: Nullable<string>;
    remarks?: Nullable<string>;
    status?: Nullable<SalaryStatus>;
    transactionId?: Nullable<string>;
    year?: Nullable<number>;
}

export interface UpdateSchoolInput {
    accountNumber?: Nullable<string>;
    address?: Nullable<string>;
    alternatePhone?: Nullable<string>;
    bankName?: Nullable<string>;
    branchName?: Nullable<string>;
    dayEndTime?: Nullable<string>;
    dayStartTime?: Nullable<string>;
    email?: Nullable<string>;
    establishedYear?: Nullable<string>;
    facebook?: Nullable<string>;
    gstNumber?: Nullable<string>;
    ifscCode?: Nullable<string>;
    instagram?: Nullable<string>;
    insuranceExpiry?: Nullable<DateTime>;
    insurancePolicyNumber?: Nullable<string>;
    insuranceProvider?: Nullable<string>;
    logo?: Nullable<string>;
    lunchEndTime?: Nullable<string>;
    lunchStartTime?: Nullable<string>;
    name?: Nullable<string>;
    ownerEmail?: Nullable<string>;
    ownerName?: Nullable<string>;
    ownerPhone?: Nullable<string>;
    phone?: Nullable<string>;
    registrationNumber?: Nullable<string>;
    rtoLicenseExpiry?: Nullable<DateTime>;
    rtoLicenseNumber?: Nullable<string>;
    status?: Nullable<string>;
    twitter?: Nullable<string>;
    website?: Nullable<string>;
    weeklyHoliday?: Nullable<string>;
}

export interface UpdateSchoolServiceInput {
    addonPrice?: Nullable<number>;
    licensePrice?: Nullable<number>;
    schoolId?: Nullable<number>;
    serviceId?: Nullable<number>;
    status?: Nullable<string>;
}

export interface UpdateServiceInput {
    category?: Nullable<ServiceCategory>;
    description?: Nullable<string>;
    duration?: Nullable<number>;
    features?: Nullable<string>;
    includedServices?: Nullable<string>;
    requirements?: Nullable<string>;
    serviceId?: Nullable<string>;
    serviceName?: Nullable<string>;
    status?: Nullable<ServiceStatus>;
    termsAndConditions?: Nullable<string>;
}

export interface UpdateServicePaymentInput {
    amount?: Nullable<number>;
    bookingServiceId?: Nullable<number>;
    installmentNumber?: Nullable<number>;
    notes?: Nullable<string>;
    paymentMethod?: Nullable<string>;
    paymentNumber?: Nullable<string>;
    status?: Nullable<string>;
    totalInstallments?: Nullable<number>;
    transactionId?: Nullable<string>;
    userId?: Nullable<number>;
}

export interface UpdateSyllabusInput {
    assessmentCriteria?: Nullable<string>;
    courseId?: Nullable<number>;
    dayNumber?: Nullable<number>;
    notes?: Nullable<string>;
    objectives?: Nullable<string>;
    practicalActivities?: Nullable<string>;
    syllabusId?: Nullable<string>;
    title?: Nullable<string>;
    topics?: Nullable<string>;
}

export interface UpdateUserInput {
    address?: Nullable<string>;
    bloodGroup?: Nullable<string>;
    contact1?: Nullable<string>;
    contact2?: Nullable<string>;
    deletedAt?: Nullable<DateTime>;
    dob?: Nullable<DateTime>;
    email?: Nullable<string>;
    fatherName?: Nullable<string>;
    name?: Nullable<string>;
    otp?: Nullable<string>;
    password?: Nullable<string>;
    permanentAddress?: Nullable<string>;
    profile?: Nullable<string>;
    role?: Nullable<Role>;
    schoolId?: Nullable<number>;
    status?: Nullable<Status>;
    surname?: Nullable<string>;
    updatedAt?: Nullable<DateTime>;
}

export interface WhereBookingSearchInput {
    bookingDate?: Nullable<DateTime>;
    bookingDateFrom?: Nullable<DateTime>;
    bookingDateTo?: Nullable<DateTime>;
    bookingId?: Nullable<string>;
    carId?: Nullable<number>;
    carName?: Nullable<string>;
    confirmationNumber?: Nullable<string>;
    courseId?: Nullable<number>;
    courseName?: Nullable<string>;
    coursePrice?: Nullable<number>;
    createdAt?: Nullable<DateTime>;
    customerEmail?: Nullable<string>;
    customerId?: Nullable<number>;
    customerMobile?: Nullable<string>;
    customerName?: Nullable<string>;
    deletedAt?: Nullable<DateTime>;
    discount?: Nullable<number>;
    id?: Nullable<number>;
    notes?: Nullable<string>;
    schoolId?: Nullable<number>;
    slot?: Nullable<string>;
    status?: Nullable<BookingStatus>;
    totalAmount?: Nullable<number>;
    updatedAt?: Nullable<DateTime>;
}

export interface WhereBookingServiceSearchInput {
    bookingId?: Nullable<number>;
    confirmationNumber?: Nullable<string>;
    createdAt?: Nullable<DateTime>;
    deletedAt?: Nullable<DateTime>;
    id?: Nullable<number>;
    schoolId?: Nullable<number>;
    schoolServiceId?: Nullable<number>;
    serviceName?: Nullable<string>;
    serviceType?: Nullable<string>;
    updatedAt?: Nullable<DateTime>;
    userId?: Nullable<number>;
}

export interface WhereBookingSessionSearchInput {
    attended?: Nullable<boolean>;
    bookingId?: Nullable<number>;
    carId?: Nullable<number>;
    carName?: Nullable<string>;
    dayNumber?: Nullable<number>;
    driverId?: Nullable<number>;
    driverName?: Nullable<string>;
    id?: Nullable<number>;
    sessionDate?: Nullable<DateTime>;
    sessionId?: Nullable<string>;
    slot?: Nullable<string>;
    status?: Nullable<BookingSessionStatus>;
}

export interface WhereCarAdminSearchInput {
    category?: Nullable<string>;
    manufacturer?: Nullable<string>;
    name?: Nullable<string>;
    status?: Nullable<string>;
}

export interface WhereDriverSearchInput {
    driverId?: Nullable<string>;
    email?: Nullable<string>;
    id?: Nullable<number>;
    licenseNumber?: Nullable<string>;
    mobile?: Nullable<string>;
    name?: Nullable<string>;
    schoolId?: Nullable<number>;
    search?: Nullable<string>;
    status?: Nullable<DriverStatus>;
    userId?: Nullable<number>;
}

export interface WhereLeaveHistorySearchInput {
    driverId?: Nullable<number>;
    id?: Nullable<number>;
    leaveId?: Nullable<string>;
    leaveType?: Nullable<string>;
    search?: Nullable<string>;
    status?: Nullable<LeaveStatus>;
}

export interface WhereLicenseApplicationSearchInput {
    bookingServiceId?: Nullable<number>;
    dlApplicationNumber?: Nullable<string>;
    id?: Nullable<number>;
    llNumber?: Nullable<string>;
    status?: Nullable<LicenseApplicationStatus>;
    testStatus?: Nullable<TestStatus>;
}

export interface WhereSalaryHistorySearchInput {
    driverId?: Nullable<number>;
    id?: Nullable<number>;
    month?: Nullable<string>;
    salaryId?: Nullable<string>;
    search?: Nullable<string>;
    status?: Nullable<SalaryStatus>;
    year?: Nullable<number>;
}

export interface WhereSchoolSearchInput {
    address?: Nullable<string>;
    alternatePhone?: Nullable<string>;
    bankName?: Nullable<string>;
    email?: Nullable<string>;
    establishedYear?: Nullable<string>;
    gstNumber?: Nullable<string>;
    ifscCode?: Nullable<string>;
    insuranceProvider?: Nullable<string>;
    name?: Nullable<string>;
    ownerEmail?: Nullable<string>;
    ownerName?: Nullable<string>;
    ownerPhone?: Nullable<string>;
    phone?: Nullable<string>;
    registrationNumber?: Nullable<string>;
    rtoLicenseNumber?: Nullable<string>;
    status?: Nullable<string>;
    website?: Nullable<string>;
    weeklyHoliday?: Nullable<string>;
}

export interface WhereSchoolServiceSearchInput {
    schoolId?: Nullable<number>;
    schoolServiceId?: Nullable<string>;
    serviceId?: Nullable<number>;
    status?: Nullable<string>;
}

export interface WhereServiceSearchInput {
    category?: Nullable<ServiceCategory>;
    schoolId?: Nullable<number>;
    status?: Nullable<ServiceStatus>;
}

export interface WhereUserSearchInput {
    address?: Nullable<string>;
    bloodGroup?: Nullable<string>;
    contact1?: Nullable<string>;
    contact2?: Nullable<string>;
    createdAt?: Nullable<DateTime>;
    deletedAt?: Nullable<DateTime>;
    dob?: Nullable<DateTime>;
    email?: Nullable<string>;
    fatherName?: Nullable<string>;
    id?: Nullable<string>;
    name?: Nullable<string>;
    otp?: Nullable<string>;
    password?: Nullable<string>;
    permanentAddress?: Nullable<string>;
    profile?: Nullable<string>;
    role?: Nullable<Role>;
    schoolId?: Nullable<number>;
    status?: Nullable<Status>;
    surname?: Nullable<string>;
    updatedAt?: Nullable<DateTime>;
}

export interface Booking {
    bookingDate: DateTime;
    bookingId: string;
    bookingServices?: Nullable<BookingService[]>;
    car?: Nullable<Car>;
    carId: number;
    carName: string;
    confirmationNumber?: Nullable<string>;
    course?: Nullable<Course>;
    courseId: number;
    courseName: string;
    coursePrice: number;
    createdAt: DateTime;
    customer?: Nullable<User>;
    customerEmail?: Nullable<string>;
    customerId?: Nullable<number>;
    customerMobile: string;
    customerName?: Nullable<string>;
    deletedAt?: Nullable<DateTime>;
    discount?: Nullable<number>;
    id: number;
    notes?: Nullable<string>;
    parsedServices?: Nullable<BookingServiceInfo[]>;
    payments?: Nullable<Payment[]>;
    school?: Nullable<School>;
    schoolId: number;
    selectedServices?: Nullable<string>;
    services?: Nullable<string>;
    sessions?: Nullable<BookingSession[]>;
    slot: string;
    status: BookingStatus;
    totalAmount: number;
    updatedAt: DateTime;
}

export interface BookingPagination {
    data: Booking[];
    skip: number;
    take: number;
    total: number;
}

export interface BookingService {
    booking?: Nullable<Booking>;
    bookingId?: Nullable<number>;
    confirmationNumber?: Nullable<string>;
    createdAt: DateTime;
    deletedAt?: Nullable<DateTime>;
    description?: Nullable<string>;
    discount?: Nullable<number>;
    id: number;
    licenseApplications?: Nullable<LicenseApplication[]>;
    price: number;
    school?: Nullable<School>;
    schoolId: number;
    schoolService?: Nullable<SchoolService>;
    schoolServiceId: number;
    serviceName: string;
    serviceType: BookingServiceType;
    updatedAt: DateTime;
    user?: Nullable<User>;
    userId: number;
}

export interface BookingServiceInfo {
    description: string;
    id: number;
    name: string;
    price: number;
    serviceType: string;
}

export interface BookingServicePagination {
    data: BookingService[];
    skip: number;
    take: number;
    total: number;
}

export interface BookingSession {
    attended: boolean;
    booking?: Nullable<Booking>;
    bookingId: number;
    car?: Nullable<Car>;
    carId: number;
    completedAt?: Nullable<DateTime>;
    createdAt: DateTime;
    customerFeedback?: Nullable<string>;
    dayNumber: number;
    deletedAt?: Nullable<DateTime>;
    driver?: Nullable<Driver>;
    driverId: number;
    id: number;
    instructorNotes?: Nullable<string>;
    internalNotes?: Nullable<string>;
    performanceRating?: Nullable<number>;
    progressNotes?: Nullable<string>;
    sessionDate: DateTime;
    skillsAssessed?: Nullable<string>;
    slot: string;
    status: BookingSessionStatus;
    updatedAt: DateTime;
}

export interface BookingSessionPagination {
    data: BookingSession[];
    skip: number;
    take: number;
    total: number;
}

export interface Car {
    assignedDriver?: Nullable<Driver>;
    assignedDriverId?: Nullable<number>;
    carAdmin?: Nullable<CarAdmin>;
    carAdminId?: Nullable<number>;
    carId: string;
    carName: string;
    chassisNumber?: Nullable<string>;
    color: string;
    courses?: Nullable<Course[]>;
    createdAt: DateTime;
    currentMileage: number;
    deletedAt?: Nullable<DateTime>;
    engineNumber?: Nullable<string>;
    fitnessExpiry?: Nullable<DateTime>;
    fuelType: FuelType;
    id: number;
    insuranceExpiry?: Nullable<DateTime>;
    insuranceNumber?: Nullable<string>;
    lastServiceDate?: Nullable<DateTime>;
    model: string;
    nextServiceDate?: Nullable<DateTime>;
    pucExpiry?: Nullable<DateTime>;
    purchaseCost?: Nullable<number>;
    purchaseDate?: Nullable<DateTime>;
    registrationNumber: string;
    school?: Nullable<School>;
    schoolId: number;
    seatingCapacity: number;
    status: CarStatus;
    totalBookings: number;
    transmission: TransmissionType;
    updatedAt: DateTime;
    year: number;
}

export interface CarAdmin {
    category: CarCategory;
    createdAt: DateTime;
    deletedAt?: Nullable<DateTime>;
    id: number;
    manufacturer: string;
    name: string;
    status: CarAdminStatus;
    updatedAt: DateTime;
}

export interface CarAdminPagination {
    data: CarAdmin[];
    skip: number;
    take: number;
    total: number;
}

export interface CarCourse {
    car?: Nullable<Car>;
    carId: number;
    course?: Nullable<Course>;
    courseId: number;
    createdAt: DateTime;
    deletedAt?: Nullable<DateTime>;
    id: number;
    updatedAt: DateTime;
}

export interface CarCoursePagination {
    data: CarCourse[];
    skip: number;
    take: number;
    total: number;
}

export interface CarPagination {
    data: Car[];
    skip: number;
    take: number;
    total: number;
}

export interface Course {
    automaticPrice?: Nullable<number>;
    cars?: Nullable<Car[]>;
    courseDays: number;
    courseId: string;
    courseName: string;
    courseType: CourseType;
    createdAt: DateTime;
    deletedAt?: Nullable<DateTime>;
    description: string;
    enrolledStudents: number;
    id: number;
    minsPerDay: number;
    price: number;
    requirements?: Nullable<string>;
    school?: Nullable<School>;
    schoolId: number;
    sessionsCompleted: number;
    status: CourseStatus;
    syllabus?: Nullable<string>;
    totalRevenue: number;
    updatedAt: DateTime;
}

export interface CoursePagination {
    data: Course[];
    skip: number;
    take: number;
    total: number;
}

export interface Driver {
    address: string;
    alternatePhone?: Nullable<string>;
    assignedCars?: Nullable<Car[]>;
    bloodGroup?: Nullable<string>;
    cancelledBookings: number;
    completedBookings: number;
    createdAt: DateTime;
    dateOfBirth: DateTime;
    deletedAt?: Nullable<DateTime>;
    driverId: string;
    email?: Nullable<string>;
    emergencyContactName?: Nullable<string>;
    emergencyContactNumber?: Nullable<string>;
    emergencyContactRelation?: Nullable<string>;
    experience: number;
    gender: string;
    id: number;
    joiningDate: DateTime;
    leaveHistory?: Nullable<LeaveHistory[]>;
    licenseExpiryDate: DateTime;
    licenseIssueDate: DateTime;
    licenseNumber: string;
    licenseType: string;
    mobile: string;
    name: string;
    rating: number;
    salary: number;
    salaryHistory?: Nullable<SalaryHistory[]>;
    school?: Nullable<School>;
    schoolId: number;
    status: DriverStatus;
    totalBookings: number;
    updatedAt: DateTime;
    user?: Nullable<User>;
    userId: number;
}

export interface DriverPagination {
    data: Driver[];
    skip: number;
    take: number;
    total: number;
}

export interface Holiday {
    car?: Nullable<Car>;
    carId?: Nullable<number>;
    createdAt: DateTime;
    declarationType: HolidayDeclarationType;
    deletedAt?: Nullable<DateTime>;
    endDate: DateTime;
    id: number;
    reason: string;
    school?: Nullable<School>;
    schoolId: number;
    slots?: Nullable<string[]>;
    startDate: DateTime;
    status: HolidayStatus;
    updatedAt: DateTime;
}

export interface HolidayPagination {
    data: Holiday[];
    skip: number;
    take: number;
    total: number;
}

export interface LeaveHistory {
    approvedAt?: Nullable<DateTime>;
    approvedBy?: Nullable<number>;
    createdAt: DateTime;
    driver?: Nullable<Driver>;
    driverId: number;
    fromDate: DateTime;
    id: number;
    leaveId: string;
    leaveType?: Nullable<string>;
    reason: string;
    rejectionReason?: Nullable<string>;
    status: LeaveStatus;
    toDate: DateTime;
    totalDays: number;
    updatedAt: DateTime;
}

export interface LeaveHistoryPagination {
    data: LeaveHistory[];
    skip: number;
    take: number;
    total: number;
}

export interface LicenseApplication {
    bookingService?: Nullable<BookingService>;
    bookingServiceId: number;
    dlApplicationNumber?: Nullable<string>;
    id: number;
    issuedDate?: Nullable<DateTime>;
    llNumber?: Nullable<string>;
    status: LicenseApplicationStatus;
    testDate?: Nullable<DateTime>;
    testStatus: TestStatus;
}

export interface LicenseApplicationPagination {
    data: LicenseApplication[];
    skip: number;
    take: number;
    total: number;
}

export interface IMutation {
    createBooking(inputType: CreateBookingInput): Booking | Promise<Booking>;
    createBookingService(inputType: CreateBookingServiceInput): BookingService | Promise<BookingService>;
    createBookingSession(inputType: CreateBookingSessionInput): BookingSession | Promise<BookingSession>;
    createCar(inputType: CreateCarInput): Car | Promise<Car>;
    createCarAdmin(inputType: CreateCarAdminInput): CarAdmin | Promise<CarAdmin>;
    createCarCourse(inputType: CreateCarCourseInput): CarCourse | Promise<CarCourse>;
    createCourse(inputType: CreateCourseInput): Course | Promise<Course>;
    createDriver(inputType: CreateDriverInput): Driver | Promise<Driver>;
    createHoliday(inputType: CreateHolidayInput): Holiday | Promise<Holiday>;
    createLeaveHistory(inputType: CreateLeaveHistoryInput): LeaveHistory | Promise<LeaveHistory>;
    createLicenseApplication(inputType: CreateLicenseApplicationInput): LicenseApplication | Promise<LicenseApplication>;
    createPayment(inputType: CreatePaymentInput): Payment | Promise<Payment>;
    createSalaryHistory(inputType: CreateSalaryHistoryInput): SalaryHistory | Promise<SalaryHistory>;
    createSchool(inputType: CreateSchoolInput): School | Promise<School>;
    createSchoolService(inputType: CreateSchoolServiceInput): SchoolService | Promise<SchoolService>;
    createService(inputType: CreateServiceInput): Service | Promise<Service>;
    createServicePayment(inputType: CreateServicePaymentInput): ServicePayment | Promise<ServicePayment>;
    createSyllabus(inputType: CreateSyllabusInput): Syllabus | Promise<Syllabus>;
    createUser(inputType: CreateUserInput): User | Promise<User>;
    deleteBooking(id: number, userid: number): Booking | Promise<Booking>;
    deleteBookingService(id: number, userid: number): BookingService | Promise<BookingService>;
    deleteBookingSession(id: number, userid: number): BookingSession | Promise<BookingSession>;
    deleteCar(id: number, userid: number): Car | Promise<Car>;
    deleteCarAdmin(id: number, userid: number): CarAdmin | Promise<CarAdmin>;
    deleteCarCourse(id: number, userid: number): CarCourse | Promise<CarCourse>;
    deleteCourse(id: number, userid: number): Course | Promise<Course>;
    deleteDriver(id: number, userid: number): Driver | Promise<Driver>;
    deleteHoliday(id: number, userid: number): Holiday | Promise<Holiday>;
    deleteLeaveHistory(id: number, userid: number): LeaveHistory | Promise<LeaveHistory>;
    deleteLicenseApplication(id: number, userid: number): LicenseApplication | Promise<LicenseApplication>;
    deletePayment(id: number, userid: number): Payment | Promise<Payment>;
    deleteSalaryHistory(id: number, userid: number): SalaryHistory | Promise<SalaryHistory>;
    deleteSchool(id: number, userid: number): School | Promise<School>;
    deleteSchoolService(id: number, userid: number): SchoolService | Promise<SchoolService>;
    deleteService(id: number, userid: number): Service | Promise<Service>;
    deleteServicePayment(id: number, userid: number): ServicePayment | Promise<ServicePayment>;
    deleteSyllabus(id: number, userid: number): Syllabus | Promise<Syllabus>;
    deleteUser(id: number, userid: number): User | Promise<User>;
    optLogin(contact: string): User | Promise<User>;
    signup(signUpUserInput: SignUpUserInput): User | Promise<User>;
    updateBooking(id: number, updateType: UpdateBookingInput): Booking | Promise<Booking>;
    updateBookingService(id: number, updateType: UpdateBookingServiceInput): BookingService | Promise<BookingService>;
    updateBookingSession(id: number, updateType: UpdateBookingSessionInput): BookingSession | Promise<BookingSession>;
    updateCar(id: number, updateType: UpdateCarInput): Car | Promise<Car>;
    updateCarAdmin(id: number, updateType: UpdateCarAdminInput): CarAdmin | Promise<CarAdmin>;
    updateCarCourse(id: number, updateType: UpdateCarCourseInput): CarCourse | Promise<CarCourse>;
    updateCourse(id: number, updateType: UpdateCourseInput): Course | Promise<Course>;
    updateDriver(id: number, updateType: UpdateDriverInput): Driver | Promise<Driver>;
    updateHoliday(id: number, updateType: UpdateHolidayInput): Holiday | Promise<Holiday>;
    updateLeaveHistory(id: number, updateType: UpdateLeaveHistoryInput): LeaveHistory | Promise<LeaveHistory>;
    updateLicenseApplication(id: number, updateType: UpdateLicenseApplicationInput): LicenseApplication | Promise<LicenseApplication>;
    updatePayment(id: number, updateType: UpdatePaymentInput): Payment | Promise<Payment>;
    updateSalaryHistory(id: number, updateType: UpdateSalaryHistoryInput): SalaryHistory | Promise<SalaryHistory>;
    updateSchool(id: number, updateType: UpdateSchoolInput): School | Promise<School>;
    updateSchoolService(id: number, updateType: UpdateSchoolServiceInput): SchoolService | Promise<SchoolService>;
    updateService(id: number, updateType: UpdateServiceInput): Service | Promise<Service>;
    updateServicePayment(id: number, updateType: UpdateServicePaymentInput): ServicePayment | Promise<ServicePayment>;
    updateSyllabus(id: number, updateType: UpdateSyllabusInput): Syllabus | Promise<Syllabus>;
    updateUser(id: number, updateType: UpdateUserInput): User | Promise<User>;
    verifyOtp(contact: string, otp: string): User | Promise<User>;
}

export interface Payment {
    amount: number;
    booking?: Nullable<Booking>;
    bookingId: number;
    createdAt: DateTime;
    deletedAt?: Nullable<DateTime>;
    id: number;
    installmentNumber: number;
    notes?: Nullable<string>;
    paymentDate: DateTime;
    paymentMethod?: Nullable<string>;
    paymentNumber: string;
    status: string;
    totalInstallments: number;
    transactionId?: Nullable<string>;
    updatedAt: DateTime;
    user?: Nullable<User>;
    userId: number;
}

export interface PaymentPagination {
    data: Payment[];
    skip: number;
    take: number;
    total: number;
}

export interface IQuery {
    getAllBooking(whereSearchInput: WhereBookingSearchInput): Booking[] | Promise<Booking[]>;
    getAllBookingService(whereSearchInput: WhereBookingServiceSearchInput): BookingService[] | Promise<BookingService[]>;
    getAllBookingSession(whereSearchInput: WhereBookingSessionSearchInput): BookingSession[] | Promise<BookingSession[]>;
    getAllCar(whereSearchInput: SearchCarInput): Car[] | Promise<Car[]>;
    getAllCarAdmin(whereSearchInput: WhereCarAdminSearchInput): CarAdmin[] | Promise<CarAdmin[]>;
    getAllCarCourse(whereSearchInput: SearchCarCourseInput): CarCourse[] | Promise<CarCourse[]>;
    getAllCourse(whereSearchInput: SearchCourseInput): Course[] | Promise<Course[]>;
    getAllDriver(whereSearchInput: WhereDriverSearchInput): Driver[] | Promise<Driver[]>;
    getAllHoliday(whereSearchInput: SearchHolidayInput): Holiday[] | Promise<Holiday[]>;
    getAllLeaveHistory(whereSearchInput: WhereLeaveHistorySearchInput): LeaveHistory[] | Promise<LeaveHistory[]>;
    getAllLicenseApplication(whereSearchInput: WhereLicenseApplicationSearchInput): LicenseApplication[] | Promise<LicenseApplication[]>;
    getAllPayment(whereSearchInput: SearchPaymentInput): Payment[] | Promise<Payment[]>;
    getAllSalaryHistory(whereSearchInput: WhereSalaryHistorySearchInput): SalaryHistory[] | Promise<SalaryHistory[]>;
    getAllSchool(whereSearchInput: WhereSchoolSearchInput): School[] | Promise<School[]>;
    getAllSchoolService(whereSearchInput: WhereSchoolServiceSearchInput): SchoolService[] | Promise<SchoolService[]>;
    getAllSchoolWithCounts(): SchoolWithCounts[] | Promise<SchoolWithCounts[]>;
    getAllService(whereSearchInput: WhereServiceSearchInput): Service[] | Promise<Service[]>;
    getAllServicePayment(whereSearchInput: SearchServicePaymentInput): ServicePayment[] | Promise<ServicePayment[]>;
    getAllSyllabus(whereSearchInput: SearchSyllabusInput): Syllabus[] | Promise<Syllabus[]>;
    getAllUser(whereSearchInput: WhereUserSearchInput): User[] | Promise<User[]>;
    getBookingById(id: number): Booking | Promise<Booking>;
    getBookingServiceById(id: number): BookingService | Promise<BookingService>;
    getBookingSessionById(id: number): BookingSession | Promise<BookingSession>;
    getCarAdminById(id: number): CarAdmin | Promise<CarAdmin>;
    getCarById(id: number): Car | Promise<Car>;
    getCarCourseById(id: number): CarCourse | Promise<CarCourse>;
    getCourseById(id: number): Course | Promise<Course>;
    getDriverById(id: number): Driver | Promise<Driver>;
    getHolidayById(id: number): Holiday | Promise<Holiday>;
    getLeaveHistoryById(id: number): LeaveHistory | Promise<LeaveHistory>;
    getLicenseApplicationById(id: number): LicenseApplication | Promise<LicenseApplication>;
    getPaginatedBooking(searchPaginationInput: SearchPaginationInput, whereSearchInput: WhereBookingSearchInput): BookingPagination | Promise<BookingPagination>;
    getPaginatedBookingService(searchPaginationInput: SearchPaginationInput, whereSearchInput: WhereBookingServiceSearchInput): BookingServicePagination | Promise<BookingServicePagination>;
    getPaginatedBookingSession(searchPaginationInput: SearchPaginationInput, whereSearchInput: WhereBookingSessionSearchInput): BookingSessionPagination | Promise<BookingSessionPagination>;
    getPaginatedCar(searchPaginationInput: SearchPaginationInput, whereSearchInput: SearchCarInput): CarPagination | Promise<CarPagination>;
    getPaginatedCarAdmin(searchPaginationInput: SearchPaginationInput, whereSearchInput: WhereCarAdminSearchInput): CarAdminPagination | Promise<CarAdminPagination>;
    getPaginatedCarCourse(searchPaginationInput: SearchPaginationInput, whereSearchInput: SearchCarCourseInput): CarCoursePagination | Promise<CarCoursePagination>;
    getPaginatedCourse(searchPaginationInput: SearchPaginationInput, whereSearchInput: SearchCourseInput): CoursePagination | Promise<CoursePagination>;
    getPaginatedDriver(searchPaginationInput: SearchPaginationInput, whereSearchInput: WhereDriverSearchInput): DriverPagination | Promise<DriverPagination>;
    getPaginatedHoliday(searchPaginationInput: SearchPaginationInput, whereSearchInput: SearchHolidayInput): HolidayPagination | Promise<HolidayPagination>;
    getPaginatedLeaveHistory(searchPaginationInput: SearchPaginationInput, whereSearchInput: WhereLeaveHistorySearchInput): LeaveHistoryPagination | Promise<LeaveHistoryPagination>;
    getPaginatedLicenseApplication(searchPaginationInput: SearchPaginationInput, whereSearchInput: WhereLicenseApplicationSearchInput): LicenseApplicationPagination | Promise<LicenseApplicationPagination>;
    getPaginatedPayment(searchPaginationInput: SearchPaginationInput, whereSearchInput: SearchPaymentInput): PaymentPagination | Promise<PaymentPagination>;
    getPaginatedSalaryHistory(searchPaginationInput: SearchPaginationInput, whereSearchInput: WhereSalaryHistorySearchInput): SalaryHistoryPagination | Promise<SalaryHistoryPagination>;
    getPaginatedSchool(searchPaginationInput: SearchPaginationInput, whereSearchInput: WhereSchoolSearchInput): SchoolPagination | Promise<SchoolPagination>;
    getPaginatedSchoolService(searchPaginationInput: SearchPaginationInput, whereSearchInput: WhereSchoolServiceSearchInput): SchoolServicePagination | Promise<SchoolServicePagination>;
    getPaginatedService(searchPaginationInput: SearchPaginationInput, whereSearchInput: WhereServiceSearchInput): ServicePagination | Promise<ServicePagination>;
    getPaginatedServicePayment(searchPaginationInput: SearchPaginationInput, whereSearchInput: SearchServicePaymentInput): ServicePaymentPagination | Promise<ServicePaymentPagination>;
    getPaginatedSyllabus(searchPaginationInput: SearchPaginationInput, whereSearchInput: SearchSyllabusInput): SyllabusPagination | Promise<SyllabusPagination>;
    getPaginatedUser(searchPaginationInput: SearchPaginationInput, whereSearchInput: WhereUserSearchInput): UserPagination | Promise<UserPagination>;
    getPaymentById(id: number): Payment | Promise<Payment>;
    getSalaryHistoryById(id: number): SalaryHistory | Promise<SalaryHistory>;
    getSchoolById(id: number): School | Promise<School>;
    getSchoolDashboardStats(schoolId: number): SchoolDashboardStats | Promise<SchoolDashboardStats>;
    getSchoolServiceById(id: number): SchoolService | Promise<SchoolService>;
    getSchoolStatistics(): SchoolStatistics | Promise<SchoolStatistics>;
    getServerDateTime(): Util | Promise<Util>;
    getServiceById(id: number): Service | Promise<Service>;
    getServicePaymentById(id: number): ServicePayment | Promise<ServicePayment>;
    getSyllabusById(id: number): Syllabus | Promise<Syllabus>;
    getUserById(id: number): User | Promise<User>;
    login(loginUserInput: LoginUserInput): User | Promise<User>;
    searchBooking(whereSearchInput: WhereBookingSearchInput): Nullable<Booking> | Promise<Nullable<Booking>>;
    searchBookingService(whereSearchInput: WhereBookingServiceSearchInput): Nullable<BookingService> | Promise<Nullable<BookingService>>;
    searchBookingSession(whereSearchInput: WhereBookingSessionSearchInput): Nullable<BookingSession> | Promise<Nullable<BookingSession>>;
    searchCar(whereSearchInput: SearchCarInput): Nullable<Car> | Promise<Nullable<Car>>;
    searchCarAdmin(whereSearchInput: WhereCarAdminSearchInput): Nullable<CarAdmin> | Promise<Nullable<CarAdmin>>;
    searchCarCourse(whereSearchInput: SearchCarCourseInput): Nullable<CarCourse> | Promise<Nullable<CarCourse>>;
    searchCourse(whereSearchInput: SearchCourseInput): Nullable<Course> | Promise<Nullable<Course>>;
    searchDriver(whereSearchInput: WhereDriverSearchInput): Nullable<Driver> | Promise<Nullable<Driver>>;
    searchHoliday(whereSearchInput: SearchHolidayInput): Nullable<Holiday> | Promise<Nullable<Holiday>>;
    searchLeaveHistory(whereSearchInput: WhereLeaveHistorySearchInput): Nullable<LeaveHistory> | Promise<Nullable<LeaveHistory>>;
    searchLicenseApplication(whereSearchInput: WhereLicenseApplicationSearchInput): Nullable<LicenseApplication> | Promise<Nullable<LicenseApplication>>;
    searchPayment(whereSearchInput: SearchPaymentInput): Nullable<Payment> | Promise<Nullable<Payment>>;
    searchSalaryHistory(whereSearchInput: WhereSalaryHistorySearchInput): Nullable<SalaryHistory> | Promise<Nullable<SalaryHistory>>;
    searchSchool(whereSearchInput: WhereSchoolSearchInput): Nullable<School> | Promise<Nullable<School>>;
    searchSchoolService(whereSearchInput: WhereSchoolServiceSearchInput): Nullable<SchoolService> | Promise<Nullable<SchoolService>>;
    searchService(whereSearchInput: WhereServiceSearchInput): Nullable<Service> | Promise<Nullable<Service>>;
    searchServicePayment(whereSearchInput: SearchServicePaymentInput): Nullable<ServicePayment> | Promise<Nullable<ServicePayment>>;
    searchSyllabus(whereSearchInput: SearchSyllabusInput): Nullable<Syllabus> | Promise<Nullable<Syllabus>>;
    searchUser(whereSearchInput: WhereUserSearchInput): Nullable<User> | Promise<Nullable<User>>;
}

export interface SalaryHistory {
    basicSalary: number;
    bonus: number;
    createdAt: DateTime;
    deductions: number;
    driver?: Nullable<Driver>;
    driverId: number;
    id: number;
    month: string;
    monthNumber: number;
    netSalary: number;
    paidBy?: Nullable<number>;
    paidOn?: Nullable<DateTime>;
    paymentMethod?: Nullable<string>;
    remarks?: Nullable<string>;
    salaryId: string;
    status: SalaryStatus;
    transactionId?: Nullable<string>;
    updatedAt: DateTime;
    year: number;
}

export interface SalaryHistoryPagination {
    data: SalaryHistory[];
    skip: number;
    take: number;
    total: number;
}

export interface School {
    accountNumber?: Nullable<string>;
    address: string;
    alternatePhone?: Nullable<string>;
    bankName?: Nullable<string>;
    branchName?: Nullable<string>;
    createdAt: DateTime;
    dayEndTime?: Nullable<string>;
    dayStartTime?: Nullable<string>;
    deletedAt?: Nullable<DateTime>;
    email?: Nullable<string>;
    establishedYear: string;
    facebook?: Nullable<string>;
    gstNumber?: Nullable<string>;
    id: number;
    ifscCode?: Nullable<string>;
    instagram?: Nullable<string>;
    insuranceExpiry?: Nullable<DateTime>;
    insurancePolicyNumber?: Nullable<string>;
    insuranceProvider?: Nullable<string>;
    logo?: Nullable<string>;
    lunchEndTime?: Nullable<string>;
    lunchStartTime?: Nullable<string>;
    name: string;
    ownerEmail?: Nullable<string>;
    ownerName?: Nullable<string>;
    ownerPhone?: Nullable<string>;
    phone: string;
    registrationNumber: string;
    rtoLicenseExpiry?: Nullable<DateTime>;
    rtoLicenseNumber?: Nullable<string>;
    status: SchoolStatus;
    twitter?: Nullable<string>;
    updatedAt: DateTime;
    users?: Nullable<User[]>;
    website: string;
    weeklyHoliday?: Nullable<string>;
}

export interface SchoolDashboardStats {
    activeCustomers: number;
    pendingBookings: number;
    todayBookings: number;
    totalRevenue: number;
}

export interface SchoolPagination {
    data: School[];
    skip: number;
    take: number;
    total: number;
}

export interface SchoolService {
    addonPrice: number;
    createdAt: DateTime;
    deletedAt?: Nullable<DateTime>;
    id: number;
    licensePrice: number;
    school?: Nullable<School>;
    schoolId: number;
    schoolServiceId: string;
    service?: Nullable<Service>;
    serviceId: number;
    status: string;
    updatedAt: DateTime;
}

export interface SchoolServicePagination {
    data: SchoolService[];
    skip: number;
    take: number;
    total: number;
}

export interface SchoolStatistics {
    activeSchools: number;
    inactiveSchools: number;
    suspendedSchools: number;
    totalBookings: number;
    totalCars: number;
    totalDrivers: number;
    totalSchools: number;
    totalUsers: number;
}

export interface SchoolWithCounts {
    accountNumber?: Nullable<string>;
    address: string;
    alternatePhone?: Nullable<string>;
    bankName?: Nullable<string>;
    bookingCount?: Nullable<number>;
    branchName?: Nullable<string>;
    carCount?: Nullable<number>;
    createdAt: DateTime;
    dayEndTime?: Nullable<string>;
    dayStartTime?: Nullable<string>;
    deletedAt?: Nullable<DateTime>;
    driverCount?: Nullable<number>;
    email?: Nullable<string>;
    establishedYear: string;
    facebook?: Nullable<string>;
    gstNumber?: Nullable<string>;
    id: number;
    ifscCode?: Nullable<string>;
    instagram?: Nullable<string>;
    insuranceExpiry?: Nullable<DateTime>;
    insurancePolicyNumber?: Nullable<string>;
    insuranceProvider?: Nullable<string>;
    logo?: Nullable<string>;
    lunchEndTime?: Nullable<string>;
    lunchStartTime?: Nullable<string>;
    name: string;
    ownerEmail?: Nullable<string>;
    ownerName?: Nullable<string>;
    ownerPhone?: Nullable<string>;
    phone: string;
    registrationNumber: string;
    rtoLicenseExpiry?: Nullable<DateTime>;
    rtoLicenseNumber?: Nullable<string>;
    status: SchoolStatus;
    twitter?: Nullable<string>;
    updatedAt: DateTime;
    userCount?: Nullable<number>;
    users?: Nullable<User[]>;
    website: string;
    weeklyHoliday?: Nullable<string>;
}

export interface Service {
    category: ServiceCategory;
    createdAt: DateTime;
    deletedAt?: Nullable<DateTime>;
    description: string;
    duration: number;
    features?: Nullable<string>;
    id: number;
    includedServices?: Nullable<string>;
    requirements?: Nullable<string>;
    serviceId: string;
    serviceName: string;
    status: ServiceStatus;
    termsAndConditions?: Nullable<string>;
    updatedAt: DateTime;
}

export interface ServicePagination {
    data: Service[];
    skip: number;
    take: number;
    total: number;
}

export interface ServicePayment {
    amount: number;
    bookingServiceId: number;
    createdAt: DateTime;
    deletedAt?: Nullable<DateTime>;
    id: number;
    installmentNumber: number;
    notes?: Nullable<string>;
    paymentDate: DateTime;
    paymentMethod?: Nullable<string>;
    paymentNumber: string;
    status: string;
    totalInstallments: number;
    transactionId?: Nullable<string>;
    updatedAt: DateTime;
    userId: number;
}

export interface ServicePaymentPagination {
    data: ServicePayment[];
    skip: number;
    take: number;
    total: number;
}

export interface Syllabus {
    assessmentCriteria?: Nullable<string>;
    course?: Nullable<Course>;
    courseId: number;
    createdAt: DateTime;
    dayNumber: number;
    deletedAt?: Nullable<DateTime>;
    id: number;
    notes?: Nullable<string>;
    objectives?: Nullable<string>;
    practicalActivities?: Nullable<string>;
    syllabusId: string;
    title: string;
    topics: string;
    updatedAt: DateTime;
}

export interface SyllabusPagination {
    data: Syllabus[];
    skip: number;
    take: number;
    total: number;
}

export interface User {
    address?: Nullable<string>;
    bloodGroup?: Nullable<string>;
    contact1: string;
    contact2?: Nullable<string>;
    createdAt: DateTime;
    createdBy: User;
    createdById: number;
    deletedAt?: Nullable<DateTime>;
    deletedBy?: Nullable<User>;
    deletedById?: Nullable<number>;
    dob?: Nullable<DateTime>;
    email?: Nullable<string>;
    fatherName?: Nullable<string>;
    id: number;
    name: string;
    otp?: Nullable<string>;
    password?: Nullable<string>;
    permanentAddress?: Nullable<string>;
    profile?: Nullable<string>;
    role: Role;
    school?: Nullable<School>;
    schoolId?: Nullable<number>;
    status: Status;
    surname?: Nullable<string>;
    updatedAt: DateTime;
    updatedBy?: Nullable<User>;
    updatedById?: Nullable<number>;
}

export interface UserPagination {
    data: User[];
    skip: number;
    take: number;
    total: number;
}

export interface Util {
    serverDateTime: DateTime;
}

export type DateTime = any;
type Nullable<T> = T | null;
