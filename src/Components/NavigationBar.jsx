import CustomLink from "../ui/CustomLink";
import Header from "./Header";
import { Outlet, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";

function NavigationBar() {
    // Select data from the Redux store
    const totalAmountUI = useSelector((state) => state.CartProducts.totalAmount);
    const navigationStatus = useSelector((state) => state.UiReducer.navigationTab);
    const isGuestAuthenticated = useSelector((state) => state.UiReducer.guestLoginAuthentication);

    // State for responsive design
    const [isDesktop, setDesktop] = useState(window.innerWidth > 1024);
    const [showList, setShowList] = useState(false);

    // Function to update the media state on window resize
    const updateMedia = () => {
        setDesktop(window.innerWidth > 1200);
    };

    useEffect(() => {
        // Listen for window resize events
        window.addEventListener("resize", updateMedia);
        return () => window.removeEventListener("resize", updateMedia);
    }, []);

    // Function to show/hide the navigation list on mobile
    const showListHandler = () => {
        setShowList((previousState) => !previousState);
    };

    // Function to hide the navigation list
    const hideListHandler = () => {
        setShowList(false);
    };

    return (
        <>
            <div onClick={hideListHandler}>
                <Header></Header>
            </div>
            {!isDesktop && (
                <>
                    {/* Mobile menu toggle button */}
                    <div className="absolute top-[3.9rem] left-[19rem] md:left-[2rem] lg:left-[4rem]">
                        <svg
                            onClick={showListHandler}
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#021431"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <line x1="3" y1="12" x2="21" y2="12"></line>
                            <line x1="3" y1="6" x2="21" y2="6"></line>
                            <line x1="3" y1="18" x2="21" y2="18"></line>
                        </svg>
                    </div>
                    {showList && (
                        <div className="flex flex-col p-4 bg-customLightBlue absolute top-[7.5rem] w-[13rem] left-[19rem] h-auto rounded-lg md:left-[3rem] lg:left-[5rem]">
                            {/* Navigation links for mobile */}
                            <CustomLink customClass={navigationStatus} idItem="">
                                Home
                            </CustomLink>
                            <CustomLink customClass={navigationStatus} idItem="About">
                                About
                            </CustomLink>
                            <CustomLink customClass={navigationStatus} idItem="Products">
                                Products
                            </CustomLink>
                            <CustomLink customClass={navigationStatus} idItem="Cart">
                                Cart
                            </CustomLink>
                            {isGuestAuthenticated && (
                                <CustomLink customClass={navigationStatus} idItem="Checkout">
                                    Checkout
                                </CustomLink>
                            )}
                        </div>
                    )}
                </>
            )}
            {/* Desktop navigation bar */}
            <div className="container bg-customLightBlue h-16 px-56 md:w-[47rem]" onClick={hideListHandler}>
                <div className="flex h-14 my-auto items-center pt-2 justify-between md:ml-[24rem]">
                    {isDesktop && (
                        <Link to={"/"} className="py-2 px-4 bg-customLightAqua hover:bg-customDarkAqua rounded-md text-white text-2xl">
                            M
                        </Link>
                    )}
                    {!isDesktop && <Link></Link>}
                    {isDesktop && (
                        <div onClick={hideListHandler}>
                            {/* Desktop navigation links */}
                            <CustomLink customClass={navigationStatus} idItem="">
                                Home
                            </CustomLink>
                            <CustomLink customClass={navigationStatus} idItem="About">
                                About
                            </CustomLink>
                            <CustomLink customClass={navigationStatus} idItem="Products">
                                Products
                            </CustomLink>
                            <CustomLink customClass={navigationStatus} idItem="Cart">
                                Cart
                            </CustomLink>
                            {isGuestAuthenticated && (
                                <CustomLink customClass={navigationStatus} idItem="Checkout">
                                    Checkout
                                </CustomLink>
                            )}
                        </div>
                    )}
                    <div className="flex items-center" onClick={hideListHandler}>
                        {/* Cart icon and total amount */}
                        <Link to={"Cart"}>
                            <div className="inline-flex relative md:left-[5rem] lg:left-[10rem]">
                                <svg
                                    stroke="currentColor"
                                    fill="currentColor"
                                    strokeWidth="0"
                                    viewBox="0 0 16 16"
                                    height="1.5em"
                                    width="1.5em"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"></path>
                                </svg>
                                <span className="absolute translate-x-3	-translate-y-3	bg-customLightAqua rounded-lg py-0.5 px-2 text-white text-xs">
                                    {totalAmountUI}
                                </span>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
            <div onClick={hideListHandler}>
                <Outlet></Outlet>
            </div>
        </>
    );
}

export default NavigationBar;
