import React from 'react';
import { Header } from "../Header";
import VideoPlayerComponent from "../../components/VideoPlayerComponent"
import { getVideoDetails } from '../../actions/videos';
import { connect } from 'react-redux';

function VideoDetailsPage(props) {

    React.useEffect(
        () => {
            props.getVideoDetails()
        }, []
    )

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
    videoDetails: state.videoDetails.videoDetails
})

const mapDispatchToProps = (dispatch) => ({
    getVideoDetails: () => dispatch(getVideoDetails('000'))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(VideoDetailsPage);


// export default connect(
//     state => ({
//         selectedVideoDetails: state.restaurants.selectedVideoDetails
//     }),
//     dispatch => ({
//         goBack: () => dispatch(goBack())
//     })
// )(VideoDetailsPage);