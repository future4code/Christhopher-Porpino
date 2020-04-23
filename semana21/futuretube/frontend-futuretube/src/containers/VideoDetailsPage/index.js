import React from 'react';
import { Header } from "../Header";
import VideoPlayerComponent from "../../components/VideoPlayerComponent"
import { getVideoDetails } from '../../actions/videos';
import { connect } from 'react-redux';
import { goBack } from 'connected-react-router'

function VideoDetailsPage(props) {

    return (
        <div>
            <Header />
            <VideoPlayerComponent
                src={props.videoDetails.url}
                title={props.videoDetails.title}
            />
        </div >
    );
}

const mapStateToProps = (state) => ({
    videoDetails: state.videos.videoDetails
})

const mapDispatchToProps = (dispatch) => ({
    getVideoDetails: (id) => dispatch(getVideoDetails(id))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(VideoDetailsPage);