export const Button = ({ children, styles }) => {
  return (
    <button className={`w-[216px] h-[38px]  bg-[#BA9D53] text-white ${styles}`}>
      <p className="font-sulphur">{children}</p>
    </button>
  );
};
