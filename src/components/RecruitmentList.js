import React from 'react';
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import {makeStyles} from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import Avatar from "@material-ui/core/Avatar";
import {MoreHoriz} from "@material-ui/icons"
import Chip from "@material-ui/core/Chip";


import Jimmy from "../assets/Jimmy.jpg"
import Lawrence from  "../assets/Lawrence.jpg"
import Marry from  "../assets/Marry.jpg"
import Vivian from  "../assets/Vivian.jpg"

const useStyles = makeStyles({
   title: {
       fontWeight: 'bolder'
   },
    avatar: {
       margin: '10px 0 10px 25px'
    },
    userList: {
       display: 'flex',
        flexDirection: 'row',
        margin: '10px 0 10px 0'
    },
    fullName: {
       marginTop: '18px',
        marginLeft: '-2px'
    },
    positionChip: {
       opacity: 0.5,
        color: "#56b06c",
        backgroundColor: '#d7f0dd',
        margin: '18px 0 0 112px'
    },
    status: {
       margin: '18px 0 0 70px'
    },
    iconStyle: {
       margin: '12px 0 0 0'
    }
});

const userData = [
    {
        Name: 'Marry G. Schuelke',
        Designation: 'Project Manager',
        Status: 'Tech Interview',
        imgUrl: Marry
    },
    {
        Name: 'Lawrence A. Mason',
        Designation: 'Front end Developer',
        Status: 'Task',
        imgUrl: Lawrence
    },
    {
        Name: 'Jimmy C. Wilson',
        Designation: 'ReactJS Developer',
        Status: 'Resume Review',
        imgUrl: Jimmy
    },
    {
        Name: 'Vivian J. Joseph',
        Designation: 'NodeJS Developer',
        Status: 'Final Interview',
        imgUrl: Vivian
    },
];


function RecruitmentList() {
    const classes = useStyles();
    return (
        <div>
            <Grid container direction="row"
                  justify="space-around"
                  alignItems="center">
            <Grid item>
                <Typography variant="p" className={classes.title}>
                Full Name
            </Typography>
            </Grid>
            <Grid item>
                <Typography variant="p" className={classes.title}>
                    Designation
                </Typography>
            </Grid>
            <Grid item>
                <Typography variant="p" className={classes.title} style={{marginLeft: '-90px'}}>
                    Status
                </Typography>
            </Grid>
            </Grid>

            {userData.map((data) =>(
                <Grid container>
                    <Paper className={classes.userList} elevation={4} style={{width: '100%'}} >
                        <Grid item sm={4}>
                            <Grid container>
                                <Grid item sm={5}>
                                    <Avatar alt={data.Name} className={classes.avatar} src={data.imgUrl} />
                                </Grid>
                                <Grid item sm={7}>
                                    <Typography className={classes.fullName} variant="subtitle2">
                                        {data.Name}
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item sm={4}>
                            <Chip
                                className={classes.positionChip}
                                label={data.Designation}
                                color="secondary"
                                size="small"
                            />
                        </Grid>
                        <Grid item sm={4}>
                            <Grid container>
                                <Grid item sm={10}>
                                    <Typography className={classes.status} variant="subtitle2" >
                                        {data.Status}
                                    </Typography>
                                </Grid>
                                <Grid item sm={2}>
                                    <MoreHoriz className={classes.iconStyle} fontSize="large" color="disabled"/>
                                </Grid>
                            </Grid>

                        </Grid>
                    </Paper>
                </Grid>
            ))}

        </div>
    );
}

export default RecruitmentList;