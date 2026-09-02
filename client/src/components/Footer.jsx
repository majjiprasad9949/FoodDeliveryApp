import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* Brand */}

        <div className="footer-brand">

          <h2>FoodExpress</h2>

          <p>
            Delicious food delivered fast
            right to your doorstep.
          </p>

        </div>


        {/* Company */}

        <div className="footer-column">

          <h3>Company</h3>

          <a href="#">About Us</a>

          <a href="#">Careers</a>

          <a href="#">Contact Us</a>

          <a href="#">Help Center</a>

        </div>


        {/* Explore */}

        <div className="footer-column">

          <h3>Explore</h3>

          <a href="#">Restaurants</a>

          <a href="#">Popular Dishes</a>

          <a href="#">Offers</a>

          <a href="#">Categories</a>

        </div>


        {/* Social */}

        <div className="footer-column">

          <h3>Follow Us</h3>

          <a href="#">Instagram</a>

          <a href="#">Facebook</a>

          <a href="#">Twitter</a>

          <a href="#">YouTube</a>

        </div>

      </div>


      <div className="footer-bottom">

        <p>
          © 2026 FoodExpress. All rights reserved.
        </p>

      </div>

    </footer>
  );
}

export default Footer;