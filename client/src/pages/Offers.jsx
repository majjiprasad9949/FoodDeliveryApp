import { useState } from "react";
import "../styles/Offers.css";

function Offers() {
  const [copiedId, setCopiedId] = useState(null);

  const offers = [
    { id: 1, title: "30% OFF", description: "Get 30% off on your first order.", code: "WELCOME30", minimum: "Minimum order ₹299" },
    { id: 2, title: "₹100 OFF", description: "Save ₹100 on orders above ₹499.", code: "SAVE100", minimum: "Minimum order ₹499" },
    { id: 3, title: "FREE DELIVERY", description: "Enjoy free delivery on selected restaurants.", code: "FREEDEL", minimum: "Valid on selected restaurants" },
    { id: 4, title: "20% OFF", description: "Get 20% off on your favorite biryani.", code: "BIRYANI20", minimum: "Minimum order ₹399" }
  ];

  const handleCopy = (code, id) => {
    navigator.clipboard.writeText(code).then(() => {
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 1500);
    });
  };

  return (
    <main className="offers-page">
      <section className="offers-header">
        <p className="offers-label">SPECIAL DEALS</p>
        <h1>Delicious Deals Just For You</h1>
        <p>Save more on your favorite food with our exclusive offers.</p>
      </section>

      <section className="offers-container">
        <div className="offers-title">
          <h2>Available Offers</h2>
          <span>{offers.length} offers available</span>
        </div>

        <div className="offers-grid">
          {offers.map((offer) => (
            <div className="offer-card" key={offer.id}>
              <div className="offer-top">
                <span className="discount">{offer.title}</span>
                <span className="tag">FOODIE</span>
              </div>

              <h3>{offer.description}</h3>
              <p className="minimum">{offer.minimum}</p>

              <div className="offer-bottom">
                <div className="coupon">{offer.code}</div>
                <button onClick={() => handleCopy(offer.code, offer.id)}>
                  {copiedId === offer.id ? "Copied!" : "Copy Code"}
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

export default Offers;