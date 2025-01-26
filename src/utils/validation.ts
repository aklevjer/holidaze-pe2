export const isImgUrlValid = (imgUrl: string): Promise<boolean> => {
  return new Promise((resolve) => {
    const img = new Image();

    img.onerror = () => resolve(false);
    img.onload = () => resolve(true);

    img.src = imgUrl;
  });
};
