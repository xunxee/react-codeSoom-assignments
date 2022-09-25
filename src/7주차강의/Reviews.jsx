export default function Reviews({ reviews }) {
  if (!reviews || !reviews.length) {
    return null;
  }

  return (
    <div>
      {reviews.map((review) => (
        <div key={review.id}>
          {review.name}
          |
          {review.description}
        </div>
      ))}
    </div>
  );
}
