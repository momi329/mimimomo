"use client";

import Display from "@/components/editor/display";
import Editor from "@/components/editor/editor";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Data } from "@/types/editor.type";
import { useEditorLogic } from "./useEditorLogic";

type InterviewEditorProps = {
  defaultData: Data[];
};

const InterviewEditor = ({ defaultData }: InterviewEditorProps) => {
  const {
    editorRef,
    dataList,
    editing,
    destinationIndex,
    handleChange,
    handleClick,
    handleDragStart,
    handleDragEnd,
    handleDrop,
    handleDragOver,
    handleItemDragEnd,
    handleItemDragStart,
  } = useEditorLogic(defaultData);

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
            draggable
            onDragStart={handleItemDragStart(index)}
            onDragEnd={handleItemDragEnd}
            onDrop={(e) => handleDrop(index)(e)}
            onDragOver={(e) => handleDragOver(index)(e)}
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
