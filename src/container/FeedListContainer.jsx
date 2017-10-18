import { connect } from 'react-redux';
import FeedList from '../component/FeedList';
import { fetchFeeds } from '../actionCreators/feeds.actionCreators';
import { fetchArticles } from '../actionCreators/articles.actionCreators'

const mapState = state => ({
  feedList: state.feeds.value,
});

const mapDispatch = dispatch => ({
  onMount: () => (dispatch(fetchFeeds())),
  onClick: (name) => (dispatch(fetchArticles(name))),
});

const FeedListContainer = connect(mapState, mapDispatch)(FeedList);
export default FeedListContainer;
