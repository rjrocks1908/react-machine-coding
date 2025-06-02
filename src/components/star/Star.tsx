function Star({
  id,
  isFilled,
  onMouseEnter,
  onMouseLeave,
  onClick,
}: {
  id: number;
  isFilled: boolean;
  onMouseEnter: Function;
  onMouseLeave: Function;
  onClick: Function;
}) {
  return (
    <div
      className="star"
      onMouseEnter={() => onMouseEnter(id)}
      onMouseLeave={() => onMouseLeave()}
      onClick={() => onClick(id)}
    >
      <span style={{ color: isFilled ? "yellow" : "" }}>
        {isFilled ? "★" : "☆"}
      </span>
    </div>
  );
}
export default Star;
