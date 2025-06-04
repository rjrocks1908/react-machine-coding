import { useEffect, useState } from "react";
import "../styles/carousel.css";
import Carousel from "../components/carousel/Carousel";

export interface Image {
  id: string;
  author: string;
  width: number;
  height: number;
  url: string;
  download_url: string;
}

function CarouselPage() {
  const [images, setImages] = useState<Image[]>([]);

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch("https://picsum.photos/v2/list");
        const data = (await response.json()) as Image[];
        console.log(data);
        setImages(data);
      } catch (error) {
        alert(`Error getting images ${error}`);
      }
    })();
  }, []);

  return (
    <div className="container">{images.length > 0 && <Carousel images={images} />}</div>
  );
}
export default CarouselPage;
