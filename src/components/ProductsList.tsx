type ProductsListProps = {
  children: React.ReactNode,
};

function ProductsList({ children }: ProductsListProps) {
  return (
    <>
      <h1>Lista de produtos</h1>
      <ul>{ children }</ul>
    </>
  );
}

export default ProductsList;
