import React from "react";
import "./Dropdown.css";

export default function Dropdown() {
  return (
      <nav>
        <div className="dropdown">
          <button>
            <a href="/" className="aHome">
              HOME
            </a>
          </button>

          <div className="projects">
            <button>MAKEUP</button>
            <ul>
              <li>
                <a href="/products">Lipstick</a>
              </li>
              <li>
                <a href="/products">Crayon Lipstick</a>
              </li>
              <li>
                <a href="/products">Liquid Lipstick</a>
              </li>
              <li>
                <a href="/products">Hi-Shine Lipstick</a>
              </li>
              <li>
                <a href="/products">Lip Gloss</a>
              </li>
              <li>
                <a href="/products">Lip Blam</a>
              </li>
            </ul>
          </div>

          <div className="projects">
            <button>HAIR CARE</button>
            <ul>
              <li>
                <a href="/products">Shampoo</a>
              </li>
              <li>
                <a href="/products">Conditioner</a>
              </li>
              <li>
                <a href="/products">Hair Oil</a>
              </li>
              <li>
                <a href="/products">Serum</a>
              </li>
              <li>
                <a href="/products">Hair Mask</a>
              </li>
              <li>
                <a href="/products">Combos</a>
              </li>
            </ul>
          </div>
          <div className="projects">
            <button>SKIN CARE</button>
            <ul>
              <li>
                <a href="/products">Maisturizer</a>
              </li>
              <li>
                <a href="/products">Night Cream</a>
              </li>
              <li>
                <a href="/products">Eye Cream</a>
              </li>
              <li>
                <a href="/products">Body Lotion</a>
              </li>
              <li>
                <a href="/products">Serum</a>
              </li>
              <li>
                <a href="/products">Sunscreen</a>
              </li>
              <li>
                <a href="/products">cleanser</a>
              </li>
              <li>
                <a href="/products">Face Wash</a>
              </li>
              <li>
                <a href="/products">Exfoliator & Scrub</a>
              </li>
            </ul>
          </div>

          <div className="projects">
            <button>SANITIZING CARE</button>
            <ul>
              <li>
                <a href="/products">Sanitizing Wipes</a>
              </li>
              <li>
                <a href="/products">Hand Sanitizer</a>
              </li>
              <li>
                <a href="/products">Sanitizing Kits</a>
              </li>
              <li>
                <a href="/products">Sanitizing Spray</a>
              </li>
            </ul>
          </div>
          <div className="projects">
            <button>COLLECTION</button>
            <ul>
              <li>
                <a href="/products">MyGlamm</a>
              </li>
              <li>
                <a href="/products">SUPERFOODS</a>
              </li>
              <li>
                <a href="/products">Treat Love Care</a>
              </li>
              <li>
                <a href="/products">Clean Beauty</a>
              </li>
              <li>
                <a href="/products">SkinCare</a>
              </li>
              <li>
                <a href="/products">Manish Malhotra</a>
              </li>
            </ul>
          </div>

          <div>
            <button>REWARDS</button>
          </div>
          <div>
            <button>MYGLAMM STUDIO</button>
          </div>
          <div >
            <button>OFFERS</button>
          </div>
        </div>
      </nav>
  );
}
