import { Link } from "react-router-dom";

function CartItem(props) {
    return (
        <Link to={`/Products/${props.linkTo}`}>
            <div className="flex flex-col mt-5 rounded-lg w-[21.5rem] h-[20rem] bg-white shadow-[0_2px_8px_0px_rgba(99,99,99,0.2)] hover:shadow-[0_54px_55px_rgba(0,0,0,0.25)] items-center">
                <div>
                    <img className="w-[20rem] h-[12rem] mt-4 rounded-lg object-cover mb-5" src={props.img} alt={props.hint} />
                </div>
                <p className="text-customNavyLight text-xl font-medium capitalize mb-2">{props.title}</p>
                <p className="text-customPurpleLight">${props.price}</p>
            </div>
        </Link>
    );
}

export default CartItem;
