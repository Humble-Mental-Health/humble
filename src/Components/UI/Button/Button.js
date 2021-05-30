import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: 'green',
    '&:hover': {
      backgroundColor: '#1b691b'
    }
  },
  margin: {
    margin: theme.spacing(1),
  },

}));

export default function ButtonSizes() {
  const classes = useStyles();

  return (
    <div>
        <div>
        <Button variant="contained" size="small" color="primary" className={classes.margin, classes.root}>
          Follow
        </Button>
      </div>
    </div>
  );
}