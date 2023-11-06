import { useDispatch } from "react-redux";
import { uiAction } from "../../store/ui-slice";

function Summary() {
    const dispatch = useDispatch();

    // Dispatch an action to modify the navigation tab to "About"
    dispatch(uiAction.modifiyNavigationTab({ navigationHandler: 'About' }));

    return (
        <div className="container mx-auto px-56 mt-24 h-80 md:w-[45rem] ">
            <p className="text-6xl text-center font-bold text-customNavyLight">
                We love <p className="text-4xl rounded-lg py-[1rem] px-[1.5rem] inline bg-customLightAqua text-customBluefont">M-comfy</p>
            </p>
            <div className="mt-14 w-3/4 mx-auto md:w-[29rem]">
                <p className="text-lg md-text-[1.5rem] md:leading-[2.75rem]">
                    {/* Placeholder text for the summary */}
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore quae quam blanditiis vitae, dolor non eveniet ipsum voluptatibus, quia optio aut! Perferendis ipsa cumque ipsam nostrum reprehenderit ad illo sed officiis ea tempore! Similique eos minima sit porro, ratione aspernatur!
                </p>
            </div>
        </div>
    );
}

export default Summary;
