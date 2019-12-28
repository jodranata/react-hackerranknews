import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { selectArchive, selectError } from '../reduxs/selectors/selectorViewPost';
import Articlepost from './Articlepost';
import './Articlelist.css';

const COLUMNS = {
  title: {
    label: 'Title',
    width: '40%',
  },
  author: {
    label: 'Author',
    width: '30%',
  },
  comments: {
    label: 'Comments',
    width: '10%',
  },
  points: {
    label: 'Points',
    width: '10%',
  },
  archive: {
    width: '10%',
  },
};

const ArticleHeader = ({ columns }) => (
  <div className="stories-header">
    {Object.keys(columns).map(key => (
      <span key={key} style={{ width: columns[key].width }}>
        {columns[key].label}
      </span>
    ))}
  </div>
);

const mapStateToProps = state => ({
  posts: selectArchive(state),
  error: selectError(state),
});

function Articlelist({ posts, error }) {
  return (
    <div className="stories">
      {posts.length > 0 && <ArticleHeader columns={COLUMNS} />}
      {error && <p className="error">Something went wrong...</p>}
      {(posts || []).map(article => (
        <Articlepost key={article.objectID} post={article} columns={COLUMNS} />
      ))}
    </div>
  );
}

export default connect(mapStateToProps)(Articlelist);

ArticleHeader.propTypes = {
  columns: PropTypes.objectOf(PropTypes.object).isRequired,
};

Articlelist.defaultProps = {
  error: null,
};

Articlelist.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.object).isRequired,
  error: PropTypes.string,
};
