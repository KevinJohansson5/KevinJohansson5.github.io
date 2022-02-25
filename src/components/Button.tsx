const Button = ({ text, func }: { text: string; func: () => void }) => {
  return <button onClick={func}>{text}</button>;
};

export default Button;
