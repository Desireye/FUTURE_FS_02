import { useEffect } from "react"
import ProductCard from "./ProductCard"
import { useSelector, useDispatch } from "react-redux"
import { fetchProducts } from "../features/products/ProductSlice"

const ProductGrid = ({activeCategory}) => {
    const dispatch = useDispatch();
    const { items, filteredItems, searchTerm, status, error } = useSelector(
        (state) => state.products
    );

    useEffect(() => {
        if (status === "idle") {
            dispatch(fetchProducts());
        }
    }, [dispatch, status]);

    if (status === "loading") {
        return <div className="text-center mt-10">Loading products...</div>;
    }

    if (error) {
        return <div className="text-center text-red-500 mt-10">Error loading products</div>;
    }

    let displayedItems = searchTerm.trim() ? filteredItems : items;

    if (activeCategory && activeCategory !== "All") {
        displayedItems = displayedItems.filter(
        (product) =>
            product.category?.toLowerCase() === activeCategory.toLowerCase()
        );
    }

    return (
        <div className="grid gap-16 my-24 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            {displayedItems?.length > 0 ? (
                displayedItems.map((p) => (
                <ProductCard key={p.product_id} product={p} />
                ))
            ) : (
                <p className="col-span-full text-center text-gray-500">
                No products found
                </p>
            )}
        </div>
    )
}

export default ProductGrid