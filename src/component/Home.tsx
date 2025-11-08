import logo from "../assets/logo.svg";
import Container from "./Container.tsx";

function Home() {
    return (
        <Container>
            <div className="size-full flex justify-center items-center gap-18 flex-wrap p-19">
                <div
                    className="max-h-120 h-full max-w-120 w-full bg-[url(/src/assets/homeImg.png)] bg-cover flex justify-center items-center">
                    <img src={logo} alt="logo" className="w-56"/>
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
            </div>
        </Container>
    );
}

export default Home;