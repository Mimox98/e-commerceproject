import StatusPage from "./ui/StatusPage";

const catPic = 'https://www.searchenginejournal.com/wp-content/uploads/2020/08/404-pages-sej-5f3ee7ff4966b-1280x720.png'


function ErrorPage(){

    return(
        <StatusPage statusMessage={<div className="md:w-[20rem]"><div className="text-center mb-5">It seems like this page doesn't exist</div><img className="w-[39rem] h-[22rem] rounded-lg md:h-[17rem]" src={catPic} alt="catPic" /><div></div> </div>} buttonMessage='Products' linkTo='/Products'><svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="#3e7fba" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg></StatusPage>
    )
}


export default ErrorPage;