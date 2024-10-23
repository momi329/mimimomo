export type Data = ImageData | TextData;

export type ImageData = {
  id: string;
  type: "image";
  src?: string;
  width?: number;
  height?: number;
};

export type TextData = {
  id: string;
  type: "text";
  text?: string;
};

export type Editable<T extends Data> = Omit<T, "id" | "type">;
