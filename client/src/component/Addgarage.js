import Axios from "axios";

export const AddGarage = (identifiant, Adresse) => {
  Axios.post("http://localhost:8000/addgarage", {
    identifiant: identifiant,
    adresse: Adresse,
  }).then(() => {
    console.log("success");
  });
};

export default AddGarage;
