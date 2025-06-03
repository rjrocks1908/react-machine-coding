import { useEffect, useState } from "react";
import Card from "../components/pagination/Card";
import CardButton from "../components/pagination/CardButton";
import "../styles/pagination.css";

interface Product {
  id: number;
  title: string;
  thumbnail: string;
}

function PaginationPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [page, setPage] = useState(1);
  const itemsPerPage = 5;
  const [totalPages, setTotalPages] = useState(0);

  const fetchProducts = async () => {
    try {
      const response = await fetch("https://dummyjson.com/products?limit=0");
      const data = await response.json();

      const formatted = data.products.map((product: any) => ({
        id: product.id,
        title: product.title,
        thumbnail: product.thumbnail,
      }));

      setProducts(formatted);
      setTotalPages(Math.ceil(formatted.length / itemsPerPage));
    } catch (error) {
      alert(`Failed to fetch products ${error}`);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  function getVisiblePages(current: number, total: number): number[] {
    const delta = 2;
    const range = [];

    for (
      let i = Math.max(1, current - delta);
      i <= Math.min(total, current + delta);
      i++
    ) {
      range.push(i);
    }

    return range;
  }

  return (
    <div className="container">
      <div className="card-container">
        {products
          .slice((page - 1) * itemsPerPage, page * itemsPerPage)
          .map((product) => (
            <Card
              key={product.id}
              id={product.id}
              title={product.title}
              thumbnail={product.thumbnail}
            />
          ))}
      </div>
      <div className="page-container">
        {page !== 1 && (
          <CardButton title="Prev" navigate={() => setPage(page - 1)} />
        )}

        {totalPages !== 0 &&
          getVisiblePages(page, totalPages).map((p, i) => (
            <CardButton
              key={i}
              title={p.toString()}
              navigate={() => setPage(p)}
              backgroundColor={page === p ? "darkgray" : undefined}
            />
          ))}

        {page !== totalPages && (
          <CardButton title="Next" navigate={() => setPage(page + 1)} />
        )}
      </div>
    </div>
  );
}
export default PaginationPage;
