import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Button } from './Button';
import { fetchingPost } from '../reduxs/actions/actionsAddingPost';

class Searchbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
    };
  }

  onSubmit = e => {
    const { query } = this.state;
    const { onFetchAPI } = this.props;
    if (query) {
      onFetchAPI(query);
      this.setState({ query: '' });
    }
    e.preventDefault();
  };

  onChange = e => {
    const { value } = e.target;
    this.setState({
      query: value,
    });
  };

  render() {
    const { onSubmit, onChange } = this;
    const { query } = this.state;
    return (
      <div>
        <form onSubmit={onSubmit}>
          <input type="text" value={query} onChange={onChange} />
          <Button type="submit" inline="Search" />
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  onFetchAPI: query => dispatch(fetchingPost(query)),
});

Searchbar.propTypes = {
  onFetchAPI: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Searchbar);
