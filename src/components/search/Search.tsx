import { useEffect, useRef, useState } from "react";

const Status = {
  LOADING: "Loading",
  ERROR: "Error",
  SUCCESS: "Success",
};

interface Product {
  id: string;
  title: string;
}

function Search() {
  const [status, setStatus] = useState<string | null>(null);
  const [products, setProducts] = useState<Product[]>([]);
  const [query, setQuery] = useState("");
  const cache = useRef<any>({});
  const timeId = useRef(0);

  const fetchProducts = async () => {
    try {
      setStatus(Status.LOADING);

      if (cache.current[query]) {
        setProducts(cache.current[query]);
        setStatus(Status.SUCCESS);
      }

      const response = await fetch(
        `https://dummyjson.com/products/search?q=${query}&limit=10`
      );
      const data = await response.json();

      const products = data.products.map((product: any) => {
        return {
          id: product.id,
          title: product.title,
        };
      });

      setProducts(products);
      cache.current[query] = products;
      setStatus(Status.SUCCESS);
    } catch (error) {
      setStatus(Status.ERROR);
    }
  };

  useEffect(() => {
    if (timeId.current) {
      clearTimeout(timeId.current);
    }

    timeId.current = setTimeout(fetchProducts, 500);

    return () => {
      clearTimeout(timeId.current);
    };
  }, [query]);

  return (
    <div className="search-container">
      <input
        type="text"
        onChange={(e) => setQuery(e.target.value)}
        value={query}
      />
      {status === Status.LOADING && <div>Loading...</div>}
      {status === Status.ERROR && <div>An Error Occured</div>}
      {status === Status.SUCCESS && (
        <ul>
          {products.map((product) => (
            <li key={product.id}>{product.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
export default Search;
