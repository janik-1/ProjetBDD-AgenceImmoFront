import Axios from "axios";

export const Ventelogement = (id, nom, prenom, date, pourcentage) => {
  Axios.post("http://localhost:8000/ventelog", {
    Identifiant: id,
    Nom: nom,
    Prenom: prenom,
    DateVente: date,
    PourcentagePrixVente: pourcentage,
  }).then(() => {});
};

export default Ventelogement;
