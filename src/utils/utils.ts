export function dateValidation(date: string) {
  const currDate = new Date().getTime();
  const UTCdelivery = new Date().getTimezoneOffset() * 60000;
  const deliveryDate = new Date(date).getTime() + UTCdelivery;
  const maxDeliveryDate = currDate + UTCdelivery + 518400000;

  return currDate < deliveryDate && deliveryDate < maxDeliveryDate;
}
