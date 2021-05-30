import React from "react";

import projectList from "../ProjectList";

import ProjectSummary from "../components/Work/WorkItem/ProjectSummary";
import LargeBox from "../components/Work/WorkItem/ImageBox/LargeBox";
import MediumBox from "../components/Work/WorkItem/ImageBox/MediumBox";
import UpMargin from "../components/Assets/UpMargin";
// import SmallBox from "../components/Work/WorkItem/ImageBox/SmallBox";

const ALD = () => {
  const ald = projectList[0];
  return (
    <article className="container">
      <LargeBox background="https://i.imgur.com/G6fuleq.png" />
      <div
        style={{
          width: "700px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignSelf: "center",
        }}
      >
        <ProjectSummary
          title={ald.title}
          company={ald.company}
          year={ald.year}
          summary={ald.summary}
          role={ald.role}
          goal={ald.goal}
        />
        <UpMargin />
        <LargeBox background="https://i.imgur.com/pdhw0fS.png" />
        <article className="container_article">
          <h3 className="font-md font-regular">The Challenge</h3>
          <p className="font-gray">
            There were two challenges that we have to solve.
          </p>
          <p className="font-bold font-gray">
            First, 'How to rotate chamber'. Second, 'Sealing chamber in rotating
            process'.
          </p>
        </article>
        <UpMargin />
        <LargeBox background="https://i.imgur.com/ndH1BGy.jpg" />
        <article className="container_article">
          <h3 className="font-md font-regular">Design</h3>
          <p className="font-gray" style={{ marginBottom: "0.625rem" }}>
            To rotate the chamber, our team determined to use a servo motor and
            internal gears. So we calculated the gear ratio by those formulas.
            Based on the result data we selected internal gears and servo motor
            type.
          </p>
          <p className="font-gray" style={{ marginBottom: "0.625rem" }}>
            O-ring design was not difficult. But we spent a lot of time to think
            magnetic fluid. It's not recommended to use an o-ring with moving
            parts. Because o-ring makes particles by friction. Particles bring
            the critical issue to the wafer. So we have to find material that
            meet two criteria.
          </p>
          <p className="font-bold font-dark__gray">
            1. Don't make any particles
          </p>
          <p className="font-bold font-dark__gray">
            2. Vacuum sealing during rotating chamber.
          </p>
        </article>
        <UpMargin />
        <LargeBox background="https://i.imgur.com/DVwd0yg.jpg" />
        <div className="box_area">
          <MediumBox background="https://i.imgur.com/PWrC0pF.png" />
          <MediumBox background="https://i.imgur.com/qXSVH8A.png" />
          <MediumBox background="https://i.imgur.com/d8qkZih.jpg" />
          <MediumBox background="https://i.imgur.com/LCO4c6v.png" />
        </div>
        <LargeBox background="https://i.imgur.com/E0B7RR3.jpg" />
        <LargeBox background="https://i.imgur.com/iR147O4.jpg" />
        <LargeBox background="https://i.imgur.com/O5r1fuA.jpg" />
      </div>
    </article>
  );
};

export default ALD;