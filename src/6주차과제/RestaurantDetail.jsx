function MenuItems({ menuItems }) {
  if (!menuItems || menuItems.length === 0) {
    return (<p>메뉴가 없어요!</p>);
  }

  return (
    <ul>
      {menuItems.map((menuItem) => (
        <li key={menuItem.id}>
          {menuItem.name}
        </li>
      ))}
    </ul>
  );
}

export default function RestaurantDetail({ restaurant }) {
  const { name, address, menuItems } = restaurant;

  return (
    <div>
      <h2>{name}</h2>
      <p>
        주소:
        {' '}
        {address}
      </p>
      <h3>메뉴</h3>
      <MenuItems menuItems={menuItems} />
    </div>
  );
}
