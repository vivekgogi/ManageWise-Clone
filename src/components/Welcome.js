import HeroImage from "../images/HeroImage.webp";

function Welcome() {
  return (
    <div className="welcome_section">
      <div className="section_heading">
        <p data-aos="fade-in" data-aos-duration="1000">
          <span>👋</span> WELCOME TO MANAGE WISE!
        </p>
      </div>

      <div className="hero_text">
        <h1 data-aos="fade-up" data-aos-duration="1000">
          Empower your business with <span>Strategic</span> insights
        </h1>
        <p data-aos="fade-in" data-aos-duration="1000">
          Powerful management platform designed to streamline your business
          operations, boost productivity, and drive success
        </p>
      </div>

      <div
        className="hero_buttons"
        data-aos="zoom-in-up"
        data-aos-duration="1000"
      >
        <button className="get_started">
          Get Started <i class="fa-solid fa-circle-arrow-right"></i>
        </button>
        <button className="watch_demo">
          Watch Demo <i class="fa-solid fa-circle-play"></i>
        </button>
      </div>

      <div className="hero_img" data-aos="flip-up" data-aos-duration="8000">
        <img src={HeroImage} alt="HeroImage" />
      </div>
    </div>
  );
}

export default Welcome;
