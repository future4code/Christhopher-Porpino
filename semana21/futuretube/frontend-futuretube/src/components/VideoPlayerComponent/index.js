import React from 'react';
import styled from 'styled-components';
import VideoInfo from '../../components/VideoInfo';

const VideoPlayer = styled.div`
    width: 100vw;
    height: 31.7vh;
    position: absolute;
    left: 0;
`

function VideoPlayerComponent(props) {
    return (
        <div>
            <VideoPlayer>
                <iframe
                    width="100%"
                    height="100%"
                    src={props.src}
                    frameborder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen>
                    
                </iframe>
                <VideoInfo title={props.title} />
            </VideoPlayer>
        </div>
    );
}

export default VideoPlayerComponent;