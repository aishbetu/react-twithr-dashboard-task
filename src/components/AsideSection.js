import React from 'react';
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import {ArrowBackIos, ArrowForwardIos} from '@material-ui/icons'
import {makeStyles} from "@material-ui/core";
import DatePickers from "./DatePickers";
import PaperCard from "./PaperCard";

const useStyles = makeStyles({
    iconStyle: {
        color: '#6263d5',
        marginLeft: 50,
    },
    datePicker: {
        marginTop: 20,
        paddingLeft: 40
    }
});

function AsideSection() {
   const classes = useStyles();

    return (
        <Grid container>
            <Grid item sm={6}>
                <Typography variant="h6" component="h2">
                    October, 2020
                </Typography>
            </Grid>
            <Grid item sm={6}>
                <ArrowBackIos className={classes.iconStyle}/>
                <ArrowForwardIos  className={classes.iconStyle}/>
            </Grid>

            <Grid item sm={12} className={classes.datePicker}>
                <DatePickers/>
            </Grid>

            <Grid item sm={12}>
                <PaperCard />
            </Grid>

        </Grid>
    );
}

export default AsideSection;