import React from 'react';
import { gql, useLazyQuery } from '@apollo/client';
import Searchbar from '../Searchbar/Searchbar';
import Listings from '../Listings/Listings';

import './Dashboard.css';

const GET_MATCHING_LISTINGS = gql`
  query getMatchingListings($searchString: String!) {
    getMatchingListings(searchString: $searchString) {
      SALETYPE
      SOLDDATE
      PROPERTYTYPE
      ADDRESS
      CITY
      STATEORPROVINCE
      ZIPORPOSTALCODE
      PRICE
      BEDS
      BATHS
      LOCATION
      SQUAREFEET
      LOTSIZE
      YEARBUILT
      DAYSONMARKET
      STATUS
      NEXTOPENHOUSESTARTTIME
      NEXTOPENHOUSEENDTIME
      SOURCE
      FAVORITE
      INTERESTED
      LATITUDE
      LONGTITUDE
    }
  }
`;
const Dashboard = () => {
  const [getListings, { data, called, loading, error }] = useLazyQuery(
    GET_MATCHING_LISTINGS
  );
  if (called && loading) return <span>loading listings...</span>;
  if (error) return <span>ERROR GETTING LISTINGS!</span>;

  return (
    <div className="dashboard">
      <Searchbar getListings={getListings} />
      {data !== undefined ? (
        <Listings listings={data.getMatchingListings} />
      ) : (
        <span>No Search Results To Show</span>
      )}
    </div>
  );
};

export default Dashboard;
