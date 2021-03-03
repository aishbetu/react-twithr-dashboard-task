import React from 'react';
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import userImg from "../assets/userImg.jpg";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import {makeStyles} from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import {Phone, Email, ChatBubble} from '@material-ui/icons';

const useStyles = makeStyles({
    paperStyle: {
        padding: 15,
        marginTop: 20,
        borderRadius: 10
    },
    large: {
        height: 80,
        width: 80,
        marginLeft: '-20px'
    },
    iconsCenter: {
        textAlign: 'center'
    },
    iconStyle: {
        color: '#6263d5'
    },
    line: {
        border: '1px solid #e8e9eb'
    }
});

function PaperCard() {
    const classes = useStyles();

    return (
        <Paper className={classes.paperStyle} elevation={2}>
            <Grid container>
            <Grid item sm={5}></Grid>
            <Grid item sm={2}>
                <Avatar alt="Mr Smith" className={classes.large} variant="square" src={userImg} />
            </Grid>
            <Grid item sm={5}></Grid>
            </Grid>


            <Grid item sm={12}>
                <Typography align="center" variant="h5" component="h2">
                    Mr Smith
                </Typography>
            </Grid>

            <Grid item sm={12}>
                <Typography align="center" variant="p" color="textSecondary" component="p">
                    Sr. HR Manager
                </Typography>
            </Grid>

            <Grid item sm={12} className={classes.iconsCenter}>
                <IconButton aria-label="phone">
                    <Phone className={classes.iconStyle}/>
                </IconButton>

                <IconButton aria-label="email">
                    <Email className={classes.iconStyle}/>
                </IconButton>

                <IconButton aria-label="message">
                    <ChatBubble className={classes.iconStyle}/>
                </IconButton>
                <hr className={classes.line}/>
            </Grid>
            <Grid container item sm={12} spacing={2}>
                <Grid item sm={6}>
                    <Typography align="left" variant="p" component="h4">
                        Company
                    </Typography>
                </Grid>
                <Grid item sm={6}>
                    <Typography align="right" color="textSecondary" variant="p" component="p">
                        FoxHr Pvt. Ltd.
                    </Typography>
                </Grid>
            </Grid>

            <Grid container item sm={12} spacing={2}>
                <Grid item sm={6}>
                    <Typography align="left" variant="p" component="h4">
                        Joining Date
                    </Typography>
                </Grid>
                <Grid item sm={6}>
                    <Typography align="right" color="textSecondary" variant="p" component="p">
                        01/08/2018
                    </Typography>
                </Grid>
            </Grid>

            <Grid container item sm={12} spacing={2}>
                <Grid item sm={6}>
                    <Typography align="left" variant="p" component="h4">
                        Projects
                    </Typography>
                </Grid>
                <Grid item sm={6}>
                    <Typography align="right" color="textSecondary" variant="p" component="p">
                        34 Active
                    </Typography>
                </Grid>
            </Grid>

        </Paper>
    );
}

export default PaperCard;