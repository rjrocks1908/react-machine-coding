function CardButton({
  title,
  backgroundColor,
  navigate,
}: {
  title: string;
  backgroundColor?: string;
  navigate: Function;
}) {
  return (
    <div
      className="btn"
      onClick={() => navigate()}
      style={{
        backgroundColor: backgroundColor ? backgroundColor : "rgb(49, 48, 48)",
      }}
    >
      {title}
    </div>
  );
}
export default CardButton;
