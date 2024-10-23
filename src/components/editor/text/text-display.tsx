import type { TextData } from "../../../types/editor.type";

type TextDisplayProps = TextData & {
  onClick: () => void;
};

const TextDisplay = ({ text, onClick }: TextDisplayProps) => {
  return <div onClick={onClick}>{text}</div>;
};

export default TextDisplay;
