import { Router } from 'express';
import { authenticateToken, validateBody } from '@/middlewares';
import { createBooking, getBookingByUserId, updateBooking } from '@/controllers/booking-controller';
import { inputBookingSchema } from '@/schemas/booking-schemas';

const bookingRouter = Router();

bookingRouter.use(authenticateToken);
bookingRouter.get('/', getBookingByUserId);
bookingRouter.post('/', validateBody(inputBookingSchema), createBooking);
bookingRouter.put('/:bookingId', validateBody(inputBookingSchema), updateBooking);

export { bookingRouter };