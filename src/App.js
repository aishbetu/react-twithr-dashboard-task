import './App.css';
import NavigationBar from "./components/NavigationBar";
import SideBar from "./components/SideBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import {makeStyles} from "@material-ui/core";
import JumboCard from "./components/JumboCard";
import Grid from "@material-ui/core/Grid";
import MainSection from "./components/MainSection";
import AsideSection from "./components/AsideSection";

const useStyles = makeStyles({
    appMain: {
        backgroundColor: '#eff1fe',
        paddingLeft: '320px',
        width: '100%',
        height: '720px'
    },
    mainSection: {
        marginLeft: 24
    }
});

function App() {
  const classes = useStyles();
  return (
      <>
          <SideBar />
          <div className={classes.appMain}>
              <NavigationBar />
              <Grid container  direction="row">
                  <Grid className={classes.mainSection} item sm={8}>
              <JumboCard/>
              <br/>
              <br/>
              <MainSection/>
                  </Grid>

                  <Grid className={classes.mainSection} item sm={3}>
                        <AsideSection/>
                  </Grid>

              </Grid>
          </div>
          <CssBaseline />
          </>

  );
}

export default App;
