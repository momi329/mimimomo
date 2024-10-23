"use client";

import Display from "@/components/editor/display";
import Editor from "@/components/editor/editor";
import { Button } from "@/components/ui/button";
import { DEFAULT_IMAGE_DATA, DEFAULT_TEXT_DATA } from "@/data/editor-data";
import { cn } from "@/lib/utils";
import { Data } from "@/types/editor.type";
import { useEffect, useRef, useState } from "react";

const createNewData = (type: Data["type"]) => {
  const id = `${type}-${Date.now()}`;
  if (type === "image") return { id, ...DEFAULT_IMAGE_DATA };
  if (type === "text") return { id, ...DEFAULT_TEXT_DATA };
  return null;
};

type InterviewEditorProps = {
  defaultData: Data[];
};

const InterviewEditor = ({ defaultData }: InterviewEditorProps) => {
  const editorRef = useRef<HTMLDivElement>(null);

  const [dataList, setDataList] = useState<Data[]>(defaultData);
  const [editing, setEditing] = useState<number | null>(null);

  const [dataType, setDataType] = useState<Data["type"] | null>(null);
  const [destinationIndex, setDestinationIndex] = useState<number | null>(null);

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

  const handleDragStart = (type: Data["type"]) => () => {
    setDataType(type);
  };

  const handleDragEnd = (e: React.DragEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setDataType(null);
    setDestinationIndex(null);
  };

  const handleDrop =
    (index: number) => (e: React.DragEvent<HTMLDivElement>) => {
      e.preventDefault();
      if (dataType === null) return;
      setDataList((prev) => {
        const dataBefore = prev.slice(0, index);
        const dataAfter = prev.slice(index);
        const newDataList = [
          ...dataBefore,
          createNewData(dataType)!,
          ...dataAfter,
        ];
        console.log(newDataList);
        return newDataList;
      });
    };

  const handleDragOver =
    (index: number) => (e: React.DragEvent<HTMLDivElement>) => {
      e.preventDefault();
      setDestinationIndex(index);
    };

  return (
    <div className="flex h-screen">
      <div className="bg-slate-100 w-1/3 border-r border-g ray-200 flex flex-col gap-4 p-4">
        {editing === null ? (
          <>
            <Button
              className="w-20"
              draggable
              onDragStart={handleDragStart("image")}
              onDragEnd={handleDragEnd}
            >
              圖片
            </Button>
            <Button
              className="w-20"
              draggable
              onDragStart={handleDragStart("text")}
              onDragEnd={handleDragEnd}
            >
              文字
            </Button>
          </>
        ) : (
          <div ref={editorRef} className="grid gap-4">
            <Editor data={dataList[editing]} onChange={handleChange} />
          </div>
        )}
      </div>
      <div className="w-2/3 flex flex-col gap-1">
        {dataList.map((item, index) => (
          <div
            key={item.id}
            onDrop={handleDrop(index)}
            onDragOver={handleDragOver(index)}
            className={cn(destinationIndex === index && "bg-slate-200")}
          >
            <Display data={item} onClick={() => handleClick(index)} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default InterviewEditor;
