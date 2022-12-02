export function convertWageToDollar(wagePerHourInCents: number) {
  const wageInDollar = (wagePerHourInCents / 100).toFixed(2);
  return wageInDollar;
}
