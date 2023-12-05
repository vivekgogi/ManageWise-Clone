import TaskManagement from "../images/TaskManagement.webp";
import FlexibleScheduling from "../images/FlexibleScheduling.webp";
import EasyCommunication from "../images/EasyCommunication.webp";
import Analytics from "../images/Analytics.webp";

function Features() {
  return (
    <div className="features_section">
      <div className="section_heading">
        <p data-aos="fade-in" data-aos-duration="1000">
          <span>🔥</span> PREMIER FEATURES
        </p>
      </div>

      <div className="features_text">
        <h1 data-aos="fade-up" data-aos-duration="1000">
          Discover our product's <span>Capabilities</span>
        </h1>
        <p data-aos="fade-in" data-aos-duration="1000">
          Don't settle for mediocrity - embrace the future of management with
          Manage Wise.
        </p>
      </div>

      <div className="feature_container_1">
        <div className="left_content_box" data-aos="slide-up" data-aos-duration="1000">
          <span>⭐️</span>
          <h4>
            Boost productivity and streamline workflow with us. Enjoy our
            intuitive interface and robust features.
          </h4>
        </div>

        <div className="right_content_box" data-aos="slide-up" data-aos-duration="1500">
          <img src={TaskManagement} alt="TaskManagement" />
          <h3>Smart Task Management</h3>
          <p>Say goodbye to chaos with our smart task management system</p>
        </div>
      </div>

      <div className="feature_container_2">
        <div className="feature_box" data-aos="slide-up" data-aos-duration="500">
          <img src={FlexibleScheduling} alt="FlexibleScheduling" />
          <h3>Flexible Scheduling</h3>
          <p>Stay productive with our flexible scheduling system</p>
        </div>
        <div className="feature_box" data-aos="slide-up" data-aos-duration="800">
          <img src={EasyCommunication} alt="EasyCommunication" />
          <h3>Easy Communication</h3>
          <p>Collaborate seamlessly with your team in real-time</p>
        </div>
        <div className="feature_box" data-aos="slide-up" data-aos-duration="1100">
          <img src={Analytics} alt="Analytics" />
          <h3>Analytics</h3>
          <p>Gain valuable insights with our advanced analytics feature</p>
        </div>
      </div>
    </div>
  );
}

export default Features;
