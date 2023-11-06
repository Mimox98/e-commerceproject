import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { uiAction } from "../store/ui-slice";

function Header() {
    // Check if the user is authenticated as a guest
    const isGuestAuthenticated = useSelector(state => state.UiReducer.guestLoginAuthentication);
    const dispatch = useDispatch();

    // Handler for logging out
    const logOutHandler = () => {
        dispatch(uiAction.authenticateAsGuest(false));
    };

    return (
        <header className="container bg-customBlue h-10 px-60 md:w-[47rem] md:pl-[0]">
            <div className="flex justify-end items-center h-[2.25rem] md:justify-end lg:justify-center">
                {/* Display "Sign in / Guest" link when not authenticated */}
                {!isGuestAuthenticated && <Link to={'/login'}><p className="pr-5 text-gray-300 text-sm hover:underline">Sign in / Guest</p></Link>}
                {/* Display the greeting for the authenticated guest */}
                {isGuestAuthenticated && <span className="pr-5 text-gray-300 text-sm">Hello, demo user</span>}
                {/* Display "Create Account" link when not authenticated */}
                {!isGuestAuthenticated && <Link to={'/register'}><p className="text-gray-300 text-sm hover:underline">Create Account</p></Link>}
                {/* Display "LOG-OUT" button when authenticated */}
                {isGuestAuthenticated && (
                    <Link to={'/Loggedoutsuccessfully'}>
                        <p className="text-blue-600 text-xs p-1 rounded-lg border-2 border-blue-600 border-solid font-bold hover:text-white hover:bg-blue-600" onClick={logOutHandler}>
                            LOG-OUT
                        </p>
                    </Link>
                )}
            </div>
        </header>
    );
}

export default Header;
