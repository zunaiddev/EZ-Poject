import topRight from "../assets/topRight.svg";
import bottomLeft from "../assets/bottomLeft.svg";
import SideImage from "./SideImage.tsx";
import ContactForm from "./ContactForm.tsx";


function MainComponent() {
    return (
        <div
            className="min-h-lg flex justify-center items-center flex-wrap px-6 gap-10 w-full h-screen bg-[url(/src/assets/mainBg.jpg)] relative">
            <p className="w-full max-w-sm min-w-sm">Whether you have an idea, a question, or simply want to
                explore
                how V can
                work
                together, core just a
                message away. Let’s catch up over coffee. Great stories always begin with a good conversation
            </p>
            <div className="w-full max-w-xl min-w-sm space-y-8 flex flex-col items-center">
                <h1 className="text-3xl font-bold">Join the Story</h1>
                <p>Ready to bring your vision to life? Let’s talk.</p>
                <ContactForm/>
                <div className="space-x-5">
                    <a href="#" target="_blank" className="text-orange-500 font-bold">www.google.com</a>
                    <a href="#" target="_blank" className="text-orange-500 font-bold">www.google.com</a>
                </div>
            </div>
            <SideImage src={topRight}/>
            <SideImage src={bottomLeft} position="bottom"/>
        </div>
    );
}

export default MainComponent;