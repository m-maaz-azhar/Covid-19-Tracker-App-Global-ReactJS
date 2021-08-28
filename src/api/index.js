import axios from "axios";

export const fetchedData = (country) => {
  const dataPromise = fetchData(country);
  const dailyDataPromise = fetchDailyData();
  const countriesPromise = fetchCountriesData();
  return {
    data: wrapPromise(dataPromise),
    dailyData: wrapPromise(dailyDataPromise),
    countriesData: wrapPromise(countriesPromise),
  };
};

const wrapPromise = (promise) => {
  let status = "pending";
  let result;
  let suspender = promise.then(
    (res) => {
      status = "success";
      result = res;
    },
    (err) => {
      status = "error";
      result = err;
    }
  );
  return {
    read() {
      if (status === "pending") {
        throw suspender;
      } else if (status === "error") {
        throw result;
      } else if ((status = "success")) {
        return result;
      }
    },
  };
};

const url = "https://covid19.mathdro.id/api";

const fetchData = (country) => {
  let changeableUrl = url;
  if(country){
    changeableUrl = `${url}/countries/${country}`
  }
  return axios
    .get(`${changeableUrl}`)
    .then((res) => res.data)
    .catch((err) => console.log("Error: " + err));
};

const fetchDailyData = () => {
  return axios
    .get(`${url}/daily`)
    .then((res) =>
      res.data.map((dailyData) => ({
        confirmed: dailyData.confirmed.total,
        deaths: dailyData.deaths.total,
        date: dailyData.reportDate,
      }))
    )
    .catch((err) => console.log("Error: " + err));
};

const fetchCountriesData = () => {
  return axios
    .get(`${url}/countries`)
    .then((res) => {
      let countries = res.data.countries;
      return countries.map((country) => country.name);
    })
    .catch((err) => console.log("Error: " + err));
};
