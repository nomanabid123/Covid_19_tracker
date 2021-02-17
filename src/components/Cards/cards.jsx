import React,{useEffect,useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import { Card } from '@material-ui/core';
import CountUp from "react-countup";
import styles from "./cards.module.css"
import cx from "classnames"

const useStyles = makeStyles((theme) => ({
  root: {
    // flexGrow: 1,
    maxWidth:1000,
    margin:'0 auto',
    marginTop:50,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  card:{
    marginRight:3,
  },
  confirmed:{
    borderBottom: '10px solid rgba(0, 0, 255, 0.5)'
  },
  recovered :{
    borderBottom: '10px solid rgba(0, 255, 0, 0.5)'
  },
  deaths :{
    borderBottom: '10px solid rgba(255, 0, 0, 0.5)'
  }
}));



export default function CenteredGrid({data}) {
  const classes = useStyles();
  let lastUpdate =data['lastUpdate']
  if(data==null) 
      return <h1>Loading....</h1>
  
  let st = "";
  return (
   
    <div className={classes.root}>
      <Grid container spacing={3}>
      {Object.keys(data).map((val)=>{
        if(val =="confirmed")
          st=classes.confirmed
        else if(val =="recovered")
          st=classes.recovered
        else if(val == "deaths")
          st=classes.deaths

        if(val!='lastUpdate')
          return (
          <Grid item xs={12} component={Card} md={3} sm={4} key={val} className={cx(classes.card,st)}>
            <CardContent>
              <Typography color="textSecondary" gutterBottom>{val.toUpperCase()}</Typography>
              <Typography variant="h5">
                <CountUp start={0} end={data[val].value} separator="," duration={2.5}/>
              </Typography>
              <Typography color="textSecondary" >{new Date(lastUpdate).toDateString()}</Typography>
              <Typography variant="body2">Number of {val} cases</Typography>
            </CardContent>

          </Grid>
          )
        else
            return null
        
      })}
        
      
  
      </Grid>
    </div>
  );
    }
