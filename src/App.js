import React, { useState } from "react";
import "./App.css";
import DetailsCard from "./components/Details";
import { Grid } from "@material-ui/core";
import useStyles from "./styles";
import Main from "./components/Main";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import RoomIcon from "@material-ui/icons/Room";
import { Card, CardHeader, CardContent, Typography } from "@material-ui/core";

function App() {
  //32.09016227876648, 34.80824571815939
  const classes = useStyles();
  const [viewport, setViewPort] = useState({
    latitude: 32.09016227876648,
    longitude: 34.80824571815939,
    zoom: 13,
    width: "100vw",
    height: "100vh",
  });
  const [selectedProperty, setSelectedProperty] = useState(null);
  const propertyArray = [
    {
      id: 1,
      address: "Pinkas 35",
      latitude: 32.0911075933129,
      longitude: 34.78463155009423,
    },
    {
      id: 2,
      address: "Shlomo hamelech",
      latitude: 32.08995321739308,
      longitude: 34.77786165454013,
    },
    {
      id: 3,
      address: "Habima",
      latitude: 32.07339040757201,
      longitude: 34.77947097994985,
    },
  ];

  return (
    <div>
      <Grid item sm={1}>
        <ReactMapGL
          {...viewport}
          mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_API}
          onViewportChange={(viewport) => setViewPort(viewport)}
          mapStyle="mapbox://styles/alexgordontlv/ckk4kpj0y0qan17oc3ocgjap0"
        >
          {propertyArray.map((property) => (
            <Marker
              key={property.id}
              latitude={property.latitude}
              longitude={property.longitude}
            >
              <RoomIcon
                fontSize="large"
                onClick={(e) => {
                  e.preventDefault();
                  setSelectedProperty(property);
                }}
              />
            </Marker>
          ))}
          {selectedProperty && (
            <Popup
              latitude={selectedProperty.latitude}
              longitude={selectedProperty.longitude}
            >
              <div>{selectedProperty.address}</div>
            </Popup>
          )}
        </ReactMapGL>
      </Grid>
      <Grid
        className={classes.grid}
        container
        spacine={0}
        alignItems="center"
        justify="center"
        style={{ height: "100vh" }}
      >
        <Grid item xs={12} sm={4}>
          <Main />
        </Grid>
        <Grid item xs={12} sm={3} spacing={2}>
          <DetailsCard title="Income" />
          <DetailsCard title="Expense" />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
