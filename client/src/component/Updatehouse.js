import Axios from "axios";

export const UpdatLogement = (
  identifiant,
  nomlog,
  nbpiece,
  etat,
  adresse,
  prix,
  dated,
  ville,
  superficie
) => {
  Axios.put("http://localhost:8000/update", {
    id: identifiant,
    nomlog: nomlog,
    nbpiece: nbpiece,
    etat: etat,
    adresse: adresse,
    prix: prix,
    dated: dated,
    ville: ville,
    superficie: superficie,
  }).then((response) => {});
};

export default UpdatLogement;
