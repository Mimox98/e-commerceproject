import StatusPage from "../../ui/StatusPage";

function CheckoutSuccess() {
    // Render a success message with a message and an emoji
    return (
        <StatusPage
            statusMessage={
                <>
                    <div>Your order has been placed successfully!</div>
                    <div>
                        (Don't freak out; it's just a demo website!{" "}
                        <svg
                            className="inline"
                            width="24"
                            height="24"
                            fill="#c24ca8"
                            viewBox="0 0 16 16"
                            data-name="Layer 1"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                            <g
                                id="SVGRepo_tracerCarrier"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            ></g>
                            <g id="SVGRepo_iconCarrier">
                                <title></title>
                                <path d="M7.424,4.427,4.77,3.029l-.47.892.991.522A1.93,1.93,0,0,0,5,5.5C5,6.328,5.448,7,6,7s1-.672,1-1.5a2.319,2.319,0,0,0-.016-.238Z"></path>
                                <path d="M11.7,3.921l-.47-.892-2.654,1.4.44.836A2.281,2.281,0,0,0,9,5.5C9,6.328,9.448,7,10,7s1-.672,1-1.5a1.93,1.93,0,0,0-.291-1.057Z"></path>
                                <path d="M14.149,2.885C15.43,2.538,14.883,0,14.883,0c-.613,1.291-1.4,1.633-1.991,1.68a7.963,7.963,0,0,0-9.784,0C2.519,1.633,1.73,1.291,1.117,0c0,0-.547,2.538.734,2.885a8,8,0,1,0,12.3,0ZM8,15a7,7,0,1,1,7-7A7.008,7.008,0,0,1,8,15Z"></path>
                                <path d="M11.944,8H3A5,5,0,0,0,13,8ZM10,11.3a3.794,3.794,0,0,1-1.529.534V8.986H10ZM6,8.986H7.471v2.842A3.807,3.807,0,0,1,6,11.3Zm-1.73,0H5V10.41A3.879,3.879,0,0,1,4.27,8.986ZM11,10.41V8.986h.73A3.879,3.879,0,0,1,11,10.41Z"></path>
                            </g>
                        </svg>
                        )
                    </div>
                </>
            }
            buttonMessage="Products"
            linkTo="/Products"
        >
            {/* SVG icon for the "Products" button */}
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="100"
                height="100"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#7be00b"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <polyline points="9 11 12 14 22 4"></polyline>
                <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
            </svg>
        </StatusPage>
    );
}

export default CheckoutSuccess;
