import { Input } from "@/components/ui/input";
import type { ImageData } from "@/types/editor.type";

type ImageEditorProps = ImageData & {
  onChange: (data: ImageData) => void;
};

const ImageEditor = ({ onChange, ...props }: ImageEditorProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange({ ...props, [e.target.name]: e.target.value });
  };

  console.log(props);

  return (
    <div>
      <Input
        name="src"
        type="url"
        value={props.src}
        onChange={handleChange}
        placeholder="圖片網址"
      />
      <Input
        name="width"
        type="text"
        value={props.width}
        onChange={handleChange}
        placeholder="寬度"
      />
      <Input
        name="height"
        type="text"
        value={props.height}
        onChange={handleChange}
        placeholder="高度"
      />
    </div>
  );
};

export default ImageEditor;
