import React from "react";
import Experience from "../../components/experience/Experience";
import "./meetme.css";
import chris from "../../assets/Chris.jpg";
function Meetme() {
  const data = [
    {
      title: "work experience",
      subTitle: "- Presently I've been involved in the following ",
      date: "2018",
      details: [
        "Create visual concepts and user journeys for roduct that launches and features",
        "Create and sometimes lead the design implementation of product social media branding effort",
        "Create logos, chart work , line art, etc",
        "Create and /or manipulating grahic elements (photos, logos, themes, etc.) for client's use",
        "Work with management and editorial to determine the best way to tell each story",
        "Execute design layouts and revisions according to creative direction <br/> Manipulate photographs for basic com work such as scanning and printing",
        "Coordinated the photo session for local film shooting sessions",
      ],
    },
    {
      title: "education",
      subTitle: "- OND. CIVIL ENGINNERING",
      date: "2019",
      details: ["Fedral Polytechnic, Idah Civil Engineering (OND)"],
    },
    {
      title: "hobbies and interests",

      details: [
        "Socialising with friends and family, watching TV (BBC Cli, news and documentaries), playing football on a weekly bases, reading  non-fiction books, solving puzzles, singing and writing songs and computing (creating and designing products).",
      ],
    },
  ];
  return (
    <div className="meet">
      <div className="profile">
        <h2>
          Hi, I'm <span>Monte Christian</span> a product and visual designer
          base in Kaduna, Nigeria.
        </h2>
        <img src={chris} alt="profile" />
      </div>
      {data.map((p) => (
        <Experience
          title={p.title}
          details={p.details}
          date={p.date}
          subTitle={p.subTitle}
        />
      ))}
    </div>
  );
}

export default Meetme;
