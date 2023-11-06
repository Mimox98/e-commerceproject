import { Link } from "react-router-dom";

function RegisterPage() {
    return (
        <section className="mx-auto w-[24rem] h-[30rem] rounded-lg mt-24 shadow-[0_1px_2px_0_rgba(60,64,67,0.3),0_2px_6px_2px_rgba(60,64,67,0.15)] md:w-[19rem]">
            <div className="flex flex-col p-4 w-4/5 mx-auto">
                <div className="text-3xl text-customNavy font-bold h-16 mt-4 mx-auto">Register</div>
                <div className="mb-4">
                    <label className="d-block" htmlFor="Username">Username</label>
                    <input className="h-[2.5rem] w-full border-2 border-solid border-slate-200 rounded-lg p-2" type="text" id="Username" />
                </div>
                <div className="mb-8">
                    <label className="d-block" htmlFor="Email">Email</label>
                    <input className="h-[2.5rem] w-full border-2 border-solid border-slate-200 rounded-lg p-2" type="text" id="Email" />
                </div>
                <div className="mb-8">
                    <label className="d-block" htmlFor="password">Password</label>
                    <input className="h-[2.5rem] w-full border-2 border-solid border-slate-200 rounded-lg p-2" type="password" id="password" />
                </div>
                <button className="bg-[#0069e0] disabled:bg-[#0069e0] rounded-lg p-4 text-customBluefont mb-4 disabled flex justify-around relative group">
                    <svg className="inline ml-8 md:ml-[1rem]" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10"></circle>
                        <line x1="15" y1="9" x2="9" y2="15"></line>
                        <line x1="9" y1="9" x2="15" y2="15"></line>
                    </svg>
                    <div className="inline mr-20 ml-auto md:mr-[4rem]">Register</div>
                    <svg className="hidden group-hover:inline absolute inset-[-10rem] left-8" xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 24 24" fill="#FFFFFF" stroke="#000000" strokeWidth="0.2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                        <text fontSize='2' strokeWidth='0' fill="#000000" x='4' y='6'>The feature</text>
                        <text fontSize='2' strokeWidth='0' fill="#000000" x='4' y='9'>is currently</text>
                        <text fontSize='2' strokeWidth='0' fill="#000000" x='4' y='12'>not available!</text>
                    </svg>
                </button>
                <div className="text-center">Already a member? <Link to={'/login'}><div className="inline text-[#0069e0] hover:text-blue-800 hover:solid hover:border-blue-800 hover:border-b-2">Login</div></Link></div>
            </div>
        </section>
    );
}

export default RegisterPage;
