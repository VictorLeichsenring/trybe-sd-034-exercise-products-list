import './App.css';
import products from './data';
import ProductsList from './components/ProductsList';
import Product from './components/Product';

function App() {
  return (
    <ProductsList>
      {
        products.map((product) => (
          <Product key={ product.id } productInfo={ product } />
        ))
      }
    </ProductsList>
  );
}

export default App;
