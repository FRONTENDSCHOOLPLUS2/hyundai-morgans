export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  bgColor?: 'gray' | 'black' | 'red';
  size?: 'sm' | 'md' | 'lg' | 'medium';
}

// button.mainBtn {
//   background: transparent;
//   border-color: #fff;
//   color: #fff;
//   width: 240px;
//   height: 60px;
//   font: 500 20px/1 'Hyundai Sans Head Office';
// }

const Button: React.FC<ButtonProps> = ({
  children,
  type = 'button',
  bgColor = 'black',
  size = 'lg',
  ...rest // 남어지
}) => {
  let btnColor = {
    gray: `bg-gray-900`,
    black: 'bg-black',
    red: 'bg-red-500',
  };
  let btnSize = {
    sm: 'py-1 px-2 text-sm',
    md: 'py-1 px-4 text-base',
    lg: 'py-2 px-6 text-lg',
    medium: 'w-14 h-8 text-sm font-light',
  };

  return (
    <button
      type={type}
      className={`${btnColor[bgColor]} ${btnSize[size]} text-white font-semibold ml-2 text-base`}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
