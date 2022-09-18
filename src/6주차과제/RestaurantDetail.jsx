export default function RestaurantDetail({ restaurant }) {
  return (
    <div>
      <p>{restaurant.name}</p>
      <p>{restaurant.address}</p>
    </div>
  );
}
