import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { cartAction } from "../../store/cart-slice";
import { uiAction } from "../../store/ui-slice";

function CartItemCustom2(props) {
    const dispatch = useDispatch();

    // Set the navigation tab for the UI
    dispatch(uiAction.modifiyNavigationTab({ navigationHandler: 'Products' }));

    // Local state for button and amount
    const [buttonActiveStatus, setButtonStatus] = useState('default');
    const [amountCaptured, setAmountCamptured] = useState(1);

    // Add the selected item to the cart
    const addToCartHandler = () => {
        dispatch(cartAction.addItemToCart({
            title: filteretItem[0].title,
            brand: filteretItem[0].brand,
            price: filteretItem[0].price,
            color: selectedColor[0].coloring,
            amount: +amountCaptured,
            image: filteretItem[0].image
        }));
    }

    // Redux: Get cart items and calculate total amount
    const cartItemsList = useSelector(state => state.CartProducts.cartItems);
    const totalAmountUI = cartItemsList.reduce((accumulator, currentValue) => accumulator + +currentValue.amount, 0);
    dispatch(cartAction.collectUiValues({ totalAmountUI }));

    // Handle button activation
    const buttonActivateHandler = (event) => {
        setButtonStatus(event.currentTarget.id);
    }

    // Handle amount selection
    const amountCaptureHandler = (event) => {
        setAmountCamptured(event.target.value);
    }

    // Get product details based on URL parameter
    const params = useParams();
    const listOfProducts = useSelector(state => state.CartProducts.products);
    const filteretItem = listOfProducts.filter(item => item.title === params.productId);

    // Get different colors of the product
    const differentColors = filteretItem[0].colors;
    const selectedColor = differentColors.filter(item => item.id === buttonActiveStatus);

    // Render color buttons and selected item
    const renderDifferentColors = differentColors.map((item, i) => (
        <button className={`w-6 h-6 mr-2 ${item.coloring} rounded-full ${buttonActiveStatus === item.id ? ' border-2 border-customNavy' : ''}`} id={item.id} onClick={buttonActivateHandler} key={i}></button>
    ));
    
    const renderFilteredItem = filteretItem.map((item, i) => (
        <div className="flex columns-2 mt-14 md:contents" key={i}>
            <div className="w-1/2 md:w-full md:mb-[1rem]">
                <img className="object-cover rounded-lg w-[31rem] h-[24rem] md:w-[14rem] md:h-[15rem] lg:w-[17rem] lg:h-[17rem] 2xl:w-[20rem] 2xl:h-[25rem] lg:rounded-[1.5rem] md:ml-[4rem]" src={item.image} alt={item.title} />
            </div>
            <div className="w-1/2 flex flex-col md:w-full md:ml-0 lg:ml-[3rem]">
                <h1 className="text-3xl text-customNavyLight font-bold">{item.title}</h1>
                <h4 className="text-xl text-gray-400 font-bold mt-2">{item.brand}</h4>
                <p className="mt-3 text-xl text-customNavyLight">${item.price}</p>
                <p className="mt-6 leading-8 text-customNavyLight">{item.description}</p>
                <div className="mt-8">
                    <h4 className="text-md font-medium tracking-wider capitalize text-customNavyLight">Colors</h4>
                    <div className="mt-2 flex flex-row">
                        {renderDifferentColors}
                    </div>
                </div>
                <div className="mt-4 flex flex-col">
                    <label className="text-customNavyLight font-medium ml-2" htmlFor="amount">Amount</label>
                    <select className="border border-violet-600 rounded-lg h-12 px-2 text-gray-600 max-w-[22rem] mt-2" name="amount" id="amount" onChange={amountCaptureHandler}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                    </select>
                </div>
                <div className="mt-8 mb-20">
                    <Link to={'/Cart'}>
                        <button className="rounded-lg bg-violet-700 hover:bg-violet-900 p-4 text-gray-100 uppercase" onClick={addToCartHandler}>Add to Cart</button>
                    </Link>
                </div>
            </div>
        </div>
    ));

    return (
        <>
            {renderFilteredItem}
        </>
    );
}

export default CartItemCustom2;
