function Card({
  id,
  title,
  thumbnail,
}: {
  id: number;
  title: string;
  thumbnail: string;
}) {
  return (
    <div id={id.toString()} className="card"> 
      <img src={thumbnail} alt="" />
      <h1>{title}</h1>
    </div>
  );
}
export default Card;
