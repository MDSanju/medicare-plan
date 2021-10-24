import React from "react";

// health tips page design (private route)
const Tips = () => {
  return (
    <div style={{ marginTop: "110px" }}>
      <h2 className="text-primary mb-2">
        Health tips from our experienced doctors!
      </h2>
      <p className="w-75 mx-auto mb-4">
        Without access to healthcare, people are far more at risk. Diseases,
        malnutrition, pregnancy – all can become incredibly dangerous without
        proper help and support.
      </p>
      <h2 className="text-primary text-start mt-5 mb-4 mx-3">
        Make these your habit:
      </h2>
      <div className="row row-cols-1 row-cols-md-3 mx-auto g-4">
        <div className="col">
          <div className="card">
            <img
              src="https://www.helpguide.org/wp-content/uploads/senior-woman-enjoying-healthy-meal-dining-table-at-home.jpg"
              className="card-img-top"
              style={{ height: "250px" }}
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Build Healthy Eating Habits</h5>
              <p className="card-text">
                Be mindful about portions, don't skip meals, avoid unhealthy
                junk foods, make a point to eat healthy nutritious foods, and
                limit snacking. Look at the bad eating habits and replace them
                with their healthy counterparts. Replace pies and cookies with
                fresh fruit. Save snacks for times when you're actually hungry.
              </p>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="card">
            <img
              src="https://www.identitymagazine.net/wp-content/uploads/2018/11/r-810x540.jpg"
              className="card-img-top"
              style={{ height: "250px" }}
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Sleep Continuity</h5>
              <p className="card-text">
                To find out if you’re getting adequate sleep, gauge how you feel
                during the day. “You should feel rested, prepared for the day
                and able to function well – not sleepy or groggy,” Balachandran
                says. Most adults should aim for seven to eight hours of sleep
                each night. You know, this is called healthy sleeping habit.
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <img
              src="https://thebrownidentity.com/wp-content/uploads/2021/04/Exercise-2.jpg"
              className="card-img-top"
              style={{ height: "250px" }}
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">
                At Least Half An Hour Exercise A Day
              </h5>
              <p className="card-text">
                "Doing a brisk walk can burn up to 500 calories per hour," says
                Robert Gotlin, DO, director of orthopaedic and sports
                rehabilitation at Beth Israel Medical Center in New York. Since
                it takes 3,500 calories to lose a pound, you could expect to
                lose a pound for every seven hours you walk, if you did nothing
                else.
              </p>
            </div>
          </div>
        </div>
      </div>
      <h2 className="text-primary text-start mt-5 mb-4 mx-3">
        Try to avoid these:
      </h2>
      <div className="row row-cols-1 row-cols-md-3 mx-auto g-4">
        <div className="col">
          <div className="card">
            <img
              src="https://nfcr.org/wp-content/uploads/2016/10/Dont-Smoke-Cigarettes.jpg"
              className="card-img-top"
              style={{ height: "250px" }}
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Don't Smoke</h5>
              <p className="card-text">
                Make a promise, set a date and stick to it. Sticking to the "not
                a drag" rule can really help. Whenever you find yourself in
                difficulty, say to yourself, "I won't even have a single drag",
                and stick with this until the cravings pass. Think ahead to
                times where it might be difficult, and plan your actions and
                escape routes in advance.
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <img
              src="https://www.renaissancerecoverycenter.com/wp-content/uploads/2016/12/Alcohol-Addiction-1024x682.jpg"
              className="card-img-top"
              style={{ height: "250px" }}
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Avoid Harmful Use Of Alcohol</h5>
              <p className="card-text">
                Long-Term Health Risks. Over time, excessive alcohol use can
                lead to the development of chronic diseases and other serious
                problems including: High blood pressure, heart disease, stroke,
                liver disease, and digestive problems. Cancer of the breast,
                mouth, throat, esophagus, voice box, liver, colon, and rectum.
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <img
              src="https://www.samhealth.org/-/media/SHS/Images/325-Nutrition/CO-Callout%20_360%20x%20300_/salt-vs-sugar-325-CO.jpg"
              className="card-img-top"
              style={{ height: "250px" }}
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Consume Less Salt And Sugar</h5>
              <p className="card-text">
                Too many salty, sugary foods in childhood may lead to a
                lower-quality diet over a lifetime. Elevated Blood Pressure:
                Children who consume high levels of sodium are 40% more likely
                to have high blood pressure, which is linked to high blood
                pressure in adulthood as well as premature heart disease and
                death.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tips;
