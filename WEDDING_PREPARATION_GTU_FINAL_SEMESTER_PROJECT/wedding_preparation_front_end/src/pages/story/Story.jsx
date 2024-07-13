import React, { useEffect, useState } from "react";

const Storys = () => {
  const weddingDate = new Date("April 15, 2024 00:00:00").getTime();
  const [timeRemaining, setTimeRemaining] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = weddingDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeRemaining({ days, hours, minutes, seconds });

      if (distance < 0) {
        clearInterval(interval);
        setTimeRemaining({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  return (
    <>
      <div
        className="container-fluid story position-relative py-5"
        id="weddingStory"
      >
        <div className="position-absolute" style={{ top: "-35px", right: "0" }}>
          <img src="../../../img/tamp-bg-1.png" className="img-fluid" alt="" />
        </div>
        <div
          className="position-absolute"
          style={{ top: "-15px", left: "0", transform: "rotate(150deg)" }}
        >
          <img src="../../../img/tamp-bg-1.png" className="img-fluid" alt="" />
        </div>
        <div className="container position-relative py-5">
          <div className="text-center mb-5 wow fadeInUp" data-wow-delay="0.1s">
            <h5 className="text-uppercase text-primary fw-bold mb-4">Story</h5>
            <h1 className="display-4">Our Love Story</h1>
          </div>
          <div className="story-timeline">
            <div className="row wow fadeInUp" data-wow-delay="0.2s">
              <div className="col-md-6 text-end border-0 border-top border-end border-secondary p-4">
                <div className="d-inline-flex align-items-center h-100">
                  <img
                    src="../../../img/story-1.jpg"
                    className="img-fluid w-100 img-border"
                    alt=""
                  />
                </div>
              </div>
              <div className="col-md-6 border-start border-top border-secondary p-4 pe-0">
                <div className="h-100 d-flex flex-column justify-content-center bg-secondary p-4">
                  <h4 className="mb-2 text-dark">First Meet</h4>
                  <p
                    className="text-uppercase text-primary mb-2"
                    style={{ letterSpacing: "3px" }}
                  >
                    15 Jan 2024
                  </p>
                  <p className="m-0 fs-5">
                    Amidst the grandeur of the palace, their eyes met, igniting
                    a spark that would define their love story. Surrounded by
                    opulence, they shared their first words, and in that
                    fleeting moment, destiny intertwined their paths, setting
                    the stage for a timeless romance to blossom.
                  </p>
                </div>
              </div>
            </div>
            <div
              className="row flex-column-reverse flex-md-row wow fadeInUp"
              data-wow-delay="0.3s"
            >
              <div className="col-md-6 text-end border-end border-top border-secondary p-4 ps-0">
                <div className="h-100 d-flex flex-column justify-content-center bg-secondary p-4">
                  <h4 className="text-dark mb-2">First Date</h4>
                  <p
                    className="text-uppercase text-primary mb-2"
                    style={{ letterSpacing: "3px" }}
                  >
                    15 Jan 2024
                  </p>
                  <p className="m-0 fs-5">
                    In a quaint cafe, nervous laughter danced as they sipped on
                    fragrant coffee. With butterflies fluttering, they exchanged
                    shy glances, their hearts racing in sync. Amidst whispered
                    conversations, their first date marked the beginning of a
                    journey filled with love and laughter.
                  </p>
                </div>
              </div>
              <div className="col-md-6 border-start border-top border-secondary p-4">
                <div className="d-inline-flex align-items-center h-100">
                  <img
                    src="../../../img/story-2.jpg"
                    className="img-fluid w-100 img-border"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="row wow fadeInUp" data-wow-delay="0.4s">
              <div className="col-md-6 text-end border-end border-top border-secondary p-4 ps-0">
                <div className="d-inline-flex align-items-center h-100">
                  <img
                    src="../../../img/story-3.jpg"
                    className="img-fluid w-100 img-border"
                    alt=""
                  />
                </div>
              </div>
              <div className="col-md-6 border-start border-top border-secondary p-4 pe-0">
                <div className="h-100 d-flex flex-column justify-content-center bg-secondary p-4">
                  <h4 className="text-dark mb-2">Proposal</h4>
                  <p
                    className="text-uppercase text-primary mb-2"
                    style={{ letterSpacing: "3px" }}
                  >
                    14 Feb 2024
                  </p>
                  <p className="m-0 fs-5">
                    Beneath a starlit sky, he knelt down, trembling, and poured
                    his heart out. With tears of joy, she said yes, sealing
                    their fate under the moon's gentle glow. A proposal etched
                    in memories, marking the start of forever.
                  </p>
                </div>
              </div>
            </div>
            <div
              className="row flex-column-reverse flex-md-row wow fadeInUp"
              data-wow-delay="0.5s"
            >
              <div className="col-md-6 text-end border border-start-0 border-secondary p-4 ps-0">
                <div className="h-100 d-flex flex-column justify-content-center bg-secondary p-4">
                  <h4 className="text-dark mb-2">Enagagement</h4>
                  <p
                    className="text-uppercase text-primary mb-2"
                    style={{ letterSpacing: "3px" }}
                  >
                    02 March 2024
                  </p>
                  <p className="m-0 fs-5">
                    Underneath a canopy of twinkling lights, he professed his
                    love, a ring clasped tightly in his hand. With bated breath,
                    she nodded, tears of happiness glistening. Their forever
                    began in that magical moment.
                  </p>
                </div>
              </div>
              <div className="col-md-6 border border-end-0 border-secondary p-4">
                <div className="d-inline-flex align-items-center h-100">
                  <img
                    src="../../../img/story-4.jpg"
                    className="img-fluid w-100 img-border"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Wedding Date  */}
      <div className="container-fluid wedding-date-bg position-relative py-5">
        <div
          className="position-absolute"
          style={{ top: "-100px", right: "0" }}
        >
          <img src="../../../img/tamp-bg-1.png" className="img-fluid" alt="" />
        </div>
        <div
          className="position-absolute"
          style={{ top: "-80px", left: "0", transform: "rotate(150deg)" }}
        >
          <img src="../../../img/tamp-bg-1.png" className="img-fluid" alt="" />
        </div>
        <div className="container py-5 wow zoomIn" data-wow-delay="0.1s">
          <div
            className="wedding-date text-center bg-light p-5"
            style={{
              borderStyle: "double !important",
              border: "15px solid rgba(253, 93, 93, 0.5)",
            }}
          >
            <div className="wedding-date-content">
              <div
                className="d-inline-block border-end-0 border-start-0 border-secondary p-2 mb-4"
                style={{ borderStyle: "double" }}
              >
                <h4
                  className="text-dark text-uppercase fw-bold mb-0"
                  style={{ letterSpacing: "3px" }}
                >
                  April 15, 2024
                </h4>
              </div>
              <h1 className="display-4">We Are Getting Married</h1>
              <p className="text-dark fs-5">
                Niloy Hotel New York , 123 West 23th Street, NY
              </p>
              <div className="d-flex align-items-center justify-content-center mb-5">
                <div className="text-dark fs-2 me-4">
                  <div>
                    {timeRemaining.days < 10
                      ? `0${timeRemaining.days}`
                      : timeRemaining.days}
                  </div>
                  <span>Days</span>
                </div>
                <div className="text-dark fs-2 me-4">
                  <div>
                    {timeRemaining.hours < 10
                      ? `0${timeRemaining.hours}`
                      : timeRemaining.hours}
                  </div>
                  <span>Hours</span>
                </div>
                <div className="text-dark fs-2 me-4">
                  <div>
                    {timeRemaining.minutes < 10
                      ? `0${timeRemaining.minutes}`
                      : timeRemaining.minutes}
                  </div>
                  <span>Mins</span>
                </div>
                <div className="text-dark fs-2 me-0">
                  <div>
                    {timeRemaining.seconds < 10
                      ? `0${timeRemaining.seconds}`
                      : timeRemaining.seconds}
                  </div>
                  <span>Secs</span>
                </div>
              </div>
              <a
                className="btn btn-primary btn-primary-outline-0 py-3 px-5"
                href="#"
              >
                Book Your Attendance
              </a>
            </div>
            <div
              className="position-absolute"
              style={{
                top: "15%",
                right: "-30px",
                transform: "rotate(320deg)",
                opacity: "0.5",
                zIndex: "1",
              }}
            >
              <img
                src="../../../img/attendance-bg.png"
                className="img-fluid"
                alt=""
              />
            </div>
            <div
              className="position-absolute"
              style={{
                top: "15%",
                right: "-10px",
                transform: "rotate(-320deg)",
                opacity: "0.5",
                zIndex: "1",
              }}
            >
              <img
                src="../../../img/attendance-bg.png"
                className="img-fluid"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Wedding Date --> */}

      {/* <!-- Wedding Timeline start --> */}
      <div
        className="container-fluid wedding-timeline bg-secondary position-relative overflow-hidden py-5"
        id="weddingTimeline"
      >
        <div
          className="position-absolute"
          style={{
            top: "50%",
            left: "-100px",
            transform: "translateY(-50%)",
            opacity: "0.5",
          }}
        >
          <img src="img/wedding-bg.png" className="img-fluid" alt="" />
        </div>
        <div
          className="position-absolute"
          style={{
            top: "50%",
            right: "-160px",
            transform: "translateY(-50%)",
            opacity: "0.5",
            rotate: "335deg",
          }}
        >
          <img src="img/wedding-bg.png" className="img-fluid" alt="" />
        </div>
        <div className="container py-5">
          <div className="text-center mb-5">
            <h1 className="display-4 text-white">Wedding Planing Timeline</h1>
          </div>
          <div className="position-relative wedding-content">
            <div className="row g-4">
              <div className="col-6 col-md-6 col-xl-3 border border-top-0 border-start-0">
                <div
                  className="text-center p-3 wow fadeIn"
                  data-wow-delay="0.3s"
                >
                  <div className="mb-4 p-3 d-inline-flex">
                    <i className="fas fa-photo-video text-primary fa-3x"></i>
                  </div>
                  <p className="text-primary">9:00AM - 10:30AM</p>
                  <h3 className="text-dark">Photoshoot</h3>
                  <p className="text-dark">
                    Capturing love's essence, cherished moments frozen in time,
                    amidst laughter and tender embraces—a beautiful journey
                    immortalized through photographs.
                  </p>
                </div>
              </div>
              <div className="col-6 col-md-6 col-xl-3 border border-bottom-0 border-end-0">
                <div
                  className="text-center p-3 wow fadeIn"
                  data-wow-delay="0.5s"
                >
                  <div className="mb-4 p-3 d-inline-flex">
                    <i className="fas fa-dungeon text-primary fa-3x"></i>
                  </div>
                  <p className="text-primary">10:30AM - 11:30AM</p>
                  <h3 className="text-dark">Reception</h3>
                  <p className="text-dark">
                    Dazzling lights, joyful melodies, dancing feet—a vibrant
                    reception where love radiates, laughter fills the air, and
                    memories are woven.
                  </p>
                </div>
              </div>
              <div className="col-6 col-md-6 col-xl-3 border border-bottom-0">
                <div
                  className="text-center p-3 wow fadeIn"
                  data-wow-delay="0.1s"
                >
                  <div className="mb-4 p-3 d-inline-flex">
                    <i className="fas fa-menorah text-primary fa-3x"></i>
                  </div>
                  <p className="text-primary">11:00AM - 01:00AM</p>
                  <h3 className="text-dark">Lunch</h3>
                  <p className="text-dark">
                    Exquisite cuisine served with elegance, laughter shared, and
                    love celebrated—a sumptuous feast crowning their wedding day
                    with joyous memories
                  </p>
                </div>
              </div>

              <div className="col-6 col-md-6 col-xl-3 border border-top-0">
                <div
                  className="text-center p-3 wow fadeIn"
                  data-wow-delay="0.7s"
                >
                  <div className="mb-4 p-3 d-inline-flex">
                    <i className="fas fa-ring text-primary fa-3x"></i>
                  </div>
                  <p className="text-primary">10:00AM - 11:00AM</p>
                  <h3 className="text-dark">Ceremony</h3>
                  <p className="text-dark">
                    Vows exchanged, hearts united, promises sealed—a sacred
                    ceremony filled with love, blessings, and cherished memories
                    marking the beginning of forever.
                  </p>
                </div>
              </div>
            </div>
            <div
              className="position-absolute heart-circle "
              style={{ bottom: "0", left: "-18px" }}
            >
              <div className="border border-2 border-primary rounded-circle p-1 bg-secondary"></div>
            </div>
            <div
              className="position-absolute heart-circle"
              style={{ top: "18px", right: "-17px" }}
            >
              <div className="border border-2 border-primary rounded-circle p-1 bg-secondary"></div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Wedding Timeline End --> */}
    </>
  );
};

export default Storys;
