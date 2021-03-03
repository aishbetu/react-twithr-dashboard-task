import React from 'react';
import { AppBar, Toolbar, Grid } from "@material-ui/core/";
import IconButton from "@material-ui/core/IconButton";
import Badge from "@material-ui/core/Badge";
import {NotificationsNoneOutlined, MailOutline, AccountCircle, Search} from "@material-ui/icons";
import {makeStyles} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import userImg from '../assets/userImg.jpg';
import Avatar from "@material-ui/core/Avatar";


const useStyles = makeStyles({
    root: {
        backgroundColor: 'transparent',
        boxShadow: 'None'
    },
    title: {
        flexGrow: 1,
        color: '#25160f',
        fontWeight: 'bolder',
        marginTop: '20px'
    },
    icons: {
        color: '#9e9faa'
    }
});

function NavigationBar() {
    const classes = useStyles();
    return (
        <AppBar position="static" className={classes.root}>
            <Toolbar>
                <Grid container>
                    <Grid item>
                        <Typography variant="h6" className={classes.title}>
                            Dashboard
                        </Typography>
                    </Grid>

                    <Grid item sm>
                    </Grid>

                    <Grid item>
                        <IconButton>
                            <Badge>
                                <Search className={classes.icons}/>
                            </Badge>
                        </IconButton>
                        <IconButton>
                            <Badge badgeContent={4} color="secondary">
                                    <MailOutline className={classes.icons}/>
                            </Badge>
                        </IconButton>

                        <IconButton>
                            <Badge badgeContent={4} color="secondary">
                                <NotificationsNoneOutlined className={classes.icons}/>
                            </Badge>
                        </IconButton>

                        <IconButton style={{paddingLeft: '150px'}}>
                                <Typography variant="caption" component="h5" style={{paddingRight: '20px',
                                paddingTop: 10}}>
                                    Mr Smith
                                </Typography>
                            <Avatar alt="Mr. Smith" src={userImg} />

                        </IconButton>
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    );
}

export default NavigationBar;