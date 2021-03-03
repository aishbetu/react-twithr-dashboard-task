import React from 'react';
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import {makeStyles} from "@material-ui/core";
import RecruitmentList from "./RecruitmentList";

const useStyles = makeStyles({
    btn: {
        backgroundColor: '#6263d5',
        color: '#fff',
        borderRadius: '15px',
        float: 'right'
    }
});

function MainSection(props) {
    const classes = useStyles();
    return (
        <div style={{width: '100%'}}>
        <Grid container>
            <Grid item sm>
                <Typography variant="h6" component="h2">
                    Recruitment Progress
                </Typography>
            </Grid>
            <Grid item sm></Grid>
            <Grid item sm>
                <Button className={classes.btn} color="primary" variant="contained" size="small">
                    View all
                </Button>
            </Grid>
        </Grid>
            <div style={{marginTop: 20}}>
                <RecruitmentList/>
            </div>
        </div>
    );
}

export default MainSection;