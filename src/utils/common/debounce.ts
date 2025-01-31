export const debounce = <Args extends unknown[]>(func: (...args: Args) => void, timeout = 300) => {
  let timer: ReturnType<typeof setTimeout>;

  return (...args: Args) => {
    clearTimeout(timer);
    timer = setTimeout(() => func(...args), timeout);
  };
};
