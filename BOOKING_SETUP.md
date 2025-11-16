# Booking Module Setup Instructions

## 1. Generate Prisma Migration

After adding the booking table to the schema, you need to create and run the migration:

```bash
# Navigate to the API directory
cd "E:\office work\idrive_api"

# Create a new migration
npx prisma migrate dev --name add_booking_table

# This will:
# 1. Create a new migration file in prisma/migrations/
# 2. Apply the migration to your database
# 3. Generate the updated Prisma client with booking types
```

## 2. Update Booking Service (After Migration)

Once the migration is complete and Prisma client is regenerated, update the booking service:

```typescript
// booking.service.ts - Replace the placeholder with this:

import { Injectable } from '@nestjs/common';
import { CreateBookingInput } from './dto/create-booking.input';
import { UpdateBookingInput } from './dto/update-booking.input';
import { WhereBookingSearchInput } from './dto/search-booking.input';
import { BaseService } from 'src/base/base.service';
import { PrismaService } from 'prisma/prisma.service';
import { booking, PrismaClient } from '@prisma/client';
import { Booking } from './entities/booking.entity';

@Injectable()
export class BookingService extends BaseService<
  booking,
  typeof CreateBookingInput,
  typeof UpdateBookingInput,
  typeof WhereBookingSearchInput,
  any,
  PrismaClient['booking']
> {
  constructor(private readonly prisma: PrismaService) {
    super('Booking', prisma.booking);
  }

  // Custom implementation methods will be available after migration
}
```

## 3. Update Booking Resolver (After Migration)

```typescript
// booking.resolver.ts - Add the complete base resolver:

import { Resolver, ObjectType } from '@nestjs/graphql';
import { BookingService } from './booking.service';
import { Booking } from './entities/booking.entity';
import { CreateBookingInput } from './dto/create-booking.input';
import { WhereBookingSearchInput } from './dto/search-booking.input';
import { BasePaginated } from 'src/base/entities/base.pagination.entity';
import { createBaseResolver } from 'src/base/base.resolver';
import { booking, PrismaClient } from '@prisma/client';
import { UpdateBookingInput } from './dto/update-booking.input';

@ObjectType()
export class BookingPagination extends BasePaginated(Booking) {}

const BaseBookingResolver = createBaseResolver<
  typeof Booking,
  booking,
  typeof CreateBookingInput,
  typeof UpdateBookingInput,
  typeof WhereBookingSearchInput,
  typeof BookingPagination,
  PrismaClient['booking']
>(
  () => Booking,
  'Booking',
  () => CreateBookingInput,
  () => UpdateBookingInput,
  () => WhereBookingSearchInput,
  () => BookingPagination,
);

@Resolver(() => Booking)
export class BookingResolver extends BaseBookingResolver {
  constructor(private readonly bookingService: BookingService) {
    super(bookingService);
  }
}
```

## 4. Frontend API Integration

The frontend booking form is already set up to work with this backend structure. The booking API call should be:

```typescript
// In booking form component
const mutation = useMutation({
  mutationFn: (data: BookingFormData) => {
    return ApiCall({
      query: `mutation CreateBooking($inputType: CreateBookingInput!) {
        createBooking(inputType: $inputType) {
          id
          bookingId
          carName
          slot
          bookingDate
          customerName
          customerMobile
          courseName
          totalAmount
          status
          createdAt
        }
      }`,
      variables: { 
        inputType: {
          schoolId: schoolId,
          bookingId: `BKG-${schoolId}-${Date.now()}`,
          carId: data.carId,
          carName: data.carName,
          slot: data.slot,
          bookingDate: new Date(data.bookingDate),
          customerMobile: data.customerMobile,
          customerName: data.customerName,
          customerEmail: data.customerEmail,
          customerId: customerData?.id,
          courseId: data.courseId,
          courseName: data.courseName,
          coursePrice: data.coursePrice,
          services: data.services,
          selectedServices: data.selectedServices,
          totalAmount: data.totalAmount,
          notes: data.notes,
        }
      },
    });
  },
  // ... rest of mutation config
});
```

## 5. Available GraphQL Operations

After migration, these operations will be available:

### Queries:
- `getAllBooking(whereSearchInput: WhereBookingSearchInput!): [Booking!]!`
- `getBookingById(id: Int!): Booking!`
- `searchBooking(whereSearchInput: WhereBookingSearchInput!): Booking`
- `getPaginatedBooking(searchPaginationInput: SearchPaginationInput!, whereSearchInput: WhereBookingSearchInput!): BookingPagination!`

### Mutations:
- `createBooking(inputType: CreateBookingInput!): Booking!`
- `updateBooking(id: Int!, updateType: UpdateBookingInput!): Booking!`
- `deleteBooking(id: Int!): Booking!`

## 6. Database Schema Features

The booking table includes:
- ✅ Complete booking information (car, slot, date, customer)
- ✅ Course integration
- ✅ Services integration (JSON storage for flexibility)
- ✅ Status tracking (PENDING, CONFIRMED, COMPLETED, CANCELLED, NO_SHOW)
- ✅ Soft deletes
- ✅ Proper indexes for performance
- ✅ Relations to school and user tables
- ✅ Confirmation number support
- ✅ Notes field for additional information

Run the migration command above to complete the setup!