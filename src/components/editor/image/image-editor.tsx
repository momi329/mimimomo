import { Input } from "@/components/ui/input";
import type { ImageData } from "@/types/editor.type";

type ImageEditorProps = ImageData & {
  onChange: (data: ImageData) => void;
};

const ImageEditor = ({ onChange, ...props }: ImageEditorProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange({ ...props, [e.target.name]: e.target.value });
  };

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <>
      <Input
        name="src"
        type="url"
        value={props.src}
        onClick={handleClick}
        onChange={handleChange}
        placeholder="圖片網址"
      />
      <Input
        name="width"
        type="text"
        value={props.width}
        onClick={handleClick}
        onChange={handleChange}
        placeholder="寬度"
      />
      <Input
        name="height"
        type="text"
        value={props.height}
        onClick={handleClick}
        onChange={handleChange}
        placeholder="高度"
      />
    </>
  );
};

export default ImageEditor;
