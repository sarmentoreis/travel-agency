export const setLocalStorage = (listTravels, travels) => {
  localStorage.setItem("@travels", JSON.stringify([...listTravels, travels]));
};

export const getLocalStorage = (id) => {
  const travels = JSON.parse(localStorage.getItem("@travels"));
  if (travels && Array.isArray(travels)) {
    return travels.filter((travel) => travel.id === id)[0];
  }
};

export const deleteLocalStorage = (listTravels) => {
  const travels = JSON.parse(localStorage.getItem("@travels"));
  if (travels && Array.isArray(travels)) {
    const updatedTravels = travels.filter(
      (travel) => travel.nome !== listTravels.nome
    );
    localStorage.setItem("@travels", JSON.stringify(updatedTravels));
  }
};

export const setThemeInLocalStorage = (isDarkMode) => {
  localStorage.setItem("@theme", JSON.stringify(!isDarkMode));
};
