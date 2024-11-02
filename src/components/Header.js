import React from 'react';
import { Typography, Grid, Fade } from '@material-ui/core';
import NewDownlod from './NewDownload';

export default function Header() {
  return (
    <>
      <Fade in timeout={500}>
        <div>
          <Grid container style={{ justifyContent: 'space-between' }}>
            <Grid item>
              <Typography variant="h4">ytmp3dl-web</Typography>
              <Typography variant="body2">
                Powered by Thenula Panapiti
              </Typography>
            </Grid>
            <Grid
              item
              style={{
                flexGrow: 1,
                display: 'flex',
                flexDirection: 'row',
                marginLeft: 32
              }}
            >
              <NewDownlod />
            </Grid>
          </Grid>
        </div>
      </Fade>
    </>
  );
}
