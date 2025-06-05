import { useEffect, useState } from "react";
import "../styles/infinitescroll.css";
import InfiniteScroll from "../components/infinitescroll/InfiniteScroll";

export interface Post {
  id: string;
  author: string;
  width: number;
  height: number;
  url: string;
  download_url: string;
}

function InfiniteScrollPage() {
  const [data, setData] = useState<Post[]>([]);
  const [page, setPage] = useState(0);

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(
          `https://picsum.photos/v2/list?page=${page}&limit=3`
        );
        const data = (await response.json()) as Post[];
        setData((prev) => [...prev, ...data]);
      } catch (error) {
        alert(`Error: ${error}`);
      }
    })();
  }, [page]);

  return (
    <div className="container">
      <InfiniteScroll data={data} setPage={setPage} />
    </div>
  );
}
export default InfiniteScrollPage;
