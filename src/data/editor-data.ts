import { Data } from "@/types/editor.type";

export const DEFAULT_IMAGE_URL =
  "https://i.pinimg.com/enabled_hi/564x/6e/6f/f6/6e6ff6214eccb3999827f39382f83712.jpg";

export const DEFAULT_IMAGE_DATA = {
  type: "image",
  src: DEFAULT_IMAGE_URL,
  width: "200px",
  height: "200px",
} as const;

export const DEFAULT_TEXT_DATA = {
  type: "text",
  text: "Hello World",
} as const;

export const EDITOR_DATA: Data[] = [
  { id: "image-1", ...DEFAULT_IMAGE_DATA },
  { id: "text-1", ...DEFAULT_TEXT_DATA },
];
