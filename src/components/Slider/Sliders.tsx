import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import VolumeDown from '@material-ui/icons/VolumeDown';
import VolumeUp from '@material-ui/icons/VolumeUp';
import { Container } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    width: 200,
  },
});

export default function Sliders() {
  const classes = useStyles();
  const [value, setValue] = useState(30);

  // const handleChange = (event: any) => {
  //   setValue(event.target.newValue);
  // };
  return (
    <Container maxWidth="md" style={{ paddingTop: '50px' }}>
      <div className={classes.root}>
        <Typography id="continuous-slider" gutterBottom>
          Volume
      </Typography>
        <Grid container spacing={2}>
          <Grid item>
            <VolumeDown />
          </Grid>
          <Grid item xs>
            <Slider value={value} onChange={() => setValue(value)} aria-labelledby="continuous-slider" />
          </Grid>
          <Grid item>
            <VolumeUp />
          </Grid>
        </Grid>
        <Typography id="disabled-slider" gutterBottom>
          Disabled slider
      </Typography>
        <Slider disabled defaultValue={30} aria-labelledby="disabled-slider" />
      </div>
    </Container>
  );
}
