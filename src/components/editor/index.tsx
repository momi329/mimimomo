"use client";

import Display from "@/components/editor/display";
import Editor from "@/components/editor/editor";
import { Button } from "@/components/ui/button";
import { Data } from "@/types/editor.type";
import { useState } from "react";

type InterviewEditorProps = {
  defaultData: Data[];
};

const InterviewEditor = ({ defaultData }: InterviewEditorProps) => {
  const [dataList, setDataList] = useState<Data[]>(defaultData);
  const [editing, setEditing] = useState<number | null>(null);

  const handleClick = (index: number) => {
    setEditing(index);
  };

  return (
    <div className="flex h-screen">
      <div className="w-1/3 border-r border-g ray-200 flex flex-col gap-4 p-4">
        {editing === null ? (
          <>
            <Button className="w-20">圖片</Button>
            <Button className="w-20">文字</Button>
          </>
        ) : (
          <Editor data={dataList[editing]} />
        )}
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

export default InterviewEditor;
