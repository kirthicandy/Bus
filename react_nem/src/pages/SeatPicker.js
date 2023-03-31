import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBInput,
  MDBIcon,
  MDBRadio,
} from "mdb-react-ui-kit";

import "../assests/css/SeatPicker.css";

export default function SeatPicker() {
  const [seatNo, setSeatNo] = useState([]);
  const [reservedSeat, setReservedSeat] = useState("1A");
  const [seatNumber, setSeatNumber] = useState([]);
  const [userData, setUserData] = useState([]);
  const [bookedSeat, setBookedSeat] = useState([]);
  const [price, setPrice] = useState("");
  const [mul, setMul] = useState("");
  const [passengerData, setPassengerData] = useState([]);

  useEffect = () => {
    handleData()
   
 
  }
   
  const handleData = () =>{
    axios
    .post("http://localhost:2112/busroute/agi", {
      id: localStorage.getItem("selectedBusId"),
      Source: localStorage.getItem("Source"),
    })
    .then((data) => {
      if (data.status === "error") {
        window.localStorage.clear();
        console.log("hi");
      } else {
        setUserData(data.data[0]);
     
   
     
       
       
      }
    });
      axios
    .post("http://localhost:2112/info/:id", {
      id: localStorage.getItem("Userid"),
    })
    .then((data) => {
      if (data.status === "error") {
        window.localStorage.clear();
        console.log("hi");
      } else {
        setPassengerData(data.data);
      }
    });
};

  

  const getSeatNumber = (e) => {
    renderPassengerData(seatNumber);

    let newSeat = e.target.value;
    console.log(newSeat)
    if (reservedSeat.includes(newSeat)) {
      e.disabled = true;
      if (seatNumber.includes(newSeat)) {
        setSeatNumber(seatNumber.filter((seat) => seat !== newSeat));
      }
    } else {
      if(newSeat)
      setSeatNumber([...seatNumber, newSeat]);
      setReservedSeat([...reservedSeat, newSeat]);
      console.log(seatNumber);
    }
  };

  // const handlePassengerName = (e, seatNo) => {
  //   e.preventDefault();
  //   let value = e.target.value;
  //   if (!value) {
  //     return setFName("Name is required");
  //   } else {
  //     setFName(fname.concat(value));
  //   }
  // };

  const handleSubmitDetails = (e) => {
    e.preventDefault();
    localStorage.setItem("reservedSeats", JSON.stringify(seatNumber));
   
    
   setSeatNo(seatNumber);
    console.log(seatNumber)
    setBookedSeat(seatNumber.length);
    console.log("hi",seatNumber.length);
    setPrice(userData.businfos[0].Price);
    console.log("hi",userData._id)

    setMul(seatNumber.length * userData.businfos[0].Price);

    
    handleTotal();
  };

  const renderPassengerData = (seatArray) => {
    return seatArray.map((seat, idx) => {
      return (
        <form key={idx} className="form seatfrm">
          <span class="text-capitalize text-center"></span>
        </form>
      );
    });
  };
  const handleTotal = () => {
    return (
      <>
        <p>{bookedSeat}</p>
        <p>{seatNo}</p>
        <p>{price}</p>
        <p>{mul}</p>
      </>
    );
  };

  return (
    <div className="container ">
   
      <div className="container1">
        <div className="seatdetail">
      <div className="ref ">
                      
                      <label ></label>
                      <span>Available</span>
                    </div>
                     
                    <span className="sel">
                      
                      <label ></label>
                      <span>Selected</span>
                    </span>
                    </div>
        <div className="row">
          <div className="column1">
            <div className="plane">
              <form onClick={(e) => getSeatNumber(e)}>
                <ol className="cabin fuselage">
                  <li className="row row--1">
                    <ol className="seats" type="A">
                    
                      <li className="seat">
                        <input type="checkbox" value="1A" id="1A" />
                        <label htmlFor="1A">1A</label>
                      </li>
                      <li className="seat">
                        <input type="checkbox" id="1B" value="1B" />
                        <label htmlFor="1B">1B</label>
                      </li>
                      <li className="seat">
                        <input type="checkbox" value="1C" id="1C" />
                        <label htmlFor="1C">1C</label>
                      </li>
                      <li className="seat">
                        <input type="checkbox" value="1D" id="1D" />
                        <label htmlFor="1D">1D</label>
                      </li>
                    </ol>
                  </li>
                  <li className="row row--2">
                    <ol className="seats" type="A">
                      <li className="seat">
                        <input type="checkbox" value="2A" id="2A" />
                        <label htmlFor="2A">2A</label>
                      </li>
                      <li className="seat">
                        <input type="checkbox" value="2B" id="2B" />
                        <label htmlFor="2B">2B</label>
                      </li>
                      <li className="seat">
                        <input type="checkbox" value="2C" id="2C" />
                        <label htmlFor="2C">2C</label>
                      </li>
                      <li className="seat">
                        <input type="checkbox" value="2D" id="2D" />
                        <label htmlFor="2D">2D</label>
                      </li>
                    </ol>
                  </li>
                  <li className="row row--3">
                    <ol className="seats" type="A">
                      <li className="seat">
                        <input type="checkbox" value="3A" id="3A" />
                        <label htmlFor="3A">3A</label>
                      </li>
                      <li className="seat">
                        <input type="checkbox" value="3B" id="3B" />
                        <label htmlFor="3B">3B</label>
                      </li>
                      <li className="seat">
                        <input type="checkbox" value="3C" id="3C" />
                        <label htmlFor="3C">3C</label>
                      </li>
                      <li className="seat">
                        <input type="checkbox" value="3D" id="3D" />
                        <label htmlFor="3D">3D</label>
                      </li>
                    </ol>
                  </li>
                  <li className="row row--4">
                    <ol className="seats" type="A">
                      <li className="seat">
                        <input type="checkbox" value="4A" id="4A" />
                        <label htmlFor="4A">4A</label>
                      </li>
                      <li className="seat">
                        <input type="checkbox" value="4B" id="4B" />
                        <label htmlFor="4B">4B</label>
                      </li>
                      <li className="seat">
                        <input type="checkbox" value="4C" id="4C" />
                        <label htmlFor="4C">4C</label>
                      </li>
                      <li className="seat">
                        <input type="checkbox" value="4D" id="4D" />
                        <label htmlFor="4D">4D</label>
                      </li>
                    </ol>
                  </li>
                  <li className="row row--5">
                    <ol className="seats" type="A">
                      <li className="seat">
                        <input type="checkbox" value="5A" id="5A" />
                        <label htmlFor="5A">5A</label>
                      </li>
                      <li className="seat">
                        <input type="checkbox" value="5B" id="5B" />
                        <label htmlFor="5B">5B</label>
                      </li>
                      <li className="seat">
                        <input type="checkbox" value="5C" id="5C" />
                        <label htmlFor="5C">5C</label>
                      </li>
                      <li className="seat">
                        <input type="checkbox" value="5D" id="5D" />
                        <label htmlFor="5D">5D</label>
                      </li>
                    </ol>
                  </li>
                  <li className="row row--6">
                    <ol className="seats" type="A">
                      <li className="seat">
                        <input type="checkbox" value="6A" id="6A" />
                        <label htmlFor="6A">6A</label>
                      </li>
                      <li className="seat">
                        <input type="checkbox" value="6B" id="6B" />
                        <label htmlFor="6B">6B</label>
                      </li>
                      <li className="seat">
                        <input type="checkbox" value="6C" id="6C" />
                        <label htmlFor="6C">6C</label>
                      </li>
                      <li className="seat">
                        <input type="checkbox" value="6D" id="6D" />
                        <label htmlFor="6D">6D</label>
                      </li>
                    </ol>
                  </li>
                  <li className="row row--7">
                    <ol className="seats" type="A">
                      <li className="seat">
                        <input type="checkbox" value="7A" id="7A" />
                        <label htmlFor="7A">7A</label>
                      </li>
                      <li className="seat">
                        <input type="checkbox" d value="7B" id="7B" />
                        <label htmlFor="7B">7B</label>
                      </li>
                      <li className="seat">
                        <input type="checkbox" value="7C" id="7C" />
                        <label htmlFor="7C">7C</label>
                      </li>
                      <li className="seat">
                        <input type="checkbox" value="7D" id="7D" />
                        <label htmlFor="7D">7D</label>
                      </li>
                    </ol>
                  </li>
                  <li className="row row--8">
                    <ol className="seats" type="A">
                      <li className="seat">
                        <input type="checkbox" value="8A" id="8A" />
                        <label htmlFor="8A">8A</label>
                      </li>
                      <li className="seat">
                        <input type="checkbox" value="8B" id="8B" />
                        <label htmlFor="8B">8B</label>
                      </li>
                      <li className="seat">
                        <input type="checkbox" value="8C" id="8C" />
                        <label htmlFor="8C">8C</label>
                      </li>
                      <li className="seat">
                        <input type="checkbox" value="8D" id="8D" />
                        <label htmlFor="8D">8D</label>
                      </li>
                    </ol>
                  </li>
                  <li className="row row--9">
                    <ol className="seats" type="A">
                      <li className="seat">
                        <input type="checkbox" value="9A" id="9A" />
                        <label htmlFor="9A">9A</label>
                      </li>
                      <li className="seat">
                        <input type="checkbox" value="9B" id="9B" />
                        <label htmlFor="9B">9B</label>
                      </li>
                      <li className="seat">
                        <input type="checkbox" value="9C" id="9C" />
                        <label htmlFor="9C">9C</label>
                      </li>
                      <li className="seat">
                        <input type="checkbox" value="9D" id="9D" />
                        <label htmlFor="9D">9D</label>
                      </li>
                    </ol>
                  </li>
                  <li className="row row--10">
                    <ol className="seats" type="A">
                      <li className="seat">
                        <input type="checkbox" value="10A" id="10A" />
                        <label htmlFor="10A">10A</label>
                      </li>
                      <li className="seat">
                        <input type="checkbox" value="10B" id="10B" />
                        <label htmlFor="10B">10B</label>
                      </li>
                      <li className="seat">
                        <input type="checkbox" value="10C" id="10C" />
                        <label htmlFor="10C">10C</label>
                      </li>
                      <li className="seat">
                        <input type="checkbox" value="10D" id="10D" />
                        <label htmlFor="10D">10D</label>
                      </li>
                    </ol>
                  </li>
                </ol>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="container2">
        <div className="seatInfo">
     
          <form className="form-group"></form>

          <div>
            <div className="d-flex flex-row align-items-center mt-4 ">
              <MDBIcon class="fas fa-mobile me-4" size="lg" />
              <MDBInput
                name="text"
                placeholder="text "
                id="form5"
                type="text"
                value={passengerData._id}
                onChange={(e) => e.target.value}
              />
            </div>
            <div className="d-flex flex-row align-items-center mt-4 ">
              <MDBIcon class="fas fa-mobile me-4" size="lg" />
              <MDBInput
                name="text"
                placeholder="text "
                id="form5"
                type="text"
                value="k"
                onChange={(e) => e.target.value}
              />
            </div>
            <div className="d-flex flex-row align-items-center mt-4 ">
              <MDBIcon class="fas fa-mobile me-4" size="lg" />
              <MDBInput
                name="text"
                placeholder="text "
                id="form5"
                type="text"
                value="h"
                onChange={(e) => e.target.value}
              />
            </div>
            <div className="d-flex flex-row align-items-center mt-4 ">
              <MDBIcon class="fas fa-mobile me-4" size="lg" />
              <MDBInput
                name="text"
                placeholder="text "
                id="form5"
                type="text"
                value="{gender}"
                onChange={(e) => e.target.value}
              />
            </div>
         
            {handleTotal()}

            <button
              onClick={(e) => handleSubmitDetails(e)}
              className="btn btn-info seatBT"
            >
              Confirm Details
            </button>
          </div>
        </div>
      </div>
    </div>
   
  );
}
