export default function Reviews({ reviews }) {
  if (!reviews || !reviews.length) {
    return null;
  }

  const sortedReviews = [...reviews].sort((a, b) => b.id - a.id);

  return (
    <div>
      {sortedReviews.map((review) => (
        <div key={review.id}>
          {review.name}
          |
          {review.description}
        </div>
      ))}
    </div>
  );
}
