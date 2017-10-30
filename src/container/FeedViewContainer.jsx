import { connect } from 'react-redux';
import { fetchArticles } from '../actionCreators/articles.actionCreators'
import FeedView from '../component/FeedView';

const getLastParamFromPath = (path) => path.split('/').pop();

const mapState = state => {
  const articles = state.articles[getLastParamFromPath(state.router.location.pathname)];
  return {
    articles: articles,
    isLoading: state.articles.isLoading,
  }
}

const mapDispatch = (dispatch, ownProps) => ({
  onMount: () => {
    const feed = ownProps.match.params.name;
    dispatch(fetchArticles(feed))
  },
});

const FeedViewContainer = connect(mapState, mapDispatch)(FeedView);
export default FeedViewContainer;
