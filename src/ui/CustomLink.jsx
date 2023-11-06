import { Link } from "react-router-dom"

function CustomLink(props){
    return(
        <Link to={props.idItem} id={props.idItem}  className={` py-2 px-4 m-1 rounded-lg ${props.customClass} ${props.customClass === props.idItem? ' bg-customNavy hover:bg-customNavy text-slate-300' : 'hover:bg-slate-300'} `} >
            {props.children}
        </Link>
    )
}

export default CustomLink