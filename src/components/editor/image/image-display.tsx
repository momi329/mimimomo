"use client";

import { DEFAULT_IMAGE_URL } from "@/data/editor-data";
import type { ImageData } from "@/types/editor.type";
import Image from "next/image";

type ImageDisplayProps = ImageData & {
  onClick: () => void;
};

const ImageDisplay = ({
  src = DEFAULT_IMAGE_URL,
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
