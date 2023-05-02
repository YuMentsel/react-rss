export function dateValidation(date: string) {
  const currDate = new Date().getTime();
  const UTC = new Date().getTimezoneOffset() * 60000;
  const deliveryDate = new Date(date).getTime() + UTC;
  const maxDeliveryDate = currDate + 518400000;

  return currDate < deliveryDate && deliveryDate < maxDeliveryDate;
}

export function getValidDate() {
  const date = new Date();
  date.setDate(date.getDate() + 3);
  return date.toISOString().slice(0, 10);
}
