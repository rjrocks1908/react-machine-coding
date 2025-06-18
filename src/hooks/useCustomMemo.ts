import { useRef } from "react";

export function useCustomMemo(cb: Function, dependencyArr: any) {
  const ref = useRef({
    memoizedValue: undefined,
    lastDependency: undefined,
  });

  if (!areDepEqual(ref.current.lastDependency, dependencyArr)) {
    ref.current.memoizedValue = cb();
    ref.current.lastDependency = dependencyArr;
  }

  return ref.current.memoizedValue;
}

function areDepEqual(prev: any, curr: any) {
  if (!prev || !curr || prev.length != curr.length) {
    return false;
  }

  for (let i = 0; i < prev.length; i++) {
    if (prev[i] != curr[i]) {
      return false;
    }
  }

  return true;
}
