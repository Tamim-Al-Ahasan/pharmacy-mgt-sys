
// export default function About() {
//     return (
//         <>
//             <h3>This is About Us</h3>
//         </>
//     )
// }

import React from 'react';
import discount from "./image/discount.png";
import fast_purchase from "./image/fast_purchase.png"
import widerange from "./image/widerange.png"

const AboutPage = () => {
  return (
    <div style={{ backgroundColor: 'white', padding: '20px' }}>
      <h1>About Us</h1>
      <p>
        We are dedicated to supplying high-quality medicines to physical stores. We
        acquire our stocks from different reputable brands. Our mission is to provide
        efficient services to ensure a seamless flow of pharmaceutical products.
      </p>

      <div style={{ marginTop: '20px', backgroundColor: '#e6f7ff', padding: '10px' }}>
        <h2>Our Services</h2>

        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
          <div style={{ textAlign: 'center' }}>
            <img src={fast_purchase} alt="Fast and Easy Purchase" style={{ width: '100px', height: '100px' }} />
            <p>Fast and Easy Purchase</p>
          </div>

          <div style={{ textAlign: 'center' }}>
            <img src={widerange} alt="Wide Range of Medicine" style={{ width: '100px', height: '100px' }} />
            <p>Wide Range of Medicine</p>
          </div>

          <div style={{ textAlign: 'center' }}>
            <img src={discount} alt="Discounts" style={{ width: '100px', height: '100px' }} />
            <p>Discounts</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
