export default function MenuItem({ item, selectedRoute }) {
  return (
    <div
      key={item.id}
      className={`menu-item ${selectedRoute === item.route && "selected"}`}
    >
      <img
        src={selectedRoute === item.route ? item.selectedIcon : item.icon}
        alt={item.label}
        height={item.height}
        width={item.width}
      />
      <div>{item.label}</div>
    </div>
  );
}
