import { useState } from 'react'
import Footer from '../components/Footer'
import ProductGrid from '../components/ProductGrid'
import { cn } from '../lib/utils'

const categories = [
  'All',
  'Bags',
  'Hats',
  'Jewelry',
  'Shoes'
]

const Home = () => {
  const[activeCategory, setActiveCategory] = useState("All");

  return (
    <div>
      <div className='container'>
        {/* BANNER */}
        <section id='top'
        className='w-full bg font-bold rounded-2xl flex flex-col 
         text-center justify-center items-center'
        >
          <p className='text-4xl p-5'>
            Welcome to <span className='font-barrio'> Desire</span>
          </p>
          <p>Your one stop shop for accessories</p>
        </section>

        <div className='mx-auto my-10 px-4'>
          <div className='flex flex-wrap justify-center gap-4'>
            {categories.map((category) => (
              <button key={category}
                onClick={() => setActiveCategory(category)}
                className={cn(
                  'text-white py-2 px-4 rounded-md active:scale-105 transition-all ease-in',
                  activeCategory === category 
                  ? 'bg-secondary' 
                  : 'bg-primary hover:bg-secondary'
                )}
              >
                  {category}
              </button>
            ))}
          </div>
        </div>

        <ProductGrid activeCategory={activeCategory} />
      </div>

      <Footer />
    </div>
  )
}

export default Home