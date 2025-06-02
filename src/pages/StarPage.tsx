import { useEffect, useState } from "react";
import Star from "../components/star/Star";
import "../styles/star.css";

interface StarInterface {
  id: number;
  isFilled: boolean;
}

function StarPage({ starCount = 10 }: { starCount?: number }) {
  const [stars, setstars] = useState<StarInterface[]>([]);
  const [selectedStar, setSelectedStar] = useState<number>(-1);

  const createStars = () => {
    const newStars: StarInterface[] = Array.from(
      { length: starCount },
      (_, idx) => ({
        id: idx,
        isFilled: false,
      })
    );
    setstars((_) => newStars);
  };

  useEffect(() => {
    createStars();
  }, []);

  const onHoverLeave = () => {
    setstars((prev) => prev.map((star) => ({ ...star, isFilled: false })));
    if (selectedStar !== -1) handleHover(selectedStar);
  };

  const handleHover = (id: number) => {
    const idx = stars.findIndex((star) => star.id === id);

    setstars((prev) => {
      const newStars = [];
      for (let i = 0; i <= idx; i++) {
        newStars.push({
          id: prev[i].id,
          isFilled: true,
        });
      }
      for (let i = idx + 1; i < starCount; i++) {
        newStars.push({
          id: prev[i].id,
          isFilled: false,
        });
      }

      return newStars;
    });
  };

  const onStarClicked = (id: number) => {
    setSelectedStar(id);
    handleHover(id);
  };

  return (
    <div className="container">
      {stars.map((star) => (
        <Star
          key={star.id}
          id={star.id}
          isFilled={star.isFilled}
          onMouseEnter={handleHover}
          onMouseLeave={onHoverLeave}
          onClick={onStarClicked}
        />
      ))}
    </div>
  );
}

export default StarPage;
