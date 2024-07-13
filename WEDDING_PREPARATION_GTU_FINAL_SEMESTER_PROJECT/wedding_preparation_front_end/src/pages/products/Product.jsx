import React from "react";
import { products } from "../../../TemporyData/product";

const Product = () => {
  return (
    <div
      className="container-fluid gallery position-relative py-5"
      id="weddingGallery"
    >
      <div className="position-absolute" style={{ top: "-95px", right: "0" }}>
        <img src="../../../img/tamp-bg-1.png" className="img-fluid" alt="" />
      </div>
      <div
        className="position-absolute"
        style={{ top: "-80px", left: "0", transform: "rotate(150deg)" }}
      >
        <img src="../../../img/tamp-bg-1.png" className="img-fluid" alt="" />
      </div>
      <div className="container position-relative py-5">
        <div
          className="text-center mx-auto pb-5 wow fadeInUp"
          data-wow-delay="0.1s"
          style={{ maxWidth: "800px" }}
        >
          <h1 className="display-2 text-dark">Wedding Products</h1>
          <p className="fs-5 text-dark">
            Discover exquisite wedding products to make your special day
            unforgettable. From elegant attire to charming decorations, find
            everything you need for your dream wedding.
          </p>
        </div>
        <div className="row g-4">
          {products.map((singleImage, idx) => {
            return (
              <div
                key={idx}
                className="col-md-6 col-lg-4 col-xl-3 wow fadeInUp"
                data-wow-delay="0.2s"
              >
                <div className="gallery-item">
                  <div className="gallery-img">
                    <img
                      className="img-fluid w-100"
                      style={{ height: "300px", objectFit: "cover" }}
                      src={singleImage.image}
                      alt=""
                    />
                    <div className="hover-style"></div>
                    <div className="search-icon">
                      <a
                        href={singleImage.image}
                        data-lightbox="Gallery-1"
                        className="my-auto"
                      >
                        <i className="fas fa-plus btn-primary btn-primary-outline-0 p-3"></i>
                      </a>
                    </div>
                  </div>
                  <div
                    className="gallery-overlay bg-light border-secondary border-top-0 p-4"
                    style={{ borderStyle: "double" }}
                  >
                    <h5>{singleImage.name}</h5>
                    <p className="text-dark mb-0">{singleImage.description}</p>
                  </div>
                  <div style={{ textAlign: "center" }}>
                    <button
                      className="btn btn-primary bg-white p-2 mt-3 mx-auto hover-style"
                      style={{
                        border: "3px solid #fd5d5d",
                        borderRadius: "11px",
                      }}
                    >
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Product;
