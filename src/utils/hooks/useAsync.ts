import { useEffect } from "react";

export function useAsync(asyncFn: Function, onSuccess: Function) {
  useEffect(() => {
    let isActive = true;
    asyncFn().then((data: any) => {
      if (isActive) onSuccess(data);
    });
    return () => { isActive = false };
  }, [asyncFn, onSuccess]);
}
