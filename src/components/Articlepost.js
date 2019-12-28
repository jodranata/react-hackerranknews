/* eslint-disable camelcase */
/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';
import { ButtonInline } from './Button';
import { archivingPost } from '../reduxs/actions/actionArchivingPost';
import './Articlepost.css';

function Articlepost({ post, columns, onArchive }) {
  const { title, url, author, num_comments, points, objectID } = post;
  return (
    <div className="story">
      <span style={{ width: columns.title.width }}>
        <a href={url}>{title}</a>
      </span>
      <span style={{ width: columns.author.width }}>{author}</span>
      <span style={{ width: columns.comments.width }}>{num_comments}</span>
      <span style={{ width: columns.points.width }}>{points}</span>
      <span style={{ width: columns.archive.width }}>
        <ButtonInline type="button" inline="Archive" onClick={() => onArchive(objectID)} />
      </span>
    </div>
  );
}

const mapDispatchToProps = dispatch => ({
  onArchive: id => dispatch(archivingPost(id)),
});

export default connect(null, mapDispatchToProps)(Articlepost);
