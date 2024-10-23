import { Data } from "@/types/editor.type";

export const DEFAULT_IMAGE_URL =
  "https://i.pinimg.com/enabled_hi/564x/6e/6f/f6/6e6ff6214eccb3999827f39382f83712.jpg";

export const EDITOR_DATA: Data[] = [
  {
    id: "image-1",
    type: "image",
    src: DEFAULT_IMAGE_URL,
  },
  { id: "text-1", type: "text", text: "wellll" },
];
