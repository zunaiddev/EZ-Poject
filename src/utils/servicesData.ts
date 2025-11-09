import art1 from '../assets/Art Curation Icons 01.svg';
import art2 from '../assets/Art Curation Icons 02.svg';
import art3 from '../assets/Art Curation Icons 03.svg';
import art4 from '../assets/Art Curation Icons 04.svg';
import camera1 from '../assets/Camera 01.svg';
import camera2 from '../assets/Camera 02.svg';
import camera3 from '../assets/Camera 03.svg';
import camera4 from '../assets/Camera 04.svg';
import branding1 from '../assets/Branding Vector 01.svg';
import branding2 from '../assets/Branding Vector 02.svg';
import branding3 from '../assets/Branding Vector 03.svg';
import branding4 from '../assets/Branding Vector 04.svg';
import frame1 from "../assets/Frame 31.png";

const serviceData = [
    {
        h1: "\"Filmmaking is a chance to live many lifetimes.\" - Robert Altman",
        desc: "Who says films are just an escape?" +
            "We see them as a way to live many lives - to feel, to explore, and to tell stories that stay. And with each film, we carry new memories and new reasons to keep creating." +
            "V crafts:",
        src: frame1,
        list: ["Documentaries", "Corporate Videos", "2D Animation Videos", "3D Animation Videos"],
        images: [camera1, camera2, camera3, camera4],
    },
    {
        h1: "A brand is a voice, and a product is a souvenir.\" - Lisa Gansky",
        desc: "A brand isn’t just what you see - it’s what you remember, what you carry home, and what you trust. We shape brands that people remember, return to, and fall in love with." +
            "V creates:",
        src: frame1,
        list: [],
        images: [branding1, branding2, branding3, branding4],
    },
    {
        h1: "\"V take art where it belongs, to the people.\" - Vernita Verma",
        desc: "Art isn’t meant to sit on distant walls - it’s meant to breathe, to travel, to belong." +
            "Through every festival, every performance, and every gathering, we help stories find their stage and their people." +
            "V curates:",
        src: frame1,
        list: ["Art Festivals", "Live Performances", "Community Events", "Cultural Storytelling"],
        images: [art1, art2, art3, art4],
    }
]
export {serviceData};