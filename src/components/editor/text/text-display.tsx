import type { TextData } from "../../../types/editor.type";

type TextDisplayProps = TextData & {
  onClick: () => void;
};

const TextDisplay = ({ text, onClick }: TextDisplayProps) => {
  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    onClick();
  };

  return <div onClick={handleClick}>{text}</div>;
};

export default TextDisplay;
