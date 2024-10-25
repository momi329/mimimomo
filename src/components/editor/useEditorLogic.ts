import { useState, useEffect, useRef } from "react";
import { Data } from "@/types/editor.type";
import { DEFAULT_IMAGE_DATA, DEFAULT_TEXT_DATA } from "@/data/editor-data";

const createNewData = (type: Data["type"]) => {
  const id = `${type}-${Date.now()}`;
  if (type === "image") return { id, ...DEFAULT_IMAGE_DATA };
  if (type === "text") return { id, ...DEFAULT_TEXT_DATA };
  return null;
};

export const useEditorLogic = (defaultData: Data[]) => {
  const editorRef = useRef<HTMLDivElement>(null);

  const [dataList, setDataList] = useState<Data[]>(defaultData);
  const [editing, setEditing] = useState<number | null>(null);
  const [dataType, setDataType] = useState<Data["type"] | null>(null);
  const [destinationIndex, setDestinationIndex] = useState<number | null>(null);
  const [draggedItemIndex, setDraggedItemIndex] = useState<number | null>(null);

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

  const handleDrop = (index: number) => (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (dataType === null) return;
    setDataList((prev) => {
      const isLastElement = index === prev.length;
      if (isLastElement) {
        return [...prev, createNewData(dataType)!];
      } else {
        const dataBefore = prev.slice(0, index);
        const dataAfter = prev.slice(index);
        return [...dataBefore, createNewData(dataType)!, ...dataAfter];
      }
    });
  };

  const handleDragOver = (index: number) => (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setDestinationIndex(index);
  };

  const handleItemDragEnd = () => {
    if (
      draggedItemIndex !== null &&
      destinationIndex !== null &&
      draggedItemIndex !== destinationIndex
    ) {
      setDataList((prev) => {
        const newDataList = [...prev];
        const [draggedItem] = newDataList.splice(draggedItemIndex, 1);
        newDataList.splice(destinationIndex, 0, draggedItem);
        return newDataList;
      });
    }
    setDraggedItemIndex(null);
    setDestinationIndex(null);
  };

  const handleItemDragStart = (index: number) => () => {
    setDraggedItemIndex(index);
  };

  return {
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
  };
};
