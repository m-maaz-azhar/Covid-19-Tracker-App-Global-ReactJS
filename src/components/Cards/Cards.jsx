import React from "react";
import { Card, CardContent, Typography, Grid } from "@material-ui/core";
import CountUp from "react-countup";
import styles from "./Cards.module.css";

function Cards({ resource }) {
  const data = resource.data.read();

  return (
    <div className={styles.container}>
      <Grid container justifyContent="center">
        <Grid
          item
          component={Card}
          style={{ marginBottom: "15px", borderLeft: "5px solid #ffa502" }}
          xs={12}
          sm={12}
          lg={12}
        >
          <CardContent align="center">
            <Typography color="textSecondary" gutterBottom>
              Infected
            </Typography>
            <Typography className={styles.infected} variant="h5">
              <CountUp
                start={0}
                end={data.confirmed.value}
                separator=","
                duration={2}
              />
            </Typography>
            <Typography color="textSecondary">
              {new Date(data.lastUpdate).toDateString()}
            </Typography>
            <Typography variant="body2">
              No of Active Cases of Covid-19
            </Typography>
          </CardContent>
        </Grid>
        <Grid
          item
          component={Card}
          style={{ marginBottom: "15px" , borderLeft: "5px solid #2ed573"}}
          xs={12}
          sm={12}
          lg={12}
        >
          <CardContent align="center">
            <Typography color="textSecondary" gutterBottom>
              Recovered
            </Typography>
            <Typography className={styles.recovered} variant="h5">
              <CountUp
                start={0}
                end={data.recovered.value}
                separator=","
                duration={2}
              />
            </Typography>
            <Typography color="textSecondary">
              {new Date(data.lastUpdate).toDateString()}
            </Typography>
            <Typography variant="body2">
              No of Recoveries from Covid-19
            </Typography>
          </CardContent>
        </Grid>
        <Grid
          item
          component={Card}
          style={{ marginBottom: "15px" , borderLeft: "5px solid #ff4757"}}
          xs={12}
          sm={12}
          lg={12}
        >
          <CardContent align="center">
            <Typography color="textSecondary" gutterBottom>
              Deaths
            </Typography>
            <Typography className={styles.deaths} variant="h5">
              <CountUp
                start={0}
                end={data.deaths.value}
                separator=","
                duration={2}
              />
            </Typography>

            <Typography color="textSecondary">
              {new Date(data.lastUpdate).toDateString()}
            </Typography>
            <Typography variant="body2">No of Deaths by Covid-19</Typography>
          </CardContent>
        </Grid>
      </Grid>
    </div>
  );
}

export default Cards;
