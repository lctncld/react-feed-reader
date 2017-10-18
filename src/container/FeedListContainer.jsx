import { connect } from 'react-redux';
import FeedList from '../component/FeedList';
import { fetchFeeds } from '../actionCreators/feeds.actionCreators';

const mapState = state => ({
  feedList: state.feeds.value,
});

const mapDispatch = dispatch => ({
  onMount: () => (dispatch(fetchFeeds())),
});

const FeedListContainer = connect(mapState, mapDispatch)(FeedList);
export default FeedListContainer;
