import { useState } from "react";

const useListTravels = () => {
  const [listTravels, setListTravels] = useState([]);

  return {
    listTravels,
    setListTravels,
  };
};

export default useListTravels;
