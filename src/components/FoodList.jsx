import FoodCard from './FoodCard';

function FoodList({ products }) {
  if (!products || products.length === 0) {
    return <p>No results found</p>;
  }

  return (
    <div className="food-list">
      {products.map((product) => (
        <FoodCard
          key={product.code} // IMPORTANT: unique key
          product={product}
        />
      ))}
    </div>
  );
}

export default FoodList;