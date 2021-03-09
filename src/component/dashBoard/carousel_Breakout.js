import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const BreakoutCarousel = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <Carousel responsive={responsive}>
      <div>
        <div className="dg-slide-item">
          <div className="slider-type-two">
            <div className="stt-header d-flex align-items-center">
              <div className="stt-headerimg">
                <img
                  className="img-fluid"
                  src={process.env.PUBLIC_URL + "/assets/images/bs-img.png"}
                  alt=""
                />
              </div>
            </div>
            <div className="sto-content">
              <h2>Lorem ipsum dolor sit amet, consectetuer</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit,sed
                diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
                nostrud exerci tation ullamcorper suscipit lobortis
              </p>
              <a className="lrnmorebtn" href="#">
                Learn more &gt;
              </a>
            </div>
          </div>
        </div>{" "}
      </div>
      <div>
        <div className="dg-slide-item">
          <div className="slider-type-two">
            <div className="stt-header d-flex align-items-center">
              <div className="stt-headerimg">
                <img
                  className="img-fluid"
                  src={process.env.PUBLIC_URL + "/assets/images/bs-img.png"}
                  alt=""
                />
              </div>
            </div>
            <div className="sto-content">
              <h2>Lorem ipsum dolor sit amet, consectetuer</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit,sed
                diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
                nostrud exerci tation ullamcorper suscipit lobortis
              </p>
              <a className="lrnmorebtn" href="#">
                Learn more &gt;
              </a>
            </div>
          </div>
        </div>{" "}
      </div>
      <div>
        <div className="dg-slide-item">
          <div className="slider-type-two">
            <div className="stt-header d-flex align-items-center">
              <div className="stt-headerimg">
                <img
                  className="img-fluid"
                  src={process.env.PUBLIC_URL + "/assets/images/bs-img.png"}
                  alt=""
                />
              </div>
            </div>
            <div className="sto-content">
              <h2>Lorem ipsum dolor sit amet, consectetuer</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit,sed
                diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
                nostrud exerci tation ullamcorper suscipit lobortis
              </p>
              <a className="lrnmorebtn" href="#">
                Learn more &gt;
              </a>
            </div>
          </div>
        </div>{" "}
      </div>
      <div>
        <div className="dg-slide-item">
          <div className="slider-type-two">
            <div className="stt-header d-flex align-items-center">
              <div className="stt-headerimg">
                <img
                  className="img-fluid"
                  src={process.env.PUBLIC_URL + "/assets/images/bs-img.png"}
                  alt=""
                />
              </div>
            </div>
            <div className="sto-content">
              <h2>Lorem ipsum dolor sit amet, consectetuer</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit,sed
                diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
                nostrud exerci tation ullamcorper suscipit lobortis
              </p>
              <a className="lrnmorebtn" href="#">
                Learn more &gt;
              </a>
            </div>
          </div>
        </div>{" "}
      </div>
      <div>
        <div className="dg-slide-item">
          <div className="slider-type-two">
            <div className="stt-header d-flex align-items-center">
              <div className="stt-headerimg">
                <img
                  className="img-fluid"
                  src={process.env.PUBLIC_URL + "/assets/images/bs-img.png"}
                  alt=""
                />
              </div>
            </div>
            <div className="sto-content">
              <h2>Lorem ipsum dolor sit amet, consectetuer</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit,sed
                diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
                nostrud exerci tation ullamcorper suscipit lobortis
              </p>
              <a className="lrnmorebtn" href="#">
                Learn more &gt;
              </a>
            </div>
          </div>
        </div>{" "}
      </div>
      <div>
        <div className="dg-slide-item">
          <div className="slider-type-two">
            <div className="stt-header d-flex align-items-center">
              <div className="stt-headerimg">
                <img
                  className="img-fluid"
                  src={process.env.PUBLIC_URL + "/assets/images/bs-img.png"}
                  alt=""
                />
              </div>
            </div>
            <div className="sto-content">
              <h2>Lorem ipsum dolor sit amet, consectetuer</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit,sed
                diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
                nostrud exerci tation ullamcorper suscipit lobortis
              </p>
              <a className="lrnmorebtn" href="#">
                Learn more &gt;
              </a>
            </div>
          </div>
        </div>{" "}
      </div>
    </Carousel>
  );
};

export default BreakoutCarousel;
