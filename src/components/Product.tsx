type ProductInfoProp = {
  productInfo: {
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
function Product({ productInfo }: ProductInfoProp) {
  const { title, price, image } = productInfo;
  return (
    <li>
      <p>{ title }</p>
      <p>{ price }</p>
      <img src={ image } alt={ title } />
    </li>
  );
}

export default Product;
