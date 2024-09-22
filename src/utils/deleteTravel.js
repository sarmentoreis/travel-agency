import { deleteLocalStorage } from "./localStorage";

const deleteTravel = (listTravels, setListTravels, toDelete, api) => {
  const updatedTravels = listTravels.filter(
    (travel) => travel.nome.toLowerCase() !== toDelete.toLowerCase()
  );

  if (updatedTravels.length < listTravels.length) {
    const deletedTravel = listTravels.find(
      (travel) => travel.nome.toLowerCase() === toDelete.toLowerCase()
    );
    deleteLocalStorage(deletedTravel);
    setListTravels(updatedTravels);

    api.success({
      message: "Deleção de viagem",
      description: `${toDelete} foi deletado com sucesso!`,
    });
  } else {
    api.error({
      message: "Erro",
      description: "Nenhuma viagem encontrada com esse nome!",
    });
  }
};

export default deleteTravel;
