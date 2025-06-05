import { useEffect, useRef } from "react";
import type { Post } from "../../pages/InfiniteScrollPage";

interface Props {
  data: Post[];
  setPage: Function;
}

function InfiniteScroll({ data, setPage }: Props) {
  const lastImage = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (lastImage.current) observer.unobserve(lastImage.current);
          setPage((prev: number) => prev + 1);
        }
      });
    });

    if (!lastImage.current) {
      return;
    }

    observer.observe(lastImage.current);
  }, [data]);

  return (
    <div className="image-container">
      {data &&
        data.map((post, index) => (
          <img
            ref={index === data.length - 1 ? lastImage : null}
            src={post.download_url}
            key={post.id}
          />
        ))}
    </div>
  );
}
export default InfiniteScroll;
