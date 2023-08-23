type ProductInfoProp = {
  ProductInfo: {
    id: number,
    title: string,
    description: string,
    price: number,
    discountPercentage: number,
    rating: number,
    stock: number,
    brand: string,
    category: string,
    image: string,
  }
};
function Product({ ProductInfo }: ProductInfoProp) {
  const { title, price, image } = ProductInfo;
  return (
    <li>
      <p>{ title }</p>
      <p>{ price }</p>
      <img src={ image } alt={ title } />
    </li>
  );
}

export default Product;
