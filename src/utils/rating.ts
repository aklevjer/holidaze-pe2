export const getRatingStars = (rating: number) => {
  const totalStars = 5;
  const solidStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

  const stars = [];

  for (let i = 0; i < solidStars; i++) {
    stars.push("solid");
  }

  if (hasHalfStar) {
    stars.push("half");
  }

  const remainingStars = totalStars - stars.length;

  for (let i = 0; i < remainingStars; i++) {
    stars.push("empty");
  }

  return stars;
};
