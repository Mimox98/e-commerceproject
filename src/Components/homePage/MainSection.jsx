import FeaturedProducts from "./FeaturedProducts";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { uiAction } from "../../store/ui-slice";

const img1 = 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1916&q=80';
const img2 = 'https://images.unsplash.com/photo-1618220179428-22790b461013?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1pOG3xbGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1854&q=80';

function MainSection() {
    const dispatch = useDispatch();

    // Update the navigation tab in the Redux store
    dispatch(uiAction.modifiyNavigationTab({ navigationHandler: '' }));

    return (
        <>
            <section className="container mx-auto px-56 mt-28 h-80 md:pl-[8rem] md:pr-[2rem] md:h-[26rem] lg:pl-[6rem] lg:pr-[2rem] lg:mb-[20rem] 2xl:pl-[6rem] 2xl:pr-[3rem]">
                <div className="h-80 flex columns-2 md:h-0 lg:w-[51rem] md:w-full">
                    <div className="flex flex-col w-1/2 md:w-0">
                        <p className="text-6xl font-bold mb-8 text-customNavyLight pt-3  md:text-[2.125rem] md:w-[15rem]">
                            We are changing the way people shop
                        </p>
                        <p className=" text-lg md:w-[21rem] md:text-[1.5rem] md:leading-[2.75rem]">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore repellat explicabo enim soluta temporibus asperiores aut obcaecati perferendis porro nobis.
                        </p>
                        <Link className="md:w-[21rem]" to={'Products'}>
                            <button className="text-white px-1 py-3 rounded-md bg-customLightAqua hover-bg-customDarkAqua w-1/3 uppercase mt-10  md:w-[12rem] lg:w-[11rem]">Our Products</button>
                        </Link>
                    </div>
                    <div className=" h-96 w-1/2 flex justify-end ml-28 md:hidden lg:mr-[4rem] md:mr-0">
                        <div className="flex snap-x overflow-hidden bg-customNavy rounded-lg h-[26rem] lg:mr-[-3rem] md:mr-0">
                            <img  className="bg-cover w-80 snap-center m-4 mr-1 rounded-lg object-cover" src={img1} alt="Furniture image" />
                            <img  className="bg-cover w-80 snap-center m-4 ml-2 rounded-lg object-cover" src={img2} alt="Furniture image" />
                        </div>
                    </div>
                </div>
            </section>
            <FeaturedProducts></FeaturedProducts> {/* Include the FeaturedProducts component */}
        </>
    );
}

export default MainSection;
