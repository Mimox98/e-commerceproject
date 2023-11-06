import { Link } from "react-router-dom";
import MainTitle from "../../ui/MainTitle";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { uiAction } from "../../store/ui-slice";
import { useEffect, useState } from "react";
import StatusPage from "../../ui/StatusPage";
import { cartAction } from "../../store/cart-slice";

function CheckoutPage() {
    const dispatch = useDispatch();

    // Get cart-related data from the Redux store
    const subTotalPrice = useSelector(state => state.CartProducts.SubtotalPrice);
    const shippingCost = useSelector(state => state.CartProducts.Shipping);
    const taxFees = useSelector(state => state.CartProducts.Tax);
    const orderTotal = useSelector(state => state.CartProducts.orderTotal);
    const isGuestAuthenticated = useSelector(state => state.UiReducer.guestLoginAuthentication);
    const cartItemsList = useSelector(state => state.CartProducts.cartItems);

    // Update the navigation tab to "Checkout"
    dispatch(uiAction.modifiyNavigationTab({ navigationHandler: 'Checkout' }));

    // State to track email and address input
    const [EmailInputTracker, SetEmailInputTracker] = useState('');
    const [AddressInputTracker, SetAddressInputTracker] = useState('');

    // States to validate email and address inputs
    const [isEmailValidated, setEmailIsValidated] = useState(true);
    const [isAddressValidated, setAddressIsValidated] = useState(true);

    // State to validate the entire form
    const [formIsValid, setFormIsValid] = useState(false);

    // Handler for tracking email input
    const trackEmailHandler = (event) => {
        SetEmailInputTracker(event.target.value);
    }

    // Handler for tracking address input
    const trackAddressHandler = (event) => {
        SetAddressInputTracker(event.target.value);
    }

    // Handler for submitting the order
    const sumbitOrderHandler = () => {
        if (EmailInputTracker.includes('@') === false) {
            setEmailIsValidated(false);
        }
        if (AddressInputTracker.length < 5) {
            setAddressIsValidated(false);
        } else {
            dispatch(cartAction.emptyCartOnSubmission());
        }
    }

    // Validate email and address inputs and the entire form
    useEffect(() => {
        if (EmailInputTracker.includes('@') === true) {
            setEmailIsValidated(true);
        } else {
            setEmailIsValidated(false);
        }

        if (AddressInputTracker.length > 5) {
            setAddressIsValidated(true);
        } else {
            setAddressIsValidated(false);
        }

        if (EmailInputTracker.includes('@') === true && AddressInputTracker.length > 5) {
            setFormIsValid(true);
        } else {
            setFormIsValid(false);
        }
    }, [EmailInputTracker.includes('@'), AddressInputTracker, formIsValid]);

    return (
        <>
        {!isGuestAuthenticated && (
            <StatusPage
                statusMessage='You are not authorized to access this page..'
                buttonMessage='Login'
                linkTo='/Login'
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="#d0021b" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86">
                    </polygon>
                    <line x1="12" y1="8" x2="12" y2="12"></line>
                    <line x1="12" y1="16" x2="12.01" y2="16"></line>
                </svg>
            </StatusPage>
        )}
        {isGuestAuthenticated && cartItemsList.length === 0 && (
            <div className="container mx-auto px-56 mt-24">
                <MainTitle>Place Your Order</MainTitle>
                <div className="mt-5 font-semibold text-xl md:w-[17rem]">Your Cart is Empty..</div>
            </div>
        )}
        {isGuestAuthenticated && cartItemsList.length > 0 && (
            <div className="container mx-auto px-56 mt-24 md:pl-[12rem] lg:pl-[8rem]">
                <MainTitle>Place Your Order</MainTitle>
                <div className="flex columns-2 justify-start md:flex-col md:w-[18rem] lg:w-[40rem]">
                    <div className="w-[50%] mt-10 mr-4 md:w-full">
                        <div className="font-semibold text-lg text-customNavyLight tracking-wide mb-8">Shipping Information</div>
                        <div className="mb-4">
                            <label className="d-block" htmlFor="email">Email</label>
                            {!isEmailValidated && EmailInputTracker.length > 0 && (
                                <span className="text-red-500 font-semibold">
                                    <svg className="inline mr-1" xmlns="http://www.w3.org/2000/svg" width="24" height="34" viewBox="0 0 24 24" fill="none" stroke="#fc2c2c" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                        <circle cx="12" cy="12" r="10"></circle>
                                        <line x1="12" y1="8" x2="12" y2="12"></line>
                                        <line x1="12" y1="16" x2="12.01" y2="16"></line>
                                    </svg>
                                    Please enter a valid email that includes the '@' sign..
                                </span>
                            )}
                            <input
                                className={`h-[3.1rem] w-full border-2 border-solid border-slate-200 rounded-lg p-2 ${!isEmailValidated ? ' border-red-500' : ''}`}
                                type="text"
                                id="email"
                                onChange={trackEmailHandler}
                            />
                        </div>
                        <div className="mb-8">
                            <label className="d-block" htmlFor="address">Address</label>
                            {!isAddressValidated && AddressInputTracker.length > 0 && (
                                <span className="text-red-500 font-semibold">
                                    <svg className="inline mr-1" xmlns="http://www.w3.org/2000/svg" width="24" height="34" viewBox="0 0 24 24" fill="none" stroke="#fc2c2c" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                        <circle cx="12" cy="12" r="10"></circle>
                                        <line x1="12" y1="8" x2="12" y2="12"></line>
                                        <line x1="12" y1="16" x2="12.01" y2="16"></line>
                                    </svg>
                                    Please enter a valid address..
                                </span>
                            )}
                            <input
                                className={`h-[3.1rem] w-full border-2 border-solid border-slate-200 rounded-lg p-2 ${!isAddressValidated ? 'border-red-500' : ''}`}
                                type="text"
                                id="address"
                                onChange={trackAddressHandler}
                            />
                        </div>
                        {!formIsValid && EmailInputTracker.length > 0 && AddressInputTracker.length > 0 && (
                            <div className="text-red-500 font-semibold">
                                <svg className="inline mr-1" xmlns="http://www.w3.org/2000/svg" width="24" height="34" viewBox="0 0 24 24" fill="none" stroke="#fc2c2c" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                    <circle cx="12" cy="12" r="10"></circle>
                                    <line x1="12" y1="8" x2="12" y2="12"></line>
                                    <line x1="12" y1="16" x2="12.01" y2="16"></line>
                                </svg>
                                Invalid input. Please try again!
                            </div>
                        )}
                        {!formIsValid && <button className="rounded-lg bg-blue-600 text-white text-center uppercase text-sm p-4 w-[100%] hover-bg-blue-700" onClick={sumbitOrderHandler}>Place your order</button>}
                        {formIsValid && <Link to={'/Ordersuccessful'}><button className="rounded-lg bg-blue-600 text-white text-center uppercase text-sm p-4 w-[100%] hover-bg-blue-700" onClick={sumbitOrderHandler}>Place your order</button></Link>}
                    </div>
                    <div className="mt-10 ml-auto w-[50%] md:w-[18rem]">
                        <div className="rounded-[1.5rem] bg-customLightBlue h-[13rem] ">
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
                    </div>
                </div>
            </div>
        )}
        </>
    )
}

export default CheckoutPage;
