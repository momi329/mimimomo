import { Input } from "@/components/ui/input";
import { TextData } from "@/types/editor.type";

type TextEditorProps = TextData & {
  onChange: (data: TextData) => void;
};

const TextEditor = ({ onChange, ...props }: TextEditorProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange({ ...props, [e.target.name]: e.target.value });
  };

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <Input
      name="text"
      type="text"
      value={props.text}
      onClick={handleClick}
      onChange={handleChange}
    />
  );
};

export default TextEditor;
