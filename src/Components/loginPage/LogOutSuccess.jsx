import StatusPage from "../../ui/StatusPage";

function LogOutSuccess() {
    return (
        <StatusPage linkTo='/Login' statusMessage='You are successfully logged out!' buttonMessage='Login'>
            {/* SVG icon for visual representation */}
            <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="#7be00b" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                <polyline points="22 4 12 14.01 9 11.01"></polyline>
            </svg>
        </StatusPage>
    );
}

export default LogOutSuccess;
