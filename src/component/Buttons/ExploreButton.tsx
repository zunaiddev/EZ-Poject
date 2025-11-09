import arrow from "../../assets/Arrow.svg";

function ExploreButton() {
    return (
        <div className="w-full flex justify-center items-center">
            <button className="flex flex-col gap-3">
                <span>Explore Now</span>
                <img src={arrow} alt="Arrow" className="w-27"/>
            </button>
        </div>
    );
}

export default ExploreButton;