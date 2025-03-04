import React from "react";
import "../CSS/Home.css"; // Importing the CSS file

const Home = () => {
  return (
    <div>
      {/* Welcome Section */}
      <section className="welcome-section">
        <h1>Welcome to BeeKeeping Platform</h1>
        <p>Promoting sustainable beekeeping through technology and innovation.</p>
      </section>

      
      {/* Call-to-Action */}
      <section className="cta">
        <button>Join Our Community</button>
      </section>

      {/* Project Overview */}
      <section className="section">
        <h2>Project Overview</h2>
        <p>Our platform enhances hive management through continuous monitoring and data-driven insights.</p>
      </section>

      {/* Mission and Vision */}
      <section className="section">
        <h2>Our Mission & Vision</h2>
        <p>Empowering beekeepers with sustainable solutions through technology and data analytics.</p>
      </section>

      {/* User Testimonials */}
      <section className="section">
        <h2>What Beekeepers Say</h2>
        <blockquote className="testimonial">"This platform transformed the way I manage my beehives!"</blockquote>
      </section>

      {/* Featured Resources */}
      <section className="section">
        <h2>Featured Resources</h2>
        <ul className="list">
          <li>Beginner's Guide to Beekeeping</li>
          <li>Hive Management Best Practices</li>
          <li>Advanced Predictive Analysis Tools</li>
        </ul>
      </section>

      {/* Latest News and Updates */}
      <section className="section">
        <h2>Latest News</h2>
        <p>Join our upcoming webinar on beekeeping innovations.</p>
      </section>

      {/* Visual Gallery */}
      <section className="section">
        <h2>Beekeeping in Action</h2>
        <div className="gallery">
          <img src="/assets/beehive1.jpg" alt="Beehive" />
          <img src="/assets/beekeeping2.jpg" alt="Beekeeper" />
        </div>
      </section>

      {/* Blog Highlights */}
      <section className="section">
        <h2>Latest Blog Posts</h2>
        <p>Explore tips, trends, and news in beekeeping.</p>
      </section>

      {/* Quick Start Guide */}
      <section className="section">
        <h2>How to Get Started</h2>
        <ul className="list">
          <li>Create an account</li>
          <li>Set up your hive monitoring dashboard</li>
          <li>Explore data-driven insights</li>
        </ul>
      </section>

      {/* Community Section */}
      <section className="community-section">
        <button>Join Community Discussions</button>
      </section>

      {/* Social Media */}
      <section className="social-media">
        <h2>Follow Us</h2>
        <div className="social-links">
          <a href="#" className="facebook">Facebook</a>
          <a href="#" className="twitter">Twitter</a>
          <a href="#" className="youtube">YouTube</a>
        </div>
      </section>

      {/* Poll Section */}
      <section className="section">
        <h2>Poll: Best Beekeeping Practice?</h2>
        <form className="poll-form">
          <input type="radio" name="poll" value="organic" /> Organic Beekeeping <br />
          <input type="radio" name="poll" value="monitoring" /> Tech-Driven Monitoring <br />
          <button type="submit">Submit Vote</button>
        </form>
      </section>

      {/* Upcoming Events */}
      <section className="upcoming-events">
        <h2>Upcoming Events</h2>
        <p>Join our next webinar on sustainable beekeeping!</p>
      </section>

      {/* Resource of the Month */}
      <section className="section">
        <h2>Resource of the Month</h2>
        <p>Check out our exclusive guide on hive inspections.</p>
      </section>

      {/* FAQ Section */}
      <section className="section">
        <h2>FAQs</h2>
        <p>Got questions? Find quick answers here.</p>
      </section>

      {/* Newsletter Signup */}
      <section className="section">
        <h2>Stay Updated</h2>
        <input type="email" placeholder="Enter your email" />
        <button>Subscribe</button>
      </section>

      {/* Contact Section */}
      <section className="contact-section">
        <h2>Need Help?</h2>
        <p>Email us at: support@beekeeping.com</p>
      </section>
    </div>
  );
};

export default Home;
