import React from "react";
import "./About.css";

// private route (about us page design with the medicare hospital's contents and images)
const About = () => {
  return (
    <div className="about-container">
      <h2 className="text-primary">The History Of The Modern Hospital</h2>
      <small className="fw-bold">
        Published by State Govt. on Friday, May 11, 2018 | Features
      </small>
      <div className="contents-container">
        <p>
          As with medical knowledge, medical uniforms, and medical treatments,
          spaces for healing and medicine have evolved through history. Today
          you can visit a private practice or hospital, but where did patients
          from the past go when they were sick?
        </p>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0oYTfHBeBqASehmTcJaPCygzC_aV-S1w7Cw&usqp=CAU"
          alt=""
        />
      </div>
      <div className="contents-container">
        <p>
          In the ancient world, hospitals did not exist as they do today.
          Illnesses were often considered to be connected to the mind and
          spirit, and treatment was more spiritual than physical. Egyptian
          “sleeping temples” have been discovered that date back to 2000 years
          BC, where patients would be treated by priests through methods such as
          hypnosis and chanting.
        </p>
      </div>
      <div className="contents-container">
        <p>
          Although the ancient Greeks are considered by most to be the founders
          of ‘rational’ medicine,there were no designated institutions for the
          practice of medicine as we know them today. Physicians and healers
          would visit upper-classNameName patients in their homes, and sometimes
          even allow a patient to stay at their private residence but the
          closest thing to a hospital in this day were the healing temples of
          Asclepius. One of the earliest known healing temples was built in 430
          BC in Epidaurus, a city in ancient Greece. This temple originated as a
          healing shrine, where a patient would spend the night in hopes of
          being visited in a dream by the Greek god Asclepius. A priest would
          then interpret the dream of the patient and determine a sort of
          treatment. The temple also acted as a sanctuary for seriously ill
          patients to stay. As more temples of healing began to be built
          throughout Greece, the original temple at Epidaurus was expanded by
          Roman emperor Antoninus Pius, who added a 180-room structure to house
          the dying and women in childbirth. These Greek healing temples temples
          were founded by the cult of Asclepius, who worshipped the mythical
          Greek god, often depicted as holding a staff with a snake wrapped
          around it—the modern symbol of the medical profession. Hippocrates,
          the founder of the Hippocratic oath that all doctors must take today,
          was a devotee of Asclepius.
        </p>
        <img
          style={{ width: "45%" }}
          src="https://i.pinimg.com/236x/64/3b/11/643b11edc3e3edabac5466a7e8f651b8--hospital-architecture-healthcare-architecture.jpg"
          alt=""
        />
        <br />
        <small className="fw-bold">Patient Room</small>
      </div>
      <div className="contents-container">
        <p>
          The earliest ‘hospitals’ as we know them today were the Roman military
          hospitals, which consisted of patient rooms built around courtyards.
          Historians believe each room held three patient beds, which indicates
          the earliest concept of ward systems. Public hospitals were still not
          available at this time, but as the Roman Empire began to build its
          foundation upon Christianity, the church began to establish its role
          in caring for ill and injured patients. Many monasteries were
          constructed with wards for poor and sick people, and the great emperor
          Charlemagne decreed that a hospital must be attached to every
          cathedral built in his empire. At this time, around 400 AD these
          religious hospitals provided healthcare to the poor while the upper
          classNameName continued to receive house calls from physicians.{" "}
        </p>
        <p className="contents-container">
          The spread of Christianity played an immense role in expanding
          healthcare provisions for the public. The ward system of these early
          religious institutions, which would house multiple patients in common
          spaces, became the standard layout of public hospitals for hundreds of
          years. The highest quality healthcare facilities of the Middle Ages
          were found in Florence, Italy, where the Roman Catholic healthcare
          wards were known for their quality physicians and clean beds. The
          first secular medical institutions were the London hospitals of St
          Bartholomew's, St Thomas's and St Mary’s—all funded directly by the
          crown under the rule of Kind Henry VIII, who had dissolved all
          Catholic monasteries in the city.
        </p>
      </div>
      <div style={{ marginTop: "40px" }}>
        <h2 className="text-primary mb-4">Our experienced Doctors</h2>
        <div className="row row-cols-1 row-cols-md-3 g-4">
          <div className="col">
            <div className="card">
              <img
                src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Dr. Ashis Sher</h5>
                <p className="card-text">
                  Hello I am Dr. Ashis Sher. I am a Endocrinologist. I have been
                  working for 18 years.
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img
                src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Dr. Ally Meriey Brown</h5>
                <p className="card-text">
                  Hi, I am Dr. Ally Meriey Brown. I am a Psychiatrist. I've got
                  23 years experience.
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img
                src="https://images.unsplash.com/photo-1618498082410-b4aa22193b38?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Dr. John Bob</h5>
                <p className="card-text">
                  Hello This is Dr. John. I have been working 12 years as a
                  Neurologist.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
