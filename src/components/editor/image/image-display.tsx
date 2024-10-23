"use client";

import { DEFAULT_IMAGE_URL } from "@/data/editor-data";
import type { ImageData } from "@/types/editor.type";
import Image from "next/image";

type ImageDisplayProps = ImageData & {
  onClick: () => void;
};

const ImageDisplay = ({
  src = DEFAULT_IMAGE_URL,
  width = "200px",
  height = "200px",
  onClick,
}: ImageDisplayProps) => {
  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    onClick();
  };

  return (
    <div className="relative overflow-hidden" style={{ width, height }}>
      <Image
        src={src}
        alt="image"
        fill
        onClick={handleClick}
        priority
        className="object-cover"
      />
    </div>
  );
};

export default ImageDisplay;
