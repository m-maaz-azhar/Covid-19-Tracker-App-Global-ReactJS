import React, { Suspense, useState } from "react";
import { Chart, Cards, CountryPicker, Loader } from "./components";
import { Grid, NativeSelect } from "@material-ui/core";
import { fetchedData } from "./api";
import styles from "./App.module.css";

function App() {
  const [resource, setResource] = useState(fetchedData);
  const [currentCountry, setcurrentCountry] = useState("");

  const handleCountryChange = async (country) => {
    setcurrentCountry(country);
    setResource(await fetchedData(country));
  };

  return (
    <div className={styles.App}>
      <header className={styles.AppHeader}>
        <div>
          <h3>COVID 19 TRACKER</h3>
        </div>
        <Suspense
          fallback={
            <NativeSelect>
              <option value="loading...">loading...</option>
            </NativeSelect>
          }
        >
          <CountryPicker
            handleCountryChange={handleCountryChange}
            resource={resource}
          />
        </Suspense>
      </header>
      <Grid
        container
        justifyContent="space-evenly"
        className={styles.MainSection}
      >
        <Grid
          item
          xs={12}
          sm={12}
          md={7}
          lg={7}
          className={styles.ChartContainer}
        >
          <Suspense fallback={<Loader />}>
            <Chart resource={resource} country={currentCountry} />
          </Suspense>
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={4}
          lg={4}
          className={styles.CardsContainer}
        >
          <Suspense fallback={<>...</>}>
            <Cards resource={resource} />
          </Suspense>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
