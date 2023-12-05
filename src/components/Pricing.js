function Pricing() {
  return (
    <div className="pricing_section">
      <div className="section_heading">
        <p data-aos="fade-in" data-aos-duration="1000">
          <span>💲</span>PRICING
        </p>
      </div>

      <div className="pricing_text">
        <h1 data-aos="fade-up" data-aos-duration="1000">
          Select your ideal <span>Pricing</span> plan
        </h1>
        <p data-aos="fade-in" data-aos-duration="1000">
          At Manage Wise, we believe in providing you with pricing plans that
          adapt to your unique needs.
        </p>
      </div>

      <div className="pricing_card_container">
        <div className="pricing_card first_card" data-aos="fade-up" data-aos-duration="500">
          <p className="pricing_card_label">FREE</p>
          <h1>
            $0<span> /month</span>
          </h1>
          <div className="specifications">
            <p>
              <i class="fa-solid fa-check"></i>Access to all basic features
            </p>
            <p>
              <i class="fa-solid fa-check"></i>Reporting and analytics
            </p>
            <p>
              <i class="fa-solid fa-check"></i>Up to 5 individual users
            </p>
            <p>
              <i class="fa-solid fa-check"></i>Chat and email support
            </p>
          </div>
          <button>Get Started</button>
        </div>

        <div className="pricing_card middle_card" data-aos="fade-up" data-aos-duration="800">
          <p className="pricing_card_label">STANDARD</p>
          <h1>
            $25<span> /month</span>
          </h1>
          <p>
            <i class="fa-solid fa-check"></i>Access to all basic features
          </p>
          <p>
            <i class="fa-solid fa-check"></i>Reporting and analytics
          </p>
          <p>
            <i class="fa-solid fa-check"></i>Up to 5 individual users
          </p>
          <p>
            <i class="fa-solid fa-check"></i>Chat and email support
          </p>
          <p>
            <i class="fa-solid fa-check"></i>3+ integrations
          </p>
          <p>
            <i class="fa-solid fa-check"></i>Account performance reporting
          </p>
          <button>Get Started</button>
        </div>

        <div className="pricing_card third_card" data-aos="fade-up" data-aos-duration="1100">
          <p className="pricing_card_label">STANDARD</p>
          <h1>
            $25<span> /month</span>
          </h1>
          <p>
            <i class="fa-solid fa-check"></i>Access to all basic features
          </p>
          <p>
            <i class="fa-solid fa-check"></i>Reporting and analytics
          </p>
          <p>
            <i class="fa-solid fa-check"></i>Up to 5 individual users
          </p>
          <p>
            <i class="fa-solid fa-check"></i>Chat and email support
          </p>
          <p>
            <i class="fa-solid fa-check"></i>3+ integrations
          </p>
          <button>Get Started</button>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
