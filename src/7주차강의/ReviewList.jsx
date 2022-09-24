export default function ReviewList({ restaurant }) {
  const { reviews } = restaurant;

  return (
    <>
      <h2>리뷰</h2>
      <ul>
        {reviews.reverse().map(({
          id, name, score, description,
        }) => (
          <li key={id}>
            {name}
            <div>{score}</div>
            <div>{description}</div>
          </li>
        ))}
      </ul>
    </>
  );
}
