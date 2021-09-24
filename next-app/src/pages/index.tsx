import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { NextPage } from 'next';

import { TigerLogoColor, TigerLogoGray, TigerLogoWhite } from 'components/icons/TigerLogo';

const Home: NextPage = () => (
  <Grid container direction="column" spacing={3}>
    <Grid item>
      <Typography variant="h1">h1</Typography>
      <Typography variant="h2">h2</Typography>
      <Typography variant="h3">h3</Typography>
      <Typography variant="h4">h4</Typography>
      <Typography variant="h5">h5</Typography>
      <Typography variant="h6">h6</Typography>
      <Typography variant="subtitle1">subtitle1</Typography>
      <Typography variant="subtitle2">subtitle2</Typography>
      <Typography variant="body1">body1</Typography>
      <Typography variant="body2">body2</Typography>
      <Typography variant="button">button</Typography>
      <Typography variant="caption">caption</Typography>
      <Typography variant="overline">overline</Typography>
    </Grid>
    <Grid item>
      <Paper square sx={{ p: 1, bgcolor: 'primary.main' }}>
        <Typography align="center" sx={{ color: 'primary.contrastText' }}>primary</Typography>
      </Paper>
      <Paper square sx={{ p: 1, bgcolor: 'secondary.main' }}>
        <Typography align="center" sx={{ color: 'secondary.contrastText' }}>secondary</Typography>
      </Paper>
      <Paper square sx={{ p: 1, bgcolor: 'error.main' }}>
        <Typography align="center" sx={{ color: 'error.contrastText' }}>error</Typography>
      </Paper>
      <Paper square sx={{ p: 1, bgcolor: 'warning.main' }}>
        <Typography align="center" sx={{ color: 'warning.contrastText' }}>warning</Typography>
      </Paper>
      <Paper square sx={{ p: 1, bgcolor: 'info.main' }}>
        <Typography align="center" sx={{ color: 'info.contrastText' }}>info</Typography>
      </Paper>
      <Paper square sx={{ p: 1, bgcolor: 'success.main' }}>
        <Typography align="center" sx={{ color: 'success.contrastText' }}>success</Typography>
      </Paper>
    </Grid>
    <Grid item>
      <Button>primary</Button>
      <Button color="secondary">secondary</Button>
      <Button color="error">error</Button>
      <Button color="warning">warning</Button>
      <Button color="info">info</Button>
      <Button color="success">success</Button>
    </Grid>
    <Grid item>
      <Button variant="contained">primary</Button>
      <Button variant="contained" color="secondary">secondary</Button>
      <Button variant="contained" color="error">error</Button>
      <Button variant="contained" color="warning">warning</Button>
      <Button variant="contained" color="info">info</Button>
      <Button variant="contained" color="success">success</Button>
    </Grid>
    <Grid item>
      <Button variant="outlined">primary</Button>
      <Button variant="outlined" color="secondary">secondary</Button>
      <Button variant="outlined" color="error">error</Button>
      <Button variant="outlined" color="warning">warning</Button>
      <Button variant="outlined" color="info">info</Button>
      <Button variant="outlined" color="success">success</Button>
    </Grid>
    <Grid item>
      <Paper square sx={{ bgcolor: 'primary.main' }}>
        <TigerLogoColor fontSize="large" />
        <TigerLogoGray fontSize="large" />
        <TigerLogoWhite fontSize="large" />
      </Paper>
    </Grid>
  </Grid>
);

export default Home;
