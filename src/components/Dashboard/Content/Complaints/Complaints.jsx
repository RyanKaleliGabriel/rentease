import React from "react";
import pic1 from "../../../../assets/pexels-rdne-stock-project-7148363.jpg";
import pic2 from "../../../../assets/pexels-pixabay-220453.jpg";
import pic3 from "../../../../assets/pexels-dziana-hasanbekava-7275385.jpg";
import pic4 from "../../../../assets/pexels-cottonbro-studio-6943429.jpg";

export default function Complaints() {
  return (
    <div className="complaintSParent">
      <div className="tableContainer">
        <h5 className="complaintHeading">Tenant Complaints</h5>
        <button className="tableBtn">All</button>
      </div>
      <div className="complaintContent">
        <div className="complaintsChild">
          <img alt="#" src={pic4} className="profileComplaint" />
          <p className="complaint">
            I'm writing to express my frustration as a tenant due to the
            persistent issues in the house I'm renting, including plumbing
            problems and a lack of heating, which have greatly affected my
            living conditions and comfort. I kindly request that these issues be
            promptly addressed to ensure a habitable and satisfactory living
            environment.
          </p>
        </div>
        <div className="complaintTimeContainer">
          <p className="complaintTime">Today 1.03pm</p>
          <button className="complaintBtn">Email Response</button>
        </div>
      </div>
      <div className="complaintContent">
        <div className="complaintsChild">
          <img alt="#" src={pic3} className="profileComplaint" />
          <p className="complaint">
            I am writing to express my dissatisfaction with the constant noise
            disturbances from my neighbors, which have severely disrupted my
            peace and quiet at home. Additionally, the outdated and
            malfunctioning appliances in the house have made my daily life
            inconvenient. I urge you to take measures to resolve these issues
            promptly to improve the quality of my living conditions.
          </p>
        </div>
        <div className="complaintTimeContainer">
          <p className="complaintTime">Today 7.21pm</p>
          <button className="complaintBtn">Email Response</button>
        </div>
      </div>
      <div className="complaintContent">
        <div className="complaintsChild">
          <img alt="#" src={pic2} className="profileComplaint" />
          <p className="complaint">
            It's with great disappointment that I must raise concerns about the
            recurring pest infestation problem in my rented apartment, as well
            as the lack of proper insulation that's causing high utility bills.
            I hope that you can take swift action to address these issues and
            ensure a more comfortable and pest-free living environment.
          </p>
        </div>
        <div className="complaintTimeContainer">
          <p className="complaintTime">Today 11.45am</p>
          <button className="complaintBtn">Email Response</button>
        </div>
      </div>
      <div className="complaintContent">
        <div className="complaintsChild">
          <img alt="#" src={pic1} className="profileComplaint" />
          <p className="complaint">
            I want to bring to your attention the ongoing issues in my rented
            home, such as the frequent electrical outages and the broken window
            that hasn't been repaired for weeks. These problems are making my
            living situation quite unbearable, and I kindly request immediate
            attention and resolution.
          </p>
        </div>
        <div className="complaintTimeContainer">
          <p className="complaintTime">Today 8.59am</p>
          <button className="complaintBtn">Email Response</button>
        </div>
      </div>
    </div>
  );
}
