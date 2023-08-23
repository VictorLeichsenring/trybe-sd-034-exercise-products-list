type ProductInfoProp = {
  productInfo: {
    id: number,
    title: string,
    image: string,
    price: number,
  }
};
function Product({ productInfo }: ProductInfoProp) {
  const { title, price, image } = productInfo;
  return (
    <li>
      <p>{title}</p>
      <p>{price}</p>
      <img src={ image } alt={ title } />
    </li>
  );
}

export default Product;
