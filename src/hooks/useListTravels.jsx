import { useState } from "react";

const useListTravels = () => {
  const [listTravels, setListTravels] = useState([]);

  const handleSortChange = (value) => {
    let sortedArray = [...listTravels];

    switch (value) {
      case "preco-min":
        sortedArray.sort((a, b) => a.preco - b.preco);
        break;
      case "preco-max":
        sortedArray.sort((a, b) => b.preco - a.preco);
        break;
      case "classificacao-min":
        sortedArray.sort((a, b) => a.classificacao - b.classificacao);
        break;
      case "classificacao-max":
        sortedArray.sort((a, b) => b.classificacao - a.classificacao);
        break;
      default:
        break;
    }

    setListTravels(sortedArray);
  };

  return {
    listTravels,
    setListTravels,
    handleSortChange,
  };
};

export default useListTravels;
