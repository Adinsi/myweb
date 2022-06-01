import React, { Component } from "react";
import ProgressBar from "../progress/ProgressBar";
export default class Langue extends Component {
  state = {
    langague: [
      {
        id: 1,
        value: "JAVASCRIPT",
        xp: -10,
      },
      {
        id: 2,
        value: "CSS",
        xp: 10,
      },

      {
        id: 3,
        value: "PHP",
        xp: -50,
      },
    ],

    framework: [
      { id: 1, value: "React", xp: -40 },
      { id: 2, value: "Bootstrap", xp: -50 },
      { id: 3, value: "Sass", xp: -20 },
    ],
  };
  render() {
    let { langague, framework } = this.state;
    return (
      <div className="languagesFrameworks">
        <ProgressBar
          language={langague}
          titre="Langague"
          className="languageDisplay"
        />
        <ProgressBar
          language={framework}
          titre="Framework & bibiotheque"
          className="frameworkDisplay"
        />
      </div>
    );
  }
}
