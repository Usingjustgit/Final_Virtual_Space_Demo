import React from "react";
import { venuesImage } from "../../../TemporyData/Venues";

const Venue = () => {
  // console.log(venuesImage);
  return (
    <>
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
            <h1 className="display-2 text-dark">All Venue Cards</h1>
            <p className="fs-5 text-dark">
              A visual tapestry of cherished moments, love's radiance captured
              in every frame, forever etched in time
            </p>
          </div>
          {venuesImage.map((venue, inx) => {
            return (
              <div className="user" key={inx}>
                <h3>{inx + 1}</h3>
                <img className="user-img" src={venue.image} />
                <div className="user-info">
                  <h3 className="user-name">{venue.name}</h3>
                  <p className="user-location">{venue.location}</p>
                </div>
                <div className="user-actions">
                  <button className="view-details">
                    <i className="fa fa-eye"></i>
                  </button>
                  <button className="edit-button">
                    <i className="fa fa-edit"></i>
                  </button>
                  <button className="delete-button">
                    <i className="fa fa-trash"></i>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
    // <div
    //   className="container-fluid gallery position-relative py-5"
    //   id="weddingGallery"
    // >
    //   <div className="position-absolute" style={{ top: "-95px", right: "0" }}>
    //     <img src="../../../img/tamp-bg-1.png" className="img-fluid" alt="" />
    //   </div>
    //   <div
    //     className="position-absolute"
    //     style={{ top: "-80px", left: "0", transform: "rotate(150deg)" }}
    //   >
    //     <img src="../../../img/tamp-bg-1.png" className="img-fluid" alt="" />
    //   </div>
    //   <div className="container position-relative py-5">
    //     <div
    //       className="text-center mx-auto pb-5 wow fadeInUp"
    //       data-wow-delay="0.1s"
    //       style={{ maxWidth: "800px" }}
    //     >
    //       <h1 className="display-2 text-dark">Venue Cards</h1>
    //       <p className="fs-5 text-dark">
    //         A visual tapestry of cherished moments, love's radiance captured in
    //         every frame, forever etched in time
    //       </p>
    //     </div>
    //     <div className="row g-4">
    //       {venuesImage.map((singleImage, idx) => {
    //         return (
    //           <div
    //             key={idx}
    //             className="col-md-6 col-lg-4 col-xl-3 wow fadeInUp"
    //             data-wow-delay="0.2s"
    //           >
    //             <div className="gallery-item">
    //               <div className="gallery-img">
    //                 <img
    //                   className="img-fluid w-100"
    //                   style={{ height: "300px", objectFit: "cover" }}
    //                   src={singleImage.image}
    //                   alt=""
    //                 />
    //                 <div className="hover-style"></div>
    //                 <div className="search-icon">
    //                   <a
    //                     href={singleImage.image}
    //                     data-lightbox="Gallery-1"
    //                     className="my-auto"
    //                   >
    //                     <i className="fas fa-plus btn-primary btn-primary-outline-0 p-3"></i>
    //                   </a>
    //                 </div>
    //               </div>
    //               <div
    //                 className="gallery-overlay bg-light border-secondary border-top-0 p-4"
    //                 style={{ borderStyle: "double" }}
    //               >
    //                 <h5>{singleImage.name}</h5>
    //                 <p className="text-dark mb-0">{singleImage.description}</p>
    //               </div>
    //             </div>
    //           </div>
    //         );
    //       })}
    //       <div className="text-center">
    //         <button
    //           className="btn bg-white"
    //           style={{
    //             color: "black",
    //             border: "3px solid #fd5d5d",
    //             borderRadius: "11px",
    //           }}
    //         >
    //           Add Venue
    //         </button>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default Venue;
