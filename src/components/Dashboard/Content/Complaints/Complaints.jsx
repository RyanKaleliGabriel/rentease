import React from "react";
import pic1 from "../../../../assets/pexels-rdne-stock-project-7148363.jpg";
import pic2 from "../../../../assets/pexels-pixabay-220453.jpg";
import pic3 from "../../../../assets/pexels-dziana-hasanbekava-7275385.jpg";
import pic4 from "../../../../assets/pexels-cottonbro-studio-6943429.jpg";
import Main from "./Main";

export default function Complaints() {
  const data = [
    {
      image: pic4,
      complaint:
        "I'm writing to express my frustration as a tenant due to the persistent issues in the house I'm renting, including plumbing problems and a lack of heating, which have greatly affected my living conditions and comfort. I kindly request that these issues be promptly addressed to ensure a habitable and satisfactory living environment.",
      time: "Today 1.03pm",
      email: "Email Response",
    },
    {
      image: pic3,
      complaint:
        "I am writing to express my dissatisfaction with the constant noise disturbances from my neighbors, which have severely disrupted my peace and quiet at home. Additionally, the outdated and malfunctioning appliances in the house have made my daily life inconvenient. I urge you to take measures to resolve these issues promptly to improve the quality of my living conditions.",
      time: "Today 7.21pm",
      email: "Email Response",
    },
    {
      image: pic2,
      complaint:
        "It's with great disappointment that I must raise concerns about the recurring pest infestation problem in my rented apartment, as well as the lack of proper insulation that's causing high utility bills. I hope that you can take swift action to address these issues and ensure a more comfortable and pest-free living environment.",
      time: "Today 11.45am",
      email: "Email Response",
    },
    {
      image: pic1,
      complaint:
        "I want to bring to your attention the ongoing issues in my rented home, such as the frequent electrical outages and the broken window that hasn't been repaired for weeks. These problems are making my living situation quite unbearable, and I kindly request immediate attention and resolution.",
      time: "Today 8.59am",
      email: "Email Response",
    },
  ];

  const createEntry = (entrydetail) => {
    return (
      <Main
        image={entrydetail.image}
        complaint={entrydetail.complaint}
        time={entrydetail.time}
        email={entrydetail.email}
      />
    );
  };
  return (
    <div className="complaintSParent">
      <div className="tableContainer">
        <h5 className="complaintHeading">Tenant Complaints</h5>
        <button className="tableBtn">All</button>
      </div>
      {data.map(createEntry)}
    </div>
  );
}
