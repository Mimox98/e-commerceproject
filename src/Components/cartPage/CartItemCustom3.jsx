import { useDispatch } from "react-redux";
import { cartAction } from "../../store/cart-slice";

function CartItemCustom3(props) {
    // Generate an array of options for the "Amount" select input
    let Options = [];
    for (let index = 1; index < (+props.amount + 6); index++) {
        Options.push(index);
    }

    const dispatch = useDispatch();

    // Handler for removing the item from the cart
    const itemRemoveHandler = () => {
        dispatch(cartAction.removeItemToCart({ title: props.title, color: props.color }));
    }

    // Handler for modifying the amount of the item in the cart
    const modifiyAmountHandler = (event) => {
        dispatch(cartAction.modifiyAmount({ title: props.title, color: props.color, amount: +event.target.value }));
    }

    return (
        <div className="flex h-40 p-4 mb-4 justify-between border-b border-customBluefont last:border-b-0 md:flex-col md:mb-[14rem]">
            <img className="rounded-lg object-cover h-32 w-36" src={props.image} alt="item-dummy" />
            <div className="flex flex-col">
                <h2 className="font-medium text-customNavyLight mb-1">{props.title}</h2>
                <h4 className="text-gray-400 mb-1">{props.brand}</h4>
                <div className="flex">
                    <p className="text-customNavyLight">color :</p>
                    <div className={`w-4 h-4 mt-1 ml-2 ${props.color} rounded-full`}></div>
                </div>
            </div>
            <div className="flex flex-col">
                <label className="text-customNavyLight mb-1" htmlFor="Amount">Amount</label>
                <select className="mb-1 rounded-lg max-w-[3rem] border border-slate-400" name="Amount" id="Amount" defaultValue={+props.amount} onChange={modifiyAmountHandler}>
                    {Options.map((item, i) => <option value={`${item}`} key={i}>{item}</option>)}
                </select>
                <button className="text-blue-600 hover:text-blue-700 hover:border-b hover:border-blue-700 text-sm md:mr-[6rem] md:mb-[0.5rem]" onClick={itemRemoveHandler}>remove</button>
            </div>
            <p className="font-medium text-customNavyLight">${props.price}</p>
        </div>
    );
}

export default CartItemCustom3;
