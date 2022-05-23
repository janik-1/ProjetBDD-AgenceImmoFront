import Axios from "axios";

export const DeleteLogement = (identifiant) => {
  Axios.delete(`http://localhost:8000/deletelog/${identifiant}`);
};

export default DeleteLogement;
