import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Header from './HeaderComponents/HeaderComponents.jsx';
import InstanceList from './InstanceList/InstanceList.js'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import '../index.css';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    border:2 ,
    margin:50,
    borderRadius: 10,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});
function App() {
  const classes = useStyles();
  return (
    <div className="main">
     <Header />
     <Card className={classes.root}>
      <CardContent className="topCard">
        <div>
          <div>
          AAAA
          </div>
          <div>
            BBB
          </div>
        </div>
        <div>
          CC
        </div>
      </CardContent>
      {/* <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions> */}
    </Card>
     <Card className={classes.root}>
     <CardContent>
        <Typography variant="h5" component="h2">
          Instance
        </Typography>
      </CardContent>
      <CardContent>
      <InstanceList />
      </CardContent>
    </Card>
     
    </div>
  );
}

export default App;
