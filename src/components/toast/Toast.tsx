function Toast({
  id,
  message,
  color,
  closeToast,
}: {
  id: number;
  message: string;
  color: string;
  closeToast: Function;
}) {
  const handleCloseBtn = () => {
    closeToast(id);
  };

  return (
    <div className="toast" style={{ backgroundColor: color }}>
      {message}{" "}
      <span onClick={handleCloseBtn} style={{ cursor: "pointer" }}>
        X
      </span>
    </div>
  );
}
export default Toast;
