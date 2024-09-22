export const loadTravels = (setListTravels) => {
  const travels = JSON.parse(localStorage.getItem("@travels"));
  if (travels) {
    setListTravels(travels);
  }
};

export const loadTheme = (setIsDarkMode) => {
  const theme = JSON.parse(localStorage.getItem("@theme"));
  if (theme) {
    setIsDarkMode(theme);
  }
};
