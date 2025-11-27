import { Injectable } from '@nestjs/common';
import { CreateSchoolInput } from './dto/create-school.input';
import { WhereSchoolSearchInput } from './dto/search-school.input';
import { BaseService } from 'src/base/base.service';
import { SchoolPagination } from './school.resolver';
import { SchoolStatistics } from './entities/school-statistics.entity';
import { SchoolWithCounts } from './entities/school-with-counts.entity';
import { SchoolDashboardStats } from './entities/school-dashboard-stats.entity';
import { PrismaService } from 'prisma/prisma.service';
import { school, PrismaClient } from '@prisma/client';
import { UpdateSchoolInput } from './dto/update-school.input';

@Injectable()
export class SchoolService extends BaseService<
  school,
  typeof CreateSchoolInput,
  typeof UpdateSchoolInput,
  typeof WhereSchoolSearchInput,
  typeof SchoolPagination,
  PrismaClient['school']
> {
  constructor(private readonly prisma: PrismaService) {
    super('School', prisma.school);
  }

  async getStatistics(): Promise<SchoolStatistics> {
    const [
      totalSchools,
      activeSchools,
      inactiveSchools,
      suspendedSchools,
      totalUsers,
      totalDrivers,
      totalCars,
      totalBookings,
    ] = await Promise.all([
      this.prisma.school.count(),
      this.prisma.school.count({ where: { status: 'ACTIVE' } }),
      this.prisma.school.count({ where: { status: 'INACTIVE' } }),
      this.prisma.school.count({ where: { status: 'SUSPENDED' } }),
      this.prisma.user.count({ where: { role: 'USER' } }),
      this.prisma.driver.count(),
      this.prisma.car.count(),
      this.prisma.booking.count(),
    ]);

    return {
      totalSchools,
      activeSchools,
      inactiveSchools,
      suspendedSchools,
      totalUsers,
      totalDrivers,
      totalCars,
      totalBookings,
    };
  }

  async getAllSchoolsWithCounts(): Promise<SchoolWithCounts[]> {
    const schools = await this.prisma.school.findMany({
      orderBy: { createdAt: 'desc' },
    });

    const schoolsWithCounts = await Promise.all(
      schools.map(async (school) => {
        const [userCount, driverCount, carCount, bookingCount] =
          await Promise.all([
            this.prisma.user.count({
              where: { schoolId: school.id, role: 'USER' },
            }),
            this.prisma.driver.count({ where: { schoolId: school.id } }),
            this.prisma.car.count({ where: { schoolId: school.id } }),
            this.prisma.booking.count({ where: { schoolId: school.id } }),
          ]);

        // Convert null values to undefined for GraphQL compatibility
        const schoolData: SchoolWithCounts = {
          id: school.id,
          name: school.name,
          email: school.email ?? undefined,
          phone: school.phone,
          alternatePhone: school.alternatePhone ?? undefined,
          address: school.address,
          registrationNumber: school.registrationNumber,
          gstNumber: school.gstNumber ?? undefined,
          establishedYear: school.establishedYear,
          website: school.website,
          logo: school.logo ?? undefined,
          dayStartTime: school.dayStartTime ?? undefined,
          dayEndTime: school.dayEndTime ?? undefined,
          lunchStartTime: school.lunchStartTime ?? undefined,
          lunchEndTime: school.lunchEndTime ?? undefined,
          weeklyHoliday: school.weeklyHoliday ?? undefined,
          ownerName: school.ownerName ?? undefined,
          ownerPhone: school.ownerPhone ?? undefined,
          ownerEmail: school.ownerEmail ?? undefined,
          bankName: school.bankName ?? undefined,
          accountNumber: school.accountNumber ?? undefined,
          ifscCode: school.ifscCode ?? undefined,
          branchName: school.branchName ?? undefined,
          rtoLicenseNumber: school.rtoLicenseNumber ?? undefined,
          rtoLicenseExpiry: school.rtoLicenseExpiry ?? undefined,
          insuranceProvider: school.insuranceProvider ?? undefined,
          insurancePolicyNumber: school.insurancePolicyNumber ?? undefined,
          insuranceExpiry: school.insuranceExpiry ?? undefined,
          facebook: school.facebook ?? undefined,
          instagram: school.instagram ?? undefined,
          twitter: school.twitter ?? undefined,
          status: school.status,
          createdAt: school.createdAt,
          updatedAt: school.updatedAt,
          deletedAt: school.deletedAt ?? undefined,
          userCount,
          driverCount,
          carCount,
          bookingCount,
        };

        return schoolData;
      }),
    );

    return schoolsWithCounts;
  }

  async getDashboardStats(schoolId: number): Promise<SchoolDashboardStats> {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);

    const [todayBookings, pendingBookings, totalRevenue, activeCustomers] =
      await Promise.all([
        // Today's bookings count
        this.prisma.booking.count({
          where: {
            schoolId,
            bookingDate: {
              gte: today,
              lt: tomorrow,
            },
            deletedAt: null,
          },
        }),
        // Pending bookings count
        this.prisma.booking.count({
          where: {
            schoolId,
            status: 'PENDING',
            deletedAt: null,
          },
        }),
        // Total revenue sum
        this.prisma.booking.aggregate({
          where: {
            schoolId,
            status: 'COMPLETED',
            deletedAt: null,
          },
          _sum: {
            totalAmount: true,
          },
        }),
        // Active customers count (users with role USER and status ACTIVE)
        this.prisma.user.count({
          where: {
            schoolId,
            role: 'USER',
            status: 'ACTIVE',
            deletedAt: null,
          },
        }),
      ]);

    return {
      todayBookings,
      pendingBookings,
      totalRevenue: totalRevenue._sum.totalAmount || 0,
      activeCustomers,
    };
  }
}
