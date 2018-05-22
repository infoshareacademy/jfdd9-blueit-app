export const isDateInRange =
  (dateToCompare, startDate, endDate) =>
    dateToCompare >= startDate && dateToCompare <= endDate

export const areRangesOverlaping =
  (dateAStart, dateAEnd, dateBStart, dateBEnd) =>
    isDateInRange(dateAStart, dateBStart, dateBEnd) || isDateInRange(dateAEnd, dateBStart, dateBEnd)