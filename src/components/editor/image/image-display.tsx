"use client";

import Image from "next/image";
import { IMAGE_URL } from "../../../app/editor/page";
import type { ImageData } from "../../../types/editor.type";

type ImageDisplayProps = ImageData & {
  onClick: () => void;
};

const ImageDisplay = ({
  src = IMAGE_URL,
  width = 200,
  height = 200,
  onClick,
}: ImageDisplayProps) => {
  return (
    <Image
      src={src}
      alt="image"
      width={width}
      height={height}
      onClick={onClick}
    />
  );
};

export default ImageDisplay;
