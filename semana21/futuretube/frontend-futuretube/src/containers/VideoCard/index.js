import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import { red } from '@material-ui/core/colors';
import VideoInfo from '../../components/VideoInfo';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "100vw"
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function VideoCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      {props.children}
      
      {/* <CardMedia
        className={classes.media}
        image="https://picsum.photos/375/211"
        image={props.src}
        title={"thumbnail"}
      /> */}



      {/* <VideoInfo /> */}
    </Card>
  );
}