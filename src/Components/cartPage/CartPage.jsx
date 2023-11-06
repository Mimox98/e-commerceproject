import MainTitle from "../../ui/MainTitle";
import CartItemCustom3 from "./CartItemCustom3";
const img7 = 'https://images.pexels.com/photos/5705090/pexels-photo-5705090.jpeg?auto=compress&cs=tinysrgb&w=1600';
import { useDispatch, useSelector } from "react-redux";
import { cartAction } from "../../store/cart-slice";
import { uiAction } from "../../store/ui-slice";
import { Link } from "react-router-dom";

function CartPage() {
    // Check if the user is authenticated as a guest
    const isGuestAuthenticated = useSelector(state => state.UiReducer.guestLoginAuthentication);

    const dispatch = useDispatch();

    // Update the navigation tab to "Cart"
    dispatch(uiAction.modifiyNavigationTab({ navigationHandler: 'Cart' }));

    // Get the list of items in the cart from the Redux store
    const cartItemsList = useSelector(state => state.CartProducts.cartItems);

    // Render each item in the cart using CartItemCustom3 component
    const renderedCartList = cartItemsList.map((item, i) => (
        <CartItemCustom3
            key={i}
            title={item.title}
            brand={item.brand}
            color={item.color}
            price={item.price}
            amount={item.amount}
            image={item.image}
        ></CartItemCustom3>
    ));

    // Calculate various cart-related values
    let totalAmountUI = cartItemsList.reduce((accumulator, currentValue) => accumulator + +currentValue.amount, 0);
    let subTotalPrice = (cartItemsList.reduce((accumulator, currentValue) => accumulator + (currentValue.price * currentValue.amount), 0)).toFixed(2);
    let shippingCost = (+subTotalPrice > 300) ? (0).toFixed(2) : (+subTotalPrice > 0) ? (5).toFixed(2) : (0).toFixed(2);
    let taxFeesInitial = ((subTotalPrice * 10) / 100);
    let taxFees = taxFeesInitial.toFixed(2);
    let orderTotal = (+subTotalPrice + +shippingCost + +taxFees).toFixed(2);

    const dispatchCart = useDispatch();

    // Dispatch cart-related values to the Redux store
    dispatchCart(cartAction.collectUiValues({ totalAmountUI, subTotalPrice, shippingCost, taxFees, orderTotal }));

    return (
        <>
        <div className="container mx-auto px-56 mt-24 md:px-[3rem] lg:pl-[3rem] md:ml-[12rem] ">
            <MainTitle>Shopping Cart</MainTitle>
            {cartItemsList.length === 0 && <div className="mt-5 font-semibold text-xl md:w-[15rem] md:text-[1.5rem]">Your Cart is Empty..</div> }
            {cartItemsList.length > 0 && (
                <div className="flex columns-2 justify-start md:contents md:w-full lg:w-[52rem]">
                    <div className="grid grid-cols-1 w-[63%] mt-10">
                        {renderedCartList}
                    </div>
                    <div className="mt-10 ml-auto">
                        <div className="rounded-[1.5rem] bg-customLightBlue h-[13rem] w-[20rem] md:w-[17rem]">
                            <div className="p-4 flex flex-col">
                                <div className="flex justify-between border-b border-customBluefont p-2 text-customNavyLight text-xs">
                                    <p>Subtotal</p>
                                    <p className="font-semibold">${subTotalPrice}</p>
                                </div>
                                <div className="flex justify-between border-b border-customBluefont p-2 text-customNavyLight text-xs">
                                    <p>Shipping</p>
                                    <p className="font-semibold">${shippingCost}</p>
                                </div>
                                <div className="flex justify-between border-b border-customBluefont p-2 text-customNavyLight text-xs">
                                    <p>Tax</p>
                                    <p className="font-semibold">${taxFees}</p>
                                </div>
                                <div className="flex justify-between mt-4 p-2 text-customNavyLight text-sm">
                                    <p>Order Total</p>
                                    <p className="font-semibold">${orderTotal}</p>
                                </div>
                            </div>
                        </div>
                        {!isGuestAuthenticated && <Link to={'/login'}><button className="rounded-lg bg-customLightAqua hover:bg-customDarkAqua text-customBluefont p-4 mt-8 w-[20rem] uppercase font-medium text-sm md:w-[17rem]">Please Login</button></Link>}
                        {isGuestAuthenticated && <Link to={'/Checkout'}><button className="rounded-lg bg-customLightAqua hover:bg-customDarkAqua text-customBluefont p-4 mt-8 w-[20rem] uppercase font-medium text-sm md:w-[17rem]">proceed to checkout</button></Link>}
                    </div>
                </div>
            )}
        </div>
        </>
    );
}

export default CartPage;
