"use client";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import Display from "../../components/editor/display";
import { Data } from "../../types/editor.type";

export const IMAGE_URL =
  "https://i.pinimg.com/enabled_hi/564x/6e/6f/f6/6e6ff6214eccb3999827f39382f83712.jpg";

const EditorPage = () => {
  const [dataList, setDataList] = useState<Data[]>([
    { id: "image-1", type: "image", src: IMAGE_URL },
    { id: "text-1", type: "text", text: "wellll" },
  ]);
  const [editing, setEditing] = useState<number | null>(null);

  const handleClick = (index: number) => {
    setEditing(index);
  };

  return (
    <div className="flex h-screen">
      <div className="w-1/3 border-r border-g ray-200 flex flex-col gap-4 p-4">
        {!editing && (
          <>
            <Button className="w-20">圖片</Button>
            <Button className="w-20">文字</Button>
          </>
        )}
        {/* {editType && <Editor />} */}
      </div>
      <div className="w-2/3">
        {dataList.map((item, index) => (
          <Display
            key={item.id}
            data={item}
            onClick={() => handleClick(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default EditorPage;

const Editor = () => {
  return <div>Editor</div>;
};
