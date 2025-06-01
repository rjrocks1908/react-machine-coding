import { useRef, useState } from "react";
import Toast from "../components/toast/Toast";
import "../styles/toast.css";

const toast = [
  {
    message: "Success Message",
    btnMessage: "Success Toast",
    color: "green",
  },
  {
    message: "Information Message",
    btnMessage: "Info Toast",
    color: "blue",
  },
  {
    message: "Warning Message",
    btnMessage: "Warning Toast",
    color: "#b59f3b",
  },
  {
    message: "Error Message",
    btnMessage: "Error Toast",
    color: "red",
  },
];

interface Toast {
  id: number;
  message: string;
  color: string;
}

function ToastNotification() {
  const [toasts, setToasts] = useState<Toast[]>([]);
  const timerRef = useRef<{ [key: number]: ReturnType<typeof setTimeout> }>({});

  const closeToast = (id: number) => {
    clearTimeout(timerRef.current[id]);
    delete timerRef.current[id];
    setToasts((prev) => {
      const removeToast = prev.filter((toast) => toast.id != id);
      return removeToast;
    });
  };

  const handleToastClick = (message: string, color: string) => {
    const id = new Date().getTime();
    const newToasts = [
      ...toasts,
      {
        id,
        message,
        color,
      },
    ];
    setToasts(newToasts);
    timerRef.current[id] = setTimeout(() => {
      closeToast(id);
    }, 5000);
  };

  return (
    <div className="container">
      <div className="toast-container">
        {toasts.map((toast) => (
          <Toast  
            key={toast.id}
            id={toast.id}
            message={toast.message}
            color={toast.color}
            closeToast={closeToast}
          />
        ))}
      </div>

      <div className="btn-container">
        {toast.map((t) => {
          return (
            <button onClick={() => handleToastClick(t.message, t.color)}>
              {t.btnMessage}
            </button>
          );
        })}
      </div>
    </div>
  );
}
export default ToastNotification;
