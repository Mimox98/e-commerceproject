import CustomizedForm from "../../ui/CustomizedForm";
import { useState } from "react";
import CartItem from "../CartItem";
import CartItemCustom1 from "../CartItemCustom1";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { uiAction } from "../../store/ui-slice";

function ProductsPage() {
    const dispatch = useDispatch();

    // Modify the navigation tab in the store
    dispatch(uiAction.modifiyNavigationTab({ navigationHandler: 'Products' }));

    // Retrieve data from the store
    const formIsUsed = useSelector(state => state.CartProducts.formIsUsed);
    const productsList = useSelector(state => state.CartProducts.products);
    const ProductsListValidated = useSelector(state => state.CartProducts.productsValidated);

    // Render product items
    const renderMe = productsList.map((element, i) => (
        <CartItem
            linkTo={element.title}
            key={i}
            id={i}
            img={element.image}
            title={element.title}
            price={element.price}
            hint={element.title}
        ></CartItem>
    ));

    const renderMe1 = productsList.map((element, i) => (
        <CartItemCustom1
            linkTo={element.title}
            key={i}
            id={i}
            img={element.image}
            title={element.title}
            price={element.price}
            hint={element.title}
        ></CartItemCustom1>
    ));

    const renderMe3 = ProductsListValidated.map((element, i) => (
        <CartItem
            linkTo={element.title}
            key={i}
            id={i}
            img={element.image}
            title={element.title}
            price={element.price}
            hint={element.title}
        ></CartItem>
    ));

    const renderMe4 = ProductsListValidated.map((element, i) => (
        <CartItemCustom1
            linkTo={element.title}
            key={i}
            id={i}
            img={element.image}
            title={element.title}
            price={element.price}
            hint={element.title}
        ></CartItemCustom1>
    ));

    console.log(formIsUsed);

    const [filterActive, setFilterActive] = useState('Grid');

    const ButtonClickHandler = (event) => {
        setFilterActive(event.currentTarget.id);
    };

    return (
        <section className="container mx-auto px-56 mt-24 md:w-[47rem] md:pl-[4rem] lg:w-[50rem] lg:pl-[2rem] md:pr-56 lg:pr-56 2xl:pr-[3rem] 2xl:pl-[6rem]">
            <CustomizedForm></CustomizedForm>
            <div className="flex w-full h-20 border-b border-x-customNavyLight items-end justify-between md:w-[41rem] lg:w-[43rem]">
                <p className="pb-4 font-bold text-customNavy">products</p>
                <div className="flex pb-2">
                    <button
                        className={`p-[7px] inline hover:rounded-full mr-1 ${
                            filterActive === 'Grid'
                                ? 'text-customBluefont rounded-full bg-customLightAqua hover:bg-customDarkAqua'
                                : 'hover:bg-slate-200'
                        }`}
                        id="Grid"
                        onClick={ButtonClickHandler}
                    >
                        <svg
                            className={``}
                            stroke="currentColor"
                            fill="currentColor"
                            strokeWidth="0"
                            viewBox="0 0 16 16"
                            height="1.3em"
                            width="1.3em"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M1 2.5A1.5 1.5 0 0 1 2.5 1h3A1.5 1.5 0 0 1 7 2.5v3A1.5 1.5 0 0 1 5.5 7h-3A1.5 1.5 0 0 1 1 5.5v-3zm8 0A1.5 1.5 0 0 1 10.5 1h3A1.5 1.5 0 0 1 15 2.5v3A1.5 1.5 0 0 1 13.5 7h-3A1.5 1.5 0 0 1 9 5.5v-3zm-8 8A1.5 1.5 0 0 1 2.5 9h3A1.5 1.5 0 0 1 7 10.5v3A1.5 1.5 0 0 1 5.5 15h-3A1.5 1.5 0 0 1 1 13.5v-3zm8 0A1.5 1.5 0 0 1 10.5 9h3a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 13.5v-3z"></path>
                        </svg>
                    </button>
                    <button
                        className={`p-[7px] inline hover:rounded-full ${
                            filterActive === 'List'
                                ? 'text-customBluefont rounded-full bg-customLightAqua hover:bg-customDarkAqua'
                                : 'hover:bg-slate-200'
                        }`}
                        id="List"
                        onClick={ButtonClickHandler}
                    >
                        <svg
                            stroke="currentColor"
                            fill="currentColor"
                            strokeWidth="0"
                            viewBox="0 0 16 16"
                            height="1.3em"
                            width="1.3em"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"></path>
                        </svg>
                    </button>
                </div>
            </div>
            <div
                className={`grid gap-2 mt-16 h-full mb-20 md:w-full lg:w-[45rem] 2xl:w-full ${
                    filterActive === 'Grid' ? 'grid-cols-3 md:grid-cols-1 lg:grid-cols-2 md:ml-[9rem]' : 'grid-cols-1 md:ml-0'
                } md:mb-[6rem]`}
            >
                {filterActive === 'Grid' && !formIsUsed && renderMe}
                {filterActive === 'List' && !formIsUsed && renderMe1}
                {filterActive === 'Grid' && formIsUsed && renderMe3}
                {filterActive === 'List' && formIsUsed && renderMe4}
            </div>
        </section>
    );
}

export default ProductsPage;
