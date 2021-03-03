import React from 'react';
import {makeStyles} from "@material-ui/core";
import logo from '../assets/logo.png'
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import {DashboardOutlined, PeopleAltOutlined, EventNoteOutlined, PieChartOutlined, CalendarTodayOutlined, SettingsOutlined} from "@material-ui/icons";
import IconButton from "@material-ui/core/IconButton";
import SvgIcon from "@material-ui/core/SvgIcon";

import sideSVG from "../assets/SideSvgNew.png";

const useStyles = makeStyles({

    sideMenu: {
    display: 'flex',
    flexDirection: 'column',
    position: 'absolute',
    left: '0px',
    width: '320px',
    height: '100%',
    backgroundColor: '#6263d5'
},
    imgTitle: {
      marginLeft: '45px'
    },
    logoTitle: {
        fontWeight: 'bolder',
        color: '#fff',
        marginTop: '45px',
        marginLeft: '-38px'
    },
    iconContainer: {
        color: '#fff'
    },
    iconsStyle: {
        marginLeft: '50px'
    }
});



export default function SideBar() {
    const classes = useStyles();
    return (
        <div className={classes.sideMenu}>
            <Grid container>
            <Grid item sm={6}>
                <img className={classes.imgTitle} src={logo} height="120" width="100"/>
            </Grid>

            <Grid item sm={6}>
                <Typography className={classes.logoTitle} variant="h5">TwitHR</Typography>
            </Grid>
            </Grid>

            <Grid container className={classes.iconsStyle} spacing={2}>
                <Grid item sm={12}>
                    <IconButton className={classes.iconContainer}>
                        <DashboardOutlined/>
                        <Typography variant="body2" style={{paddingLeft: '15px'}}>
                            DASHBOARD
                        </Typography>
                    </IconButton>
                </Grid>

                <Grid item sm={12}>
                    <IconButton className={classes.iconContainer}>
                        <PeopleAltOutlined/>
                        <Typography variant="body2" style={{paddingLeft: '15px'}}>
                            RECRUITMENT
                        </Typography>
                    </IconButton>
                </Grid>

                <Grid item sm={12}>
                    <IconButton className={classes.iconContainer}>
                        <EventNoteOutlined/>
                        <Typography variant="body2" style={{paddingLeft: '15px'}}>
                            ONBOARDING
                        </Typography>
                    </IconButton>
                </Grid>

                <Grid item sm={12}>
                    <IconButton className={classes.iconContainer}>
                        <PieChartOutlined/>
                        <Typography variant="body2" style={{paddingLeft: '15px'}}>
                            REPORTS
                        </Typography>
                    </IconButton>
                </Grid>

                <Grid item sm={12}>
                    <IconButton className={classes.iconContainer}>
                        <CalendarTodayOutlined/>
                        <Typography variant="body2" style={{paddingLeft: '15px'}}>
                            CALENDAR
                        </Typography>
                    </IconButton>
                </Grid>

                <Grid item sm={12}>
                    <IconButton className={classes.iconContainer}>
                        <SettingsOutlined/>
                        <Typography variant="body2" style={{paddingLeft: '15px'}}>
                            SETTINGS
                        </Typography>
                    </IconButton>
                </Grid>

                <Grid item sm={12}>
                    <img src={sideSVG} width="170" height="200"/>
                </Grid>
            </Grid>

        </div>
    );
}
