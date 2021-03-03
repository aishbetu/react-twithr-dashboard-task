import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import Grid from "@material-ui/core/Grid";

import MrSmith from '../assets/MrSmith.png';
import SvgIcon from "@material-ui/core/SvgIcon";


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        backgroundColor: '#6263d5',
        color: '#fff',
        borderRadius: '15px',
    },
    details: {
        display: 'flex',
        flexDirection: 'column',
    },
    content: {
        flex: '1 0 auto',
    },
    cover: {
        width: 151,
    },
    cardTitle: {
        fontWeight: 'bolder',
        marginBottom: 20
    },
    btn: {
        backgroundColor: '#ed973d',
        color: '#fff',
        fontSize: 10,
        padding: 6,
        marginLeft: 8,
        marginBottom: 15
    },
    svgIcon: {
        marginLeft: -100,
        marginBottom: -225,
        marginTop: -20
    }
}));

export default function JumboCard() {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <Grid container>
                <Grid item sm={6}>


            <div className={classes.details}>
                <CardContent className={classes.content}>
                    <Typography className={classes.cardTitle} variant="h6" component="h2">
                        Hello Mr Smith!
                    </Typography>
                    <Typography variant="body2" component="p">
                        Today you have 9 new applications.
                        <br/>
                        Also, you need hire ROR Developer, React JS Developer.
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button className={classes.btn} size="small">Read More</Button>
                </CardActions>
            </div>

                </Grid>
                <Grid item sm={6}>
                    <div className={classes.svgIcon}>
                   <img src={MrSmith} height="400" width="400"/>
                    </div>
                </Grid>
            </Grid>

        </Card>
    );
}
