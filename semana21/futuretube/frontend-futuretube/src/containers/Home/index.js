import React from 'react';
import { Header } from "../Header";
import VideoCard from '../VideoCard';
import { getAllVideos, getVideoDetails } from '../../actions/videos';
import { connect } from 'react-redux';

function Home(props) {
  React.useEffect(
    () => {
      props.getAllVideos()
    }, []
  )

  return (
    <div>
      <Header />
      {props.allVideos.map(
        (video) => <VideoCard
          url={video.url}
          title={video.title}
          onClick={() => props.getVideoDetails(video.id)}
        />
  
      )}
    </div>
  );
}

const mapStateToProps = (state) => ({
  allVideos: state.videos.videos
})

const mapDispatchToProps = (dispatch) => ({
  getAllVideos: () => dispatch(getAllVideos(1)),
  getVideoDetails: (id) => dispatch(getVideoDetails(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(Home);