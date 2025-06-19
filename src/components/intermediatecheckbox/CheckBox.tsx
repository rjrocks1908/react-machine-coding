import { useEffect, useRef } from "react";
import { STATUS } from "./constants";

interface Props {
  id: string;
  label: string;
  status: string;
  handleChange: (targetId: string) => void;
}

function CheckBox({ id, label, status, handleChange }: Props) {
  const checkboxRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (checkboxRef.current) {
      checkboxRef.current.indeterminate = status === STATUS.INDETERMINATE;
    }
  }, [status]);

  return (
    <div>
      <input
        ref={checkboxRef}
        type="checkbox"
        onChange={() => handleChange(id)}
        checked={status === STATUS.CHECKED}
      />
      <label className="ml-3">{label}</label>
    </div>
  );
}
export default CheckBox;
