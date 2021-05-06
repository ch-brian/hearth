import React from 'react';
import { gql, useQuery } from '@apollo/client';
import './Dashboard.css';

const GET_LISTINGS = gql`
  query getListings {
    getListings {
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
  const { data, loading, error } = useQuery(GET_LISTINGS);

  if (loading) return <span>loading listings...</span>;
  if (error) return <span>ERROR GETTING LISTINGS!</span>;

  console.log('MYDATA: ', data);
  return (
    <div className="dashboard">
      <div>STUFF</div>
    </div>
  );
};

export default Dashboard;
