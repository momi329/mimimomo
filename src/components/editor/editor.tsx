import { Data } from "@/types/editor.type";
import ImageEditor from "./image/image-editor";
import TextEditor from "./text/text-editor";

type EditorProps = {
  data: Data;
};

const Editor = ({ data }: EditorProps) => {
  switch (data.type) {
    case "image":
      return <ImageEditor {...data} />;
    case "text":
      return <TextEditor {...data} />;
  }
};

export default Editor;
