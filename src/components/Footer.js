import logo from "../images/logo.webp";
import DontMissOutImg from "../images/DontMissOutImg.png";

function DontMissOut() {
  return (
    <div
      className="dont_miss_out_section"
      data-aos="flip-up"
      data-aos-duration="2000"
    >
      <div className="dont_miss_out_text">
        <div className="section_heading">
          <p>
            <span>👋</span>DON'T MISS OUT
          </p>
        </div>

        <h1>
          Unleash your <span>Potential</span> with us
        </h1>
        <p>
          Join our community of ambitious individuals and organizations eager to
          make a difference.
        </p>
        <button>
          Try out now <i class="fa-solid fa-circle-arrow-right"></i>
        </button>
      </div>

      <div className="dont_miss_out_img">
        <h2>
          <span>200+</span> Happy users
        </h2>
        <img src={DontMissOutImg} alt="DontMissOut" />
      </div>
    </div>
  );
}

function SecondaryFooter() {
  return (
    <div className="secondary_footer">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>

      <div className="menu">
        <ul>
          <li>
            <a href="/">Fatures</a>
          </li>
          <li>
            <a href="/">FAQ</a>
          </li>
          <li>
            <a href="/">Pricing</a>
          </li>
          <li>
            <a href="/">Testimonials</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

function PrimaryFooter() {
  return (
    <div className="primary_footer">
      <div className="copyright">
        <p>© 2022 ManageWise, Inc.</p>
      </div>
      <div className="socials">
        <i class="fa-brands fa-square-instagram"></i>
        <i class="fa-brands fa-square-x-twitter"></i>
        {/* <i class="fa-brands fa-linkedin-in"></i> */}
        <i class="fa-brands fa-linkedin"></i>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <DontMissOut />
      <SecondaryFooter />
      <PrimaryFooter />
    </footer>
  );
}

export default Footer;
