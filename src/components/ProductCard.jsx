import { Link } from "react-router-dom"

const ProductCard = ({ product }) => {
  const imgPath = `../assets/${product.img}`;
  
  return (
    <Link to={`/product/${product.product_id}`}>
        <div className='shadow-lg rounded-lg cursor-pointer'>
          <div className="relative">
            <p className="absolute bg-primary rounded-full p-2 m-2 text-xl font-semibold">
              ${product.price}
            </p>
            <img src={imgPath}
             alt={product.product_name} 
             className="h-90 w-full object-cover"
             />
          </div>
          <div className="bg-card p-4">
            <h2 className="text-lg font-semibold my-4">
              {product.product_name.length > 20 
              ? `${product.product_name.substring(0,25)}...` 
              : product.product_name} 
            </h2>
            <p className="text-sm text-zinc-500 border-b-2 pb-4 h-15">
              {product.desc.length > 70 
              ? `${product.desc.substring(0,70)}...` 
              : product.desc}
            </p>

            <div className="flex justify-between mt-4 items-center">
              <span className="hover:text-primary">
                View Details
              </span>
            </div>
          </div>
        </div>
    </Link>
  )
}

export default ProductCard