import type { Data } from "../../types/editor.type";
import DisplayImage from "./image/image-display";
import DisplayText from "./text/text-display";

type DisplayProps = {
  data: Data;
  onClick: () => void;
};

const Display = ({ data, onClick }: DisplayProps) => {
  switch (data.type) {
    case "image":
      return <DisplayImage {...data} onClick={onClick} />;
    case "text":
      return <DisplayText {...data} onClick={onClick} />;
  }
};

export default Display;
