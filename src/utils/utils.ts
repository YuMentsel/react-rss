export function dateValidation(date: string) {
  const currDate = new Date().getTime();
  const UTC = new Date().getTimezoneOffset() * 60000;
  const deliveryDate = new Date(date).getTime() + UTC;
  const maxDeliveryDate = currDate + 518400000;

  return currDate < deliveryDate && deliveryDate < maxDeliveryDate;
}
