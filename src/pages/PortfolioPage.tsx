import Container from "../component/Container.tsx";
import portfolio from "../assets/portfolio.png";
import cam from "../assets/portfolioCam.svg";
import FloatingImage from "../component/FloatingImage.tsx";

function PortfolioPage() {
    return (
        <>
            <Container className="flex justify-center items-center flex-col gap-5 p-5">
                <h1 className="font-bold text-xl">The Highlight Reel</h1>
                <h3 className="font-semibold">Watch the magic we’ve captured.</h3>
                <div className="mt-3 w-full max-w-xl">
                    <img src={portfolio} alt="Portfolio"/>
                </div>
            </Container>
            <FloatingImage src={cam} className="left-10 top-1/3 max-w-40"/>
        </>
    );
}

export default PortfolioPage;