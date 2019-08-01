import { connect } from 'react-redux';
import VideoPlayer from '../components/VideoPlayer.js';

var mapStateToProps = (store) => ({video: store.currentVideo});

// var mapDispatchToProps = (dispatch) => {
//   return {
//     handleVideoListEntryTitleClick: (video) => dispatch(changeVideo(video))
//   }
// };

// var VideoListContainer = connect(mapStateToProps, mapDispatchToProps)(VideoList);


var VideoPlayerContainer = connect(mapStateToProps, null)(VideoPlayer);

//TODO: define a VideoPlayerContainer component which will hook up your action
//dispatchers with your VideoPlayer component props.

export default VideoPlayerContainer;
