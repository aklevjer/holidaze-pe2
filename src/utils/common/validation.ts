/**
 * Asynchronously validates an image URL by attempting to load the image.
 *
 * @param imgUrl - The URL of the image to be validated.
 * @returns A promise that resolves to `true` if the URL points to a valid image, or `false` if the image cannot be loaded.
 */
export const isImgUrlValid = (imgUrl: string): Promise<boolean> => {
  return new Promise((resolve) => {
    const img = new Image();

    img.onerror = () => resolve(false);
    img.onload = () => resolve(true);

    img.src = imgUrl;
  });
};
