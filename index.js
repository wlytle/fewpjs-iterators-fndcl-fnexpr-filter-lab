const findMatching = (drivers, string) => {
  string = string.toLowerCase();
  let filteredDrivers;
  return (filteredDrivers = drivers.filter(
    (driver) => driver.toLowerCase() === string
  ));
};

const fuzzyMatch = (drivers, string) => {
  string = string.toLowerCase();
  let filteredDrivers;
  let re = new RegExp(`\\b${string}`);
  return (filteredDrivers = drivers.filter((driver) =>
    driver.toLowerCase().match(re)
  ));
};

const matchName = (drivers, string) => {
  string = string.toLowerCase();
  let filteredDrivers;
  return (filteredDrivers = drivers.filter(
    (driver) => driver.name.toLowerCase() === string
  ));
};
