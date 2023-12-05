import Integration from "../images/Integration.webp" 

function Integrations() {
  return (
    <div className="integration_section">
      <div className="section_heading">
        <p data-aos="fade-in" data-aos-duration="1000">
          <span>🔨</span> INTERGRATIONS
        </p>
      </div>

      <div className="integrations_text">
        <h1 data-aos="fade-up" data-aos-duration="1000">
          Enable <span>integration</span> with other popular tools and platforms
        </h1>
        <p data-aos="fade-in" data-aos-duration="1000">
          Seamlessly connect and amplify your workflow by enabling integration
          with a diverse array of widely-used tools and platforms.
        </p>
      </div>

      <div className="integration_image" data-aos="fade-up" data-aos-duration="2000">
        <img src={Integration} alt="integration" />
      </div>
    </div>
  );
}

export default Integrations;
