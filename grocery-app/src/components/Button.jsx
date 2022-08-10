const Button = ({ color, text, onClick }) => {
  return (
    <button
      onClick={onClick}
      style={{ backgroundColor: color }}
      className="btn bg-zinc-900 text-zinc-50 border rounded-md border-none	cursor-pointer inline-block	text-sm m-1 py-3 px-5 no-underline focus:text-zinc-50 focus:outline-none"
    >
      {text}
    </button>
  );
};

export default Button;
