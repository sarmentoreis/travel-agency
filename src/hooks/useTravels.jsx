import { useState } from "react";

const useTravels = () => {
  const [travels, setTravels] = useState({
    id: "",
    nome: "",
    imgs: [],
    classificacao: "",
    descricao: "",
    diarias: "",
    estado: "",
    preco: "",
  });

  return {
    travels,
    setTravels,
  };
};

export default useTravels;
