import { useDispatch, useSelector } from 'react-redux'
import { clearCart } from '../features/cart/cartSlice';
import { useState } from 'react';

const CheckoutPage = () => {
    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.cart.items);
    const [paid, setPaid] = useState(false);

    const total = cartItems.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
    );

    const handlePayment = (e) => {
        e.preventDefault();

        setTimeout(() => {
        setPaid(true);
        dispatch(clearCart());
        }, 1500);
    };

    if (paid) {
        return (
            <div className='container text-center'>
                <h2 className='text-2xl font-bold m-4 text-primary'>
                    Payment Successful!
                </h2>
                <p className='mb-4'>Thank you for your purchase</p>
                <p>Your order will arrive by <b>XX/XX/{new Date().getFullYear()}</b></p>
            </div>
        )
    }

  return (
    <div className='container'>
        <h2 className='text-center text-2xl font-bold uppercase mb-4'>Checkout</h2>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
            <div className='shadow-lg'>
                <div className='bg-primary py-2 px-6 font-bold'>
                    <span className='uppercase'>Delivery Options</span>
                </div>

                <div>
                    <form onSubmit={handlePayment} className='p-4'>
                        <input type="radio" name="location" 
                            id="Home" required 
                            className='mr-1'
                        /> 
                        <label htmlFor="Home" className=''>Home</label> 
                        <input type="radio" name="location" 
                            id="Pick Up" required 
                            className='mr-1 ml-4'
                        />
                        <label htmlFor="Pick Up">Pick Up</label> <br />

                       <div className='flex justify-between gap-4 mb-4 mt-4'>
                             <input type="text" name='fname' 
                                placeholder='First Name' required
                                className='border p-2 w-1/2'
                            />
                            <input type="text" name='lname' 
                                placeholder='Last Name' required
                                className='border p-2 w-1/2'
                            />
                       </div>

                        <input type="text" name='address' 
                            placeholder='Delivery Address' required
                            className='border p-2 mb-4 w-full'
                        />

                        <div className='flex justify-between gap-4 mb-4'>
                            <input type="email" name='email' 
                                placeholder='Email' required
                                className='border p-2 w-1/2'
                            />
                            <input type="text" name='phone' 
                                placeholder='Phone Number' required
                                className='border p-2 w-1/2'
                            />
                        </div>

                        <div className='bg-primary'>
                            <span className='uppercase p-2 font-bold'>Payment</span>
                        </div>
                        <div className='py-2'>
                            <input type="radio" name="payment" 
                                id="Card" required 
                                className='mr-1'    
                            /> 
                            <label htmlFor="Card">Card</label> 
                            <input type="radio" name="payment" 
                                id="Bank Transfer" required 
                                className='mr-1 ml-4'
                            />
                            <label htmlFor="Bank Transfer">Bank Transfer</label> 

                            <input type="text" name='account' 
                                placeholder='Account/Card Number' required
                                className='border p-2 w-full mb-8 mt-4'
                            />

                            <button type='submit' name='Pay'
                                className='bg-black text-white font-bold uppercase w-full 
                                p-2 rounded hover:bg-primary ease-in-out duration-300'
                            >
                                Pay ${total.toFixed(2)}
                            </button>
                        </div>
                    </form>
                </div>
            </div>  

            <div className='shadow-lg h-55'>
                <div className='bg-black py-2 px-6 flex justify-between'>
                    <span className='uppercase text-white font-bold'>In Your Bag</span>
                    <a href="/cart" className='text-primary'>Edit</a>
                </div>

                <div className='border-b py-4 px-6'>
                    <div className='flex justify-between'>
                        <p>Subtotal</p>    
                        <p>${total.toFixed(2)}</p>
                    </div>   
                    <div className='flex justify-between'>
                        <p>Estimated Shipping</p>    
                        <p>Free</p>
                    </div>
                    <div className='flex justify-between'>
                        <p>Estimated Tax</p>    
                        <p>$0.00</p>
                    </div>
                    <div className='flex justify-between font-bold'>
                        <p>Total</p>    
                        <p>${total.toFixed(2)}</p>
                    </div>
                </div> 

                <p className='text-bold p-2 uppercase'>Arrives XX/XX/{new Date().getFullYear()}</p> 
            </div>     
        </div>
    </div>
  )
}

export default CheckoutPage