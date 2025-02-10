/**
 * Debounces a function by delaying the calling of the provided function.
 *
 * @param func - The function to be debounced.
 * @param [timeout = 300] - The time in milliseconds to wait before calling the provided function (defaults to 300ms).
 *
 * @returns A debounced version of the provided function.
 */
export const debounce = <Args extends unknown[]>(func: (...args: Args) => void, timeout = 300) => {
  let timer: ReturnType<typeof setTimeout>;

  return (...args: Args) => {
    clearTimeout(timer);
    timer = setTimeout(() => func(...args), timeout);
  };
};
