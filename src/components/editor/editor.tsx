import { Data } from "@/types/editor.type";
import ImageEditor from "./image/image-editor";
import TextEditor from "./text/text-editor";

type EditorProps = {
  data: Data;
  onChange: (data: Data) => void;
};

const Editor = ({ data, onChange }: EditorProps) => {
  switch (data.type) {
    case "image":
      return <ImageEditor {...data} onChange={onChange} />;
    case "text":
      return <TextEditor {...data} onChange={onChange} />;
  }
};

export default Editor;
