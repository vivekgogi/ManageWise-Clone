function FAQ() {
  return (
    <div className="faq_section">
      <div className="faq_text">
        <div className="section_heading">
          <p data-aos="fade-in" data-aos-duration="1000">
            <span>🙋‍♀️</span> FAQ
          </p>
        </div>
        <h1 data-aos="fade-up" data-aos-duration="1000">
          Need <br />
          <span>Answers?</span>
        </h1>
        <p data-aos="fade-in" data-aos-duration="1000">
          Check out our most commonly asked questions below to find the
          information you need.
        </p>
      </div>

      <div className="q_and_a" data-aos="fade-up" data-aos-duration="2000">
        <details>
          <summary>
            What is Manage Wise and what does it offer?{" "}
            <i class="fa-solid fa-plus"></i>
          </summary>
          Manage Wise is a comprehensive management platform designed to
          streamline your business operations, enhance productivity, and drive
          success. It offers a range of features including task management,
          scheduling, communication tools, analytics, and more.
        </details>

        <details>
          <summary>
            Is Manage Wise suitable for small businesses and larger enterprises{" "}
            alike?
            <i class="fa-solid fa-plus"></i>
          </summary>
          Yes, Manage Wise is designed to cater to the needs of both small
          businesses and larger enterprises. Its scalable features and
          customizable options make it versatile for various business sizes.
        </details>

        <details>
          <summary>
            Can I access Manage Wise from different devices and platforms?{" "}
            <i class="fa-solid fa-plus"></i>
          </summary>
          Yes, Manage Wise offers cross-platform compatibility, allowing you to
          access and use the platform seamlessly on desktops, web browsers, and
          mobile devices.
        </details>

        <details>
          <summary>
            What kind of support options do you offer to users?{" "}
            <i class="fa-solid fa-plus"></i>
          </summary>
          We provide responsive customer support via chat and email to assist
          you with any inquiries, issues, or guidance you may need while using
          Manage Wise.
        </details>

        <details>
          <summary>
            How secure is the data stored within Manage Wise?{" "}
            <i class="fa-solid fa-plus"></i>
          </summary>
          Your data's security is a top priority. Manage Wise employs robust
          data encryption and follows industry best practices to ensure your
          sensitive information is safe and protected.
        </details>
      </div>
    </div>
  );
}

export default FAQ;
