import Alex from "../images/Alex.webp";
import Emily from "../images/Emily.webp";
import Sarah from "../images/Sarah.webp";
import David from "../images/David.webp";

function Testimonials() {
  return (
    <div className="testimonials_section">
      <div className="section_heading">
        <p data-aos="fade-in" data-aos-duration="1000">
          <span>🧡</span>TESTIMONIALS
        </p>
      </div>

      <div className="testimonials_text">
        <h1 data-aos="fade-up" data-aos-duration="1000">
          Hear from our <span>Satisfied</span> clients
        </h1>
        <p data-aos="fade-in" data-aos-duration="1000">
          Discover why our clients love working with us. Read their testimonials
          and learn how we has helped businesses.
        </p>
      </div>

      <div className="testimonial_container">
        <div className="testimonial">
          <div className="client_text">
            <p>
              "I can't imagine running my business without this product. The
              automation features have saved me hours of manual work, allowing
              me to focus on strategic tasks.
            </p>
          </div>
          <div className="client_profile">
            <img src={Alex} alt="Alex" />
            <div className="name_and_position">
              <h4>Alex</h4>
              <p>IT Manager</p>
            </div>
          </div>
        </div>

        <div className="testimonial">
          <div className="client_text">
            <p>
              "Manage Wise transformed our team's productivity. The intuitive
              interface and powerful features have made a significant impact on
              our daily operations"
            </p>
          </div>
          <div className="client_profile">
            <img src={Emily} alt="Alex" />
            <div className="name_and_position">
              <h4>Emily</h4>
              <p>Art Director</p>
            </div>
          </div>
        </div>

        <div className="testimonial">
          <div className="client_text">
            <p>
              "The customer support team behind this product is exceptional.
              They have been incredibly responsive and helpful, addressing any
              questions or concerns promptly.
            </p>
          </div>
          <div className="client_profile">
            <img src={Sarah} alt="Alex" />
            <div className="name_and_position">
              <h4>Sarah</h4>
              <p>Project Manager</p>
            </div>
          </div>
        </div>

        <div className="testimonial">
          <div className="client_text">
            <p>
              "Using this product has been a game-changer for our team. The
              collaboration features and intuitive interface have greatly
              improved our productivity.
            </p>
          </div>
          <div className="client_profile">
            <img src={David} alt="Alex" />
            <div className="name_and_position">
              <h4>David</h4>
              <p>Freelancer</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
