import React from "react";

function ProgressBar(props) {
  return (
    <div className="languages">
      <div className={props.className}>
        <h3>{props.titre}</h3>
        <div className="years">
          <span>Annéé d'experience</span>
          <span>6 mois</span>
          <span>1 ans</span>
        </div>
        <div>
          {props.language.map((langue) => {
            let xpYear = 1;
            let progressBar = langue.xp / xpYear + 80 + "%";
            return (
              <div className="languagesList" key={langue.id}>
                <ul>
                  <li>{langue.value}</li>
                  <div
                    className="progressBar"
                    style={{ width: progressBar }}
                  ></div>
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default ProgressBar;
