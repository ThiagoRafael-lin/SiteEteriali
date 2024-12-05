export const Button = ({ children, styles }) => {
  return (
    <button
      className={`flex items-center justify-center w-[216px] h-[38px]  bg-[#BA9D53] text-white ${styles}`}
    >
      <p className="font-sulphur">{children}</p>
    </button>
  );
};

export const ButtonOutline = ({ children, styles }) => {
  return (
    <button
      className={`flex items-center justify-center w-[216px] h-[38px] border-2 border-[#BA9D53] bg-transparent text-white ${styles}`}
    >
      <p className="font-sulphur">{children}</p>
    </button>
  );
};
