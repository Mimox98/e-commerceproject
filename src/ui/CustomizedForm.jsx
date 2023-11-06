import { useState} from "react"
import { useDispatch, useSelector } from "react-redux"
import { cartAction } from "../store/cart-slice"


function CustomizedForm() {
    // Get the list of products from the Redux store
    const productsList = useSelector((state) => state.CartProducts.products);

    const dispatch = useDispatch();

    // Define state variables and their initial values
    const [defaultRangeValue, setDefaultRangeValue] = useState('500');
    const [defaultProductValue, setDefaultProductValue] = useState('');
    const [defaultCategoryValue, setDefaultCategoryValue] = useState('all');
    const [defaultCompanyValue, setDefaultCompanyValue] = useState('all');
    const [defaultSortValue, setDefaultSortValue] = useState('a-z');
    const [defaultShippingValue, setDefaultShippingValue] = useState(false);

    // Event handler functions to update the state variables
    const ProductReadHandler = (event) => {
        setDefaultProductValue(event.target.value);
    };

    const CategoryReadHandler = (event) => {
        setDefaultCategoryValue(event.target.value);
    };

    const CompanyReadHandler = (event) => {
        setDefaultCompanyValue(event.target.value);
    };

    const SortReadHandler = (event) => {
        setDefaultSortValue(event.target.value);
    };

    const ShippingChangeHandler = (event) => {
        setDefaultShippingValue(event.target.checked);
    };

    const rangeChangeHandler = (event) => {
        setDefaultRangeValue(event.target.value);
    };

    // Event handler for form submission
    const formSubmitHandler = (event) => {
        event.preventDefault();
        // Dispatch the action to validate the form input and filter products
        dispatch(
            cartAction.formValidateChecker({
                category: defaultCategoryValue,
                price: defaultRangeValue,
                company: defaultCompanyValue,
                sort: defaultSortValue,
                shippingFees: defaultShippingValue,
                productInput: defaultProductValue,
            })
        );
    };

    // Event handler to reset the form and its state variables
    const buttonResetHandler = () => {
        // Dispatch the action to reset the form in the Redux store
        dispatch(cartAction.resetForm());
        // Reset state variables to their initial values
        setDefaultRangeValue('500');
        setDefaultProductValue('');
        setDefaultCategoryValue('all');
        setDefaultCompanyValue('all');
        setDefaultSortValue('a-z');
        setDefaultShippingValue(false);
    };
    return(
        <form onSubmit={formSubmitHandler}>
        <div className=" bg-customLightBlue rounded-lg w-full h-56 p-4 md:w-[40rem] md:h-[16rem] lg:w-[45rem] lg:h-[18rem]">
            <div className="flex md:w-[36rem] lg:w-[42rem]">
            <div className="flex flex-col w-56 ml-8 md:w-[7rem] lg:w-[9rem]">
            <label className="p-2 capitalize text-sm" htmlFor="ProductSearch">search product</label>
            <input className=" rounded-lg border border-slate-400 h-8 p-4" type="search"  name="ProductSearch" id="ProductSearch" value={defaultProductValue} onChange={ProductReadHandler} />
            </div>
            <div className="flex flex-col w-56 ml-8 md:w-[7rem] lg:w-[9rem]">
            <label className="p-2 capitalize text-sm " htmlFor="category">select category</label>
            <select className=" rounded-lg border border-slate-400 h-8 font-semibold pl-2" type="search"  name="category" id="category" value={defaultCategoryValue} onChange={CategoryReadHandler}>
                <option value="all">all</option>
                <option value="Tables">Tables</option>
                <option value="Chairs">Chairs</option>
                <option value="Kids">Kids</option>
                <option value="Sofas">Sofas</option>
                <option value="Beds">Beds</option>
            </select>
            </div>
            <div className="flex flex-col w-56 ml-8 md:w-[7rem] lg:w-[9rem]">
            <label className="p-2 capitalize text-sm "  htmlFor="company">select company</label>
            <select className=" rounded-lg border border-slate-400 h-8 font-semibold pl-2" type="search"  name="company" id="company" value={defaultCompanyValue} onChange={CompanyReadHandler}>
            <option value="all">all</option>
                <option value="Modenza">Modenza</option>
                <option value="Luxora">Luxora</option>
                <option value="Artifex">Artifex</option>
                <option value="Comfora">Comfora</option>
                <option value="Homestead">Homestead</option>
            </select>
            </div>
            <div className="flex flex-col w-56 ml-8 md:w-[7rem] lg:w-[9rem]">
            <label className="p-2 capitalize text-sm md:h-[3.5rem]" htmlFor="sort">sort by</label>
            <select className=" rounded-lg border border-slate-400 h-8 font-semibold pl-2" type="search"  name="sort" id="sort" value={defaultSortValue} onChange={SortReadHandler}>
                <option value="a-z<">a-z</option>
                <option value="z-a">z-a</option>
                <option value="high price">high price first</option>
                <option value="low price">low price first</option>
            </select>
            </div>
            </div>
            <div className="flex mt-10 md:w-[36rem] lg:w-[38rem]">
            <div className="flex flex-col w-56 ml-8 md:w-[7rem] lg:w-[9rem]">
            <div className="flex justify-between">
                <label className=" capitalize" htmlFor="price">select price</label>
                <p>${defaultRangeValue}</p>
            </div>
            <input className="" type="range" name="price" min='0' max='500' step='50' id="price" value={defaultRangeValue}  onChange={rangeChangeHandler} />
            <div className="flex justify-between mt-2">
                <p className="text-xs font-bold">0</p>
                <p className=" text-xs font-bold" >Max: $500</p>
            </div>
            </div>
            <div className="flex flex-col w-56 ml-8 md:w-[7rem] lg:w-[9rem]">
            <div className="flex flex-col justify-center">
            <label className="p-2 capitalize text-sm  text-center " htmlFor="free shipping">free shipping</label>
            <input className=" rounded-md border border-slate-400 h-5 " type="checkbox"  name="free shipping" id="free shipping" value={defaultShippingValue} onChange={ShippingChangeHandler}/>
            </div>
            </div>
            <div className="flex flex-col w-56 ml-8 justify-end md:w-[7rem] lg:w-[9rem]">
            <button className=" rounded-lg border bg-customLightAqua hover:bg-customDarkAqua h-8 uppercase text-white md:mb-[2rem]">search</button>
            </div>
            <div className="flex flex-col w-56 ml-8 justify-end md:w-[7rem] lg:w-[9rem]">
            <button className=" rounded-lg border bg-pink-500 hover:bg-pink-600 h-8 uppercase text-white md:mb-[2rem]" type="button"  onClick={buttonResetHandler}>Reset</button>
            </div>
            </div>
        </div>
    </form>
    )
}


export default CustomizedForm