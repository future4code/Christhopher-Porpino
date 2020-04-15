import React from 'react';
import { Header } from "../Header";
import VideoCard from '../VideoCard';
import { getAllVideos } from '../../actions/videos';
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
      <VideoCard />
      <div>
        {props.allVideos.map((video) =>
          <VideoCard >
            <video src={video.url} width="300"></video>
            <h2>{video.title}</h2>
          </VideoCard>
        )}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  allVideos: state.videos.videos
})

const mapDispatchToProps = (dispatch) => ({
  getAllVideos: () => dispatch(getAllVideos(1))
})

export default connect(mapStateToProps, mapDispatchToProps)(Home);