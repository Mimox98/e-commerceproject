import { Link } from "react-router-dom";
import CartItemCustom2 from "./CartItemCustom2";

const img6 = 'https://images.pexels.com/photos/5705090/pexels-photo-5705090.jpeg?auto=compress&cs=tinysrgb&w=1600';

function ProductDetail() {
    return (
        <div className="container mx-auto px-56 mt-24 md:px-[3rem] md:ml-[5rem] md:w-[32rem] lg:px-[6rem] lg:ml-[7rem] lg:w-[46rem]">
            <div className="md:mb-[1rem]">
                <ul className="flex flex-row">
                    <li className="mr-2 hover:text-customNavy hover:border-b"><Link to={'/'}>Home</Link></li>
                    <div className=" border-t border-r h-1.5 w-1.5 rotate-45 mt-[0.7rem]  border-customNavy"></div>
                    <li className="ml-[0.7rem] hover:text-customNavy hover:border-b"><Link to={'/Products'} relative="path">Products</Link></li>
                </ul>
            </div>
            {/* Render the detailed product information using CartItemCustom2 */}
            <CartItemCustom2 img={img6}></CartItemCustom2>
        </div>
    );
}

export default ProductDetail;
