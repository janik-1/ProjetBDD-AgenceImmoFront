import Axios from "axios";

export const Newvisit = (identifiant, datevisit, nompers, prenompers) => {
  Axios.post("http://localhost:8000/newvisit", {
    identifiant: identifiant,
    datevisit: datevisit,
    nompers: nompers,
    prenompers: prenompers,
  }).then(() => {
    console.log("success");
  });
};

export default Newvisit;
