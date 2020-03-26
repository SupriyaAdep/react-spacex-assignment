import React, { useEffect, useState } from 'react';
import useFetchData from '../custom-hook/useFetchData';
import Search from './Search';
import Modal from '../../Modal';
import SubNavbar from '../SubNavbar';
import ListHeader from './ListHeader';
import ListBody from './ListBody';
import LaunchDetails from './LaunchDetails';
import { connect } from 'react-redux';
import * as actions from '../../actions/index';
import Loader from '../../UI/Loader';

import './index.scss';

const limit = 12;

const SpaceXLaunches = props => {
  const { launchList, loading, error } = props;
  const { fetchLaunchData, searchByName, clearNameFilter } = props;

  const [inSearchMode, setSearchMode] = useState(false);
  const [visible, setModal] = useState(false);
  const [offset, setOffset] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');

  // API for detail records
  const [
    { data: detailData, loading: detailLoading, error: detailError },
    fetchDetail
  ] = useFetchData({});

  const loadData = () => {
    fetchLaunchData(limit, offset);
  };

  useEffect(() => {
    loadData();
  }, [offset]);

  const onSubmitQuery = inputQuery => {
    searchByName(inputQuery);
    setSearchQuery(inputQuery);
    setSearchMode(true);
  };

  const loadMore = () => {
    setOffset(offset + limit);
  };

  const clearFilters = () => {
    setSearchQuery('');
    clearNameFilter();
    fetchLaunchData(limit, 0);
    setSearchMode(false);
  };

  const showDetails = flightNumber => {
    fetchDetail(`launches/${flightNumber}`);
    setModal(true);
  };

  if (error) return <p>Error while fetching</p>;
  return (
    <>
      <SubNavbar>
        <>
          <Search onSubmitQuery={onSubmitQuery} />
          <ListHeader />
        </>
      </SubNavbar>
      <div className="listbody">
        {inSearchMode ? (
          <div className="search__result">
            <div>
              Showing results for:{' '}
              <b>
                "<em> {searchQuery} </em>"
              </b>
            </div>
            <div className="textlink" onClick={clearFilters}>
              Clear Filters
            </div>
          </div>
        ) : null}

        <ListBody data={launchList} showDetails={showDetails} />
      </div>
      {loading ? (
        <Loader />
      ) : !inSearchMode ? (
        <div className="extra__section">
          <button onClick={loadMore}>Load More</button>
        </div>
      ) : null}
      {inSearchMode && launchList.length === 0 ? (
        <div className="extra__section">No matching records found</div>
      ) : null}

      {visible ? (
        <Modal>
          <button className="modalclosebtn" onClick={() => setModal(false)}>
            Close
          </button>
          {detailLoading ? <Loader /> : <LaunchDetails data={detailData} />}
        </Modal>
      ) : null}
    </>
  );
};

const mapStateToProps = ({ launchReducer }) => {
  return {
    launchList: launchReducer.launches,
    loading: launchReducer.loading,
    error: launchReducer.error
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchLaunchData: (limit, offset) =>
      dispatch(actions.fetchLaunchDataThunk(limit, offset)),
    searchByName: inputQuery => dispatch(actions.searchByNameThunk(inputQuery)),
    clearNameFilter: () => dispatch(actions.clearNameFilter())
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(SpaceXLaunches);
