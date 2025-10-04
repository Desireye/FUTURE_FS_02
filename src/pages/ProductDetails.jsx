import { ArrowLeft, ShoppingCart } from 'lucide-react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom'
import { addToCart } from '../features/cart/cartSlice';
import { useEffect } from 'react';
import { fetchProducts } from '../features/products/ProductSlice';

const ProductDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const { items, status } = useSelector((state) => state.products);

  useEffect(() => {
    if (status === "idle" || items.length === 0) {
      dispatch(fetchProducts());
    }
  }, [dispatch, status, items.length]);

  const product = useSelector((state) =>
    state.products.items.find((p) => p.product_id === parseInt(id))
  );

  if(!product && status === "succeeded") {
    return (
      <div className='container'>
        <div className='text-center'>
          <h2 className='text-2xl font-bold mb-4'>Product Not Found</h2>
          <Link to='/' className='text-primary'>Return to Home</Link>
        </div>
      </div>
    )
  }

  if (!product) return null;

  const imgPath = `../assets/${product.img}`;

  return (
    <div className='container'>
      <div>
        <Link to='/' className='mb-8 flex'>
          <ArrowLeft /> Back to Products
        </Link>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 items-center justify-center'>
          <div className='shadow-md bg-card p-4 rounded w-fit'>
            <img src={imgPath} alt={product.product_name} 
              className='h-100'
            />
          </div>

          <div className='xl:-ml-60'>
            <h1 className='text-3xl font-bold mb-4'>
              {product.product_name}
            </h1>

            <p className='text-gray-600 mb-6'>
              {product.desc}
            </p>

            <div className='mb-6'>
              <span className='font-bold text-3xl'>
                ${product.price}
              </span>
            </div>

            <div className='mb-6'>
              <h3 className='font-semibold mb-2'>Category</h3>
              <span className='text-whi font-semibold mb-2 bg-secondary p-2 capitalize rounded-full'>
                {product.category}
              </span>
            </div>

            <button className='w-full md:w-auto bg-primary px-8 py-3 rounded-md flex
              items-center justify-center gap-2 hover:bg-secondary mb-8
              transition-colors duration-150 ease-in-out'
              onClick={() => dispatch(
                addToCart({
                  product_id: product.product_id,
                  product_name: product.product_name,
                  price: product.price,
                  img: product.img,
                  quantity: 1,
                })
              )}
              >
              <ShoppingCart /> Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetails