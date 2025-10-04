import { Search, ShoppingCart, User } from 'lucide-react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setSearchTerm } from '../features/products/ProductSlice';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const[isOpen, setIsOpen] = useState(false);

    const dispatch = useDispatch();

    //search
    const searchTerm = useSelector((state) => state.products?.searchTerm || "");

    //cart
    const cartItems = useSelector((state) =>  state.cart.items);
    const itemCount = cartItems.reduce((total, item) => total + item.quantity, 0)

    const handleUser = () => {
        setIsOpen(!isOpen);
    }
 
  return (
    <div className='flex flex-col fixed top-0 z-40 w-full p-1 shadow-md backdrop-filter backdrop-blur-lg'>
        <nav className='p-5 flex justify-around items-center'>
            {/* Logo */}
            <div>
                <a href="/" className='text-2xl md:text-4xl font-bold font-barrio'>
                    Desire
                </a>
            </div>

            {/* Search Bar Web */}
            <form className='w-1/2 max-w-md relative items-center sm:block flex text-gray-500
                focus-within:text-secondary'
            >
                <Search className='absolute ml-3 md:mt-2 pointer-events-none' />
                <input type="text" name='search' 
                autoComplete='off'
                aria-label='search'
                placeholder="Search for..."
                className='input'
                value={searchTerm}
                onChange={(e) => dispatch(setSearchTerm(e.target.value))}
                />
            </form>

            {/* Icons */}
            <div className='flex gap-4'>
                <div className='relative'>
                    <Link to={'/cart'}>
                        <ShoppingCart
                        className='nav-icon hover-button' 
                        />
                    </Link>

                    {itemCount > 0 && 
                    <span className='absolute -top-2 -right-2 bg-secondary py-1 px-1.5
                    text-white text-xs rounded-full w-7 h-6 items-center justify-center'
                    >
                        {itemCount}
                    </span>}
                </div>

                {/* <div className={`${
                    isOpen 
                        ? 'flex flex-col absolute rounded shadow-md bg-card right-0 top-12 z-10 p-4' 
                        : 'hidden'
                    }`}>
                    <a href="#" className='hover-yellow'>Sign Up</a>
                    <a href="#" className='hover-yellow'>Login</a>
                </div>
                <User
                className='nav-icon hover-button'
                onClick={handleUser}
                /> */}
            </div>
        </nav>
        
    </div>
  )
}

export default Navbar