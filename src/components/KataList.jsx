import React,{ useEffect } from "react";
import data from "../assets/data.json";
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css";
import "prismjs/components/prism-javascript";
import "../index.css";

const KataList = () => {
    useEffect(() => {
        Prism.highlightAll(); 
      }, []);

    return (
        <div className="kata-container">
          <h1 className="kata-title">🚀 Mes Katas CodeWars</h1>
          <div className="kata-list">
            {data.map((kata, index) => (
              <div className="kata-card" key={index}>
                <h2 className="kata-name">{kata.name}</h2>
                <p className="kata-date">{kata.date}</p>
                <p className="kata-description">{kata.description}</p>
                <pre className="kata-code">
                  <code className="language-javascript">{kata.code}</code>
                </pre>
                <div></div>
              </div>
            ))}

          </div>
        </div>
      );
    };

export default KataList;