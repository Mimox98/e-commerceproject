import { Link } from "react-router-dom";


function StatusPage(props){


    return(
        <div className="container mx-auto px-56 mt-8 md:ml-[10rem]">
            <div className="flex flex-col items-center	">
            {props.children}
            <div className="mt-8 text-4xl font-semibold md:w-[23rem]">{props.statusMessage}</div>
            <div className="mt-10 mb-8 md:w-[13rem]">
                <Link to={'/'}><button className="rounded-lg bg-customLightAqua hover:bg-customDarkAqua p-2 text-white mr-4">Home Page</button></Link>
                <Link to={props.linkTo}><button className="rounded-lg bg-customLightAqua hover:bg-customDarkAqua p-2 text-white">{props.buttonMessage}</button></Link>
            </div>
            </div>
            </div>
    )
}

export default StatusPage;