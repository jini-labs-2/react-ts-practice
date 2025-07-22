import { useEffect, useId, useRef, useState } from "react";

export function useGeneratedIds(count: number): string[] {
  const [ids, setIds] = useState<string[]>([]);

  // ✅ `useId`를 최상위에서 호출하여 ID를 생성
  const newId = useId();

  if (ids.length < count) {
    setIds((prevIds) => [...prevIds, newId]);
  }

  return ids;
}
