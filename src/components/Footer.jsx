import { Facebook, Instagram, Twitter, Youtube, LocationEdit, Phone, ArrowBigUp } from 'lucide-react'

const categories = [
  'All',
  'Bags',
  'Hats',
  'Jewelry',
  'Shoes'
]

const Footer = () => {
  return (
    <footer className='bg-slate-900 shadow-md'>
        <div className='container mx-auto px-4'>
            <div className='min-h-16'>
                <div className='flex justify-between items-center flex-col lg:flex-row py-10'>
                    <h2 className='text-2xl text-center md:text-4xl md:text-nowrap md:text-left 
                                    font-bold text-white'>
                        Subscribe to Our Newsletter!
                    </h2>

                    <form action="" className='relative flex justify-center lg:justify-end items-center mt-8 w-full md:mt-4'>
                        <input type="text" name='email' 
                        autoComplete='off'
                        aria-label='email'
                        placeholder='Enter Your Email'
                        className='input px-4 py-3 max-w-md' />
                        <button className='bg-secondary p-3 w-28 rounded-full absolute lg:right-0 md:right-36 right-0.5'>
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </div>

        <div className='bg-slate-800 text-white py-8'>
            <div className='container mt-3 grid gap-2 grid-cols-1 
            md:grid-cols-2 lg:grid-cols-4'>
                <div>
                    {/* Logo */}
                    <div>
                        <a href="/" className='text-4xl lg:text-6xl font-bold font-barrio'>
                            Desire
                        </a>
                    </div>
                    <p className='mt-4'>Lorem ipsum dolor, sit amet  elit. 
                        Laboriosam nemo cum ratione asperiores sit nulla, 
                        laudantium quasi esse ipsum ad vero vitae reiciendis
                    </p>

                    <div className='flex gap-8 mt-8'>
                        <Facebook className='nav-icon hover-button' />
                        <Twitter className='nav-icon hover-button' />
                        <Youtube className='nav-icon hover-button' />
                        <Instagram className='nav-icon hover-button' />
                    </div>
                </div>
                <div>
                    <h2 className='text-2xl font-semibold mt-4'>
                        Pages
                    </h2>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">FAQs</a></li>
                        <li><a href="#">Contact</a></li>
                        <li><a href="#">Resources</a></li>
                    </ul>
                </div>
                <div> 
                    <h2 className='text-2xl font-semibold mt-4'>
                        Categories
                    </h2>
                    <ul>
                        {categories.map((cat, key)=> (
                            <li key={key}><a href="#">{cat}</a></li>
                        ))}
                    </ul></div>
                <div>
                    <h2 className='text-2xl font-semibold mt-4'>
                        Contact
                    </h2>
                    <p className='flex gap-2'>
                        <LocationEdit /> No. 16, Soneye Lane, Lagos, LA 100123, Nigeria
                    </p>
                    <p className='flex gap-2'>
                        <Phone /> +123 45 678 910
                    </p>
                    <p className='flex gap-2'>
                        <Phone /> +109 87 654 321
                    </p>
                </div>
            </div>
        </div>

        <div className='flex justify-between items-center p-4'>
            <p className='text-white'>&copy; {new Date().getFullYear()} Desire</p>

            <a href="#top">
                <ArrowBigUp 
                className='nav-icon hover-button'/>
            </a>
        </div>
    </footer>
  )
}

export default Footer