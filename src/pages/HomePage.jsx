import { useEffect } from "react";
import { gsap } from "gsap";
import "./HomePage.css";

const HomePage = () => {
    useEffect(() => {
        gsap.from(".headline", { opacity: 0, y: -50, duration: 1 });
        gsap.from(".subheadline", { opacity: 0, y: 50, duration: 1, delay: 0.5 });
        gsap.from(".cta-buttons button", {
            opacity: 0,
            scale: 0.8,
            duration: 0.5,
            stagger: 0.3,
            delay: 1,
        });
    }, []);

    return (
        <div className="homepage">
            <div className="content">
                <h1 className="headline">Welcome to My Portfolio!</h1>
                <h2 className="subheadline">
                    Hi, I&apos;m Gaurav Kumar, a passionate Software Engineer.
                </h2>
                <div className="cta-buttons">
                    <button>About Me</button>
                    <button>Projects</button>
                    <button>Contact</button>
                </div>
            </div>
            <div className="animated-bg"></div>
        </div>
    );
};

export default HomePage;
