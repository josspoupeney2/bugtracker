import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getBugs } from 'reducers/bugs/actions';
import { Loader, Box } from 'symphony-bdk-ui-toolkit';
import MainPage from '.';

const MainPageContainer = (props) => {
  const {
    loading, actions, match, bugs,
  } = props;
  let chosenTab = 0;
  if (match) {
    chosenTab = parseInt(match.params.tab, 10);
  }

 useEffect(() => {
   if (!bugs) {
      actions.getBugs();
    }
 }, []);

  if (loading) {
    return <Box horizontal><Loader /></Box>;
 }

  return (<MainPage bugs={bugs} chosenTab={chosenTab} />);
};

MainPageContainer.propTypes = {
  loading: PropTypes.bool,
  bugs: PropTypes.array,
  actions: PropTypes.object.isRequired,
  match: PropTypes.object,
};

MainPageContainer.defaultProps = {
  loading: true,
  bugs: null,
  match: null,
};

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ getBugs }, dispatch),
});

const mapStateToProps = state => ({
  loading: state.bugs.loading,
  bugs: state.bugs.bugs,
});

export default connect(mapStateToProps, mapDispatchToProps)(MainPageContainer);
