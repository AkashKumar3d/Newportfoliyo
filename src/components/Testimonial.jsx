
import React from "react";

const Testimonial = () => {
  return (
    <div id="testimonial">
      <h2>Testimonial</h2>

      <section>
        <TestimonialCard
          name={"Deepak das "}
          feedback={"Your technical skill is so good ."}
        />

        <TestimonialCard
          name={"Prem"}
          feedback={
            "Wow what a portfolio, doesn't expected to you"
          }
        />

        <TestimonialCard
          name={"Amrita yadav"}
          feedback={"Amazing seems like you should the Google CEO"}
        />
      </section>
    </div>
  );
};

const TestimonialCard = ({ name, feedback }) => (
  <article>
    <img
      src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
      alt="User"
    />
    <h4>{name}</h4>
    <p>{feedback}</p>
  </article>
);

export default Testimonial;