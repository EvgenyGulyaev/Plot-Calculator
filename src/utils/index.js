
export const createArrayFromRange = ([start, end] = []) => {
  const length = Math.abs(end - start) + 1;
  return  Array.from({ length }, (v, k) => k + Math.min(end, start));
}