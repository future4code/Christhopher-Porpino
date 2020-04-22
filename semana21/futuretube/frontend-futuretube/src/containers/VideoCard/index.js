import React from 'react';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import VideoInfo from '../../components/VideoInfo';

function VideoCard(props) {

  return (
    <Card >

      <CardMedia>
        <video src={props.url} width="100%" />
        <VideoInfo title={props.title} />
      </CardMedia>

    </Card>
  );
}

export default (VideoCard);