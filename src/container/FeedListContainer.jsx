import { connect } from 'react-redux';
import FeedList from '../component/FeedList';

const mapState = state => ({
  feedList: state.feeds.value,
});

const FeedListContainer = connect(mapState)(FeedList);
export default FeedListContainer;
