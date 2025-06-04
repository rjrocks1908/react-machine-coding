import { useEffect, useState } from "react";
import type { Image } from "../../pages/CarouselPage";

function Carousel({ images }: { images: Image[] }) {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="carousel-container">
      <button
        className="btn left"
        onClick={() =>
          setCurrentImage((prev) =>
            prev - 1 === -1 ? images.length - 1 : prev - 1
          )
        }
      >
        {"<"}
      </button>
      <img src={images[currentImage].download_url} className="carousel-image" />
      <button
        className="btn right"
        onClick={() => setCurrentImage((prev) => (prev + 1) % images.length)}
      >
        {">"}
      </button>
    </div>
  );
}
export default Carousel;
