import { useNavigate } from 'react-router-dom';

function FoodCard({ product }) {
  const navigate = useNavigate();

  const handleClick = () => {
    if (product?.code) {
      navigate(`/product/${product.code}`);
    }
  };

  return (
    <div 
      onClick={handleClick} 
      style={{ cursor: 'pointer' }}
    >
      <h3>{product?.product_name || 'Unknown Product'}</h3>
      <p>{product?.brands || 'Unknown Brand'}</p>
    </div>
  );
}

export default FoodCard;