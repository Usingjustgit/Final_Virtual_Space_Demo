import React from "react";
import "./Guests.css";
import { guests } from "../../../TemporyData/guest";

const Guests = () => {
  return (
    <>
      {guests.map((guest, inx) => {
        return (
          <div className="user" key={inx}>
            <h3>{inx + 1}</h3>
            <div className="user-info">
              <h3 className="user-name">{guest.name}</h3>
              <p className="user-location">{guest.location}</p>
            </div>
            <div className="user-actions">
              <button className="edit-button">Edit</button>
              <button className="delete-button">Delete</button>
            </div>
          </div>
        );
      })}
      <div className="text-center">
        <button
          className="btn bg-white"
          style={{
            color: "black",
            border: "3px solid #fd5d5d",
            borderRadius: "11px",
          }}
        >
          Add Guest
        </button>
      </div>
    </>
  );
};

export default Guests;
