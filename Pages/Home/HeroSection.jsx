import { Link } from 'react-scroll';


export default function HeroSection() {
    return (
      <section id="heroSection" className="hero--section">
        <div className="hero--section--content--box">
          <div className="hero--section--content">
            <p className="section--title">Hey, I'm Vinayak</p>
            <h1 className="hero--section--title">
              <span className="hero--section-title--color">Full Stack</span>{" "}
              <br />
              Developer
            </h1>
            <p className="hero--section-description">
            I design and develop web applications of all sizes, keen to learn more in creating stylish and modern websites. 
              <br /> Specialized in frontend and backend with Javascript frameworks.
            </p>
          </div>
            <Link
            activeClass="navbar--active-content"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            to="Contact"
            className="text-md">
                <button className="btn btn-primary">Get In Touch</button>
            </Link>
        </div>
        <div className="hero--section--img">
          <img src="./img/hero_img.jpg" alt="Hero Section" />
        </div>
      </section>
    );
  }