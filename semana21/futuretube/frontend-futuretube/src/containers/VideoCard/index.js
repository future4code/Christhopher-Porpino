import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import { red } from '@material-ui/core/colors';
import VideoInfo from '../../components/VideoInfo';
import { getAllVideos } from '../../actions/videos';
import { connect } from 'react-redux';

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

function VideoCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      {/* {props.children} */}

      {props.allVideos.map((video) =>

        <CardMedia>
          <video src={video.url} width="100%"></video>
          <VideoInfo>{video.title}</VideoInfo>
        </CardMedia>
      )}
    </Card>
  );
}

const mapStateToProps = (state) => ({
  allVideos: state.videos.videos
})

const mapDispatchToProps = (dispatch) => ({
  getAllVideos: () => dispatch(getAllVideos(1))
})

export default connect(mapStateToProps, mapDispatchToProps)(VideoCard);