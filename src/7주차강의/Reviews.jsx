import React from 'react';

function Reviews({ reviews }) {
  if (!reviews || !reviews.length) {
    return null;
  }

  return (
    <div>
      {reviews.map((review) => (
        <li key={review.id}>
          <div>
            {review.name}
          </div>
          <div>
            {review.score}
            점
          </div>
          <div>
            {review.description}
          </div>
        </li>
      ))}
    </div>
  );
}

export default React.memo(Reviews);
