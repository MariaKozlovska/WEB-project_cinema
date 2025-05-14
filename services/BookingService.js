export class BookingService {
  static getBookings(movieId) {
    const bookingsJson = localStorage.getItem(`bookings_${movieId}`);
    return bookingsJson ? JSON.parse(bookingsJson) : [];
  }

  static saveBooking(movieId, seats) {
    const currentBookings = this.getBookings(movieId);
    const newBookings = [...currentBookings, ...seats];
    localStorage.setItem(`bookings_${movieId}`, JSON.stringify(newBookings));
    return newBookings;
  }
}