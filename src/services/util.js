export const getState = (administrativeArea) => {
  if (administrativeArea.LocalizedType === 'State') {
    return administrativeArea.ID;
  }
  return administrativeArea.LocalizedName;
};

export const getCountry = (country) => {
  return country.ID === 'US' ? country.ID : country.LocalizedName;
}
