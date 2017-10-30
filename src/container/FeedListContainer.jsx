import { connect } from 'react-redux';
import FeedList from '../component/FeedList';
import { fetchFeeds } from '../actionCreators/feeds.actionCreators';
import { fetchArticles } from '../actionCreators/articles.actionCreators'

const getLastParamFromPath = (path) => path.split('/').pop();

const mapState = (state, ownProps) => ({
  feedList: state.feeds.value,
  selected: getLastParamFromPath(state.router.location.pathname)
});

const mapDispatch = dispatch => ({
  onMount: () => (dispatch(fetchFeeds())),
  onClick: (name) => (dispatch(fetchArticles(name))),
});

const FeedListContainer = connect(mapState, mapDispatch)(FeedList);
export default FeedListContainer;
