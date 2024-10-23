"use client";

import Display from "@/components/editor/display";
import Editor from "@/components/editor/editor";
import { Button } from "@/components/ui/button";
import { Data } from "@/types/editor.type";
import { useEffect, useRef, useState } from "react";

type InterviewEditorProps = {
  defaultData: Data[];
};

const InterviewEditor = ({ defaultData }: InterviewEditorProps) => {
  const editorRef = useRef<HTMLDivElement>(null);

  const [dataList, setDataList] = useState<Data[]>(defaultData);
  const [editing, setEditing] = useState<number | null>(null);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (editorRef.current?.contains(e.target as Node)) return;
      if (editing === null) return;
      setEditing(null);
    };

    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [editing]);

  const handleChange = (data: Data) => {
    setDataList((prev) => {
      if (editing === null) return prev;
      const newDataList = [...prev];
      newDataList[editing] = data;
      return newDataList;
    });
  };

  const handleClick = (index: number) => {
    setEditing(index);
  };

  return (
    <div className="flex h-screen">
      <div
        className="bg-slate-100 w-1/3 border-r border-g ray-200 flex flex-col gap-4 p-4"
        onClick={(e) => {
          console.log("clicked");
          e.stopPropagation();
        }}
      >
        {editing === null ? (
          <>
            <Button className="w-20">圖片</Button>
            <Button className="w-20">文字</Button>
          </>
        ) : (
          <div ref={editorRef} className="grid gap-4">
            <Editor data={dataList[editing]} onChange={handleChange} />
          </div>
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
