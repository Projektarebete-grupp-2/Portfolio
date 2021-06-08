import React from 'react';
import Portal from '@material-ui/core/Portal';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import TransitionsModal from './modal'
import Button from '@material-ui/core/Button';


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      padding: theme.spacing(1),
      margin: theme.spacing(1, 0),
     
      color: 'white',
      display: 'flex',
      justifyContent: 'center',
    },
    buttonStyle: {
        padding: 0,
    },
  }),
);

export default function SimplePortal() {
  const classes = useStyles();
  const [show, setShow] = React.useState(false);
  const container = React.useRef(null);

  const handleClick = () => {
    setShow(!show);
  };

  return (
    <div>
      <div className={classes.container}>
        <h4>Contact us click the </h4> 
      <Button className={classes.buttonStyle} color='secondary' type="button" onClick={handleClick}>
        button
      </Button>
        {show ? (
          <Portal container={container.current}>
            <TransitionsModal></TransitionsModal>
          </Portal>
        ) : null}
      </div>
      <div className={classes.container} ref={container} />
    </div>
  );
}

