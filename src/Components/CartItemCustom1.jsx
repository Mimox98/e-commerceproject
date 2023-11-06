import { Link } from "react-router-dom";

function CartItemCustom1(props) {
    return (
        <Link to={props.title}>
            <div className="flex flex-row mt-5 rounded-lg w-[66.5rem] h-[11rem] bg-white shadow-[0_2px_8px_0px_rgba(99,99,99,0.2)] hover:shadow-[0_54px_55px_rgba(0,0,0,0.25)] items-center md:w-[38rem] lg:w-[42.5rem]">
                <div>
                    <img className="w-[9rem] h-[8rem] mt-4 rounded-lg object-cover mb-5 ml-4" src={props.img} alt={props.hint} />
                </div>
                <p className="text-customNavyLight text-xl font-medium capitalize mb-[5rem] ml-8">{props.title}</p>
                <p className="text-customNavyLight mb-[5rem] mr-[2rem] ml-auto font-bold">${props.price}</p>
            </div>
        </Link>
    );
}

export default CartItemCustom1;
