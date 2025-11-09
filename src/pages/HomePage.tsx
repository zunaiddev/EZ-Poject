import Container from "../component/Container.tsx";
import homeImg from "../assets/homeImg.png";
import logo from "../assets/logo.svg";

function HomePage() {
    return (
        <Container className="flex justify-center items-center gap-20 p-5 flex-wrap">
            <div className="w-100 h-100 relative flex items-center justify-center">
                <img src={homeImg} alt="Home"/>
                <img className="absolute size-35" src={logo} alt="Logo"/>
            </div>
            <div className="flex flex-col gap-10 justify-center items-center max-w-sm">
                <h1 className="max-w-sm text-3xl text-center">
                    Varnan is where stories find their voice
                    and form
                </h1>
                <h2 className="text-orange-500 font-bold text-lg">Films . Brands . Art</h2>
                <p className="text-center text-[13px] max-w-80">
                    Since 2009, Vive been
                    telling stories - stories of people, their journeys,
                    and the places that shape them.
                    Some begin in polished boardrooms,
                    others in humble village squares. But every story starts the same
                    way - by listening with intention.
                    V believes it takes trust, patience, and an eye for the unseen to
                    capture what truly matters.
                    V doesn’t just tell stories - V honors them.
                </p>
            </div>
        </Container>
    );
}

export default HomePage;