import { useEffect, useState } from "react";
import ProductList from "./components/ProductList/ProductList";

const App = () => {
  const [isProductListVisible, setIsProductListVisible] = useState(false);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  const url = "https://mocki.io/v1/49330e17-f4b8-436a-b0c9-4a232251ac60";

  async function getProducts() {
    const response = await fetch(url);
    const data = await response.json();
    setProducts(data);
  }

  function handleProductClick() {
    setIsProductListVisible(prevState => !prevState);
  }

  return (
    <>
      <h1>Hello, React!</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur,
        repellendus cupiditate. Consequatur dolorum eligendi aperiam omnis
        repudiandae optio, amet nemo recusandae nam illo, cupiditate pariatur
        dolorem impedit magni odio neque.
      </p>
      <div>
        <button type="button" onClick={handleProductClick}>
          {isProductListVisible ? "Закрыть список" : "Открыть список"}
        </button>
        {isProductListVisible && <ProductList products={products} />}
      </div>
    </>
  );
};

export default App;
