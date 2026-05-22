interface ButtonProps {
  title: string; 
  variant: string; 
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ title, variant, onClick }) => {
  const baseStyle = "py-2 px-4 rounded transition-transform active:scale-105";

  const primary = `${baseStyle} bg-red-500 text-white hover:bg-red-700`;
  const secondary = `${baseStyle} bg-gray-300 text-black hover:bg-gray-500`;
  const danger = `${baseStyle} bg-yellow-500 text-black hover:bg-yellow-700`;

  let style = baseStyle;
  if (variant === "primary") style = primary;
  else if (variant === "secondary") style = secondary;
  else if (variant === "danger") style = danger;

  return (
    <button onClick={onClick} className={style}>
      {title}
    </button>
  );
};

export default Button;
