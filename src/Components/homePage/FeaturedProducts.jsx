import MainTitle from "../../ui/MainTitle";
import CartItem from "../CartItem"; // Importing the CartItem component
import { useSelector } from "react-redux";

// Define URLs for featured product images
export const img3 = 'https://images.pexels.com/photos/943150/pexels-photo-943150.jpeg?auto=compress&cs=tinysrgb&w=1600';
export const img4 = 'https://images.pexels.com/photos/3679601/pexels-photo-3679601.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2';
export const img5 = 'https://images.pexels.com/photos/1034584/pexels-photo-1034584.jpeg?auto=compress&cs=tinysrgb&w=1600';

function FeaturedProducts() {
    // Fetch the list of products from the Redux store
    const ProductList = useSelector(state => state.CartProducts.products);

    // Create a copy of the product list
    const HomeFeaturedProducts = [...ProductList];

    // Filter the products to select the first three as featured products
    const filteredProducts = HomeFeaturedProducts.slice(0, 3);

    // Map the filtered products to the CartItem component for rendering
    const renderFilteredProducts = filteredProducts.map((item, i) => (
        <CartItem linkTo={item.title} key={i} id={i} img={item.image} title={item.title} price={item.price} hint={item.title} />
    ));

    return (
        <section className="mt-44 container mx-auto px-56 h-80 mb-48 md:pl-[8rem] md:h-[32rem] md:mb-[44rem] lg:pl-[6rem] lg:pr-[2rem] lg:mb-[36rem] 2xl:pr-[6rem] 2xl:pl-[3rem]">
            <MainTitle>Featured Products</MainTitle>
            <div className="grid grid-cols-3 gap-2 mt-10 md:grid-cols-1 lg:grid-cols-2 md:gap-2 lg:gap-[2.5rem] md:w-full lg:w-full 2xl:w-full">
                {renderFilteredProducts}
            </div>
        </section>
    );
}

export default FeaturedProducts;
