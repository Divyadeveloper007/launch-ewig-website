// components/DropdownMenu.jsx
const DropdownMenu = ({ items, onItemClick }) => {
  return (
    <ul className="absolute top-full mt-0 left-0 w-48 bg-white text-[#0A9642] rounded-lg shadow-lg py-2 z-50">
      {items.map((item, idx) => (
        <li key={idx}>
          <button
            onClick={() => onItemClick(item)}
            className="block w-full text-left px-4 py-2 hover:bg-gray-100"
          >
            {item.label}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default DropdownMenu;
