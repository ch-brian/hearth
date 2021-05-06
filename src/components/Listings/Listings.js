import React from 'react';
import './Listings.css';

const Listings = ({ listings }) => {
  return (
    <div className="listings">
      <table className="listings_table">
        <thead>
          <tr>
            <th>Price</th>
            <th>Address</th>
            <th>City</th>
            <th>State</th>
            <th>Zip</th>
            <th>Property Type</th>
          </tr>
        </thead>
        <tbody>
          {listings
            ? listings.map((each) => {
                const {
                  PRICE,
                  ADDRESS,
                  CITY,
                  STATEORPROVINCE,
                  ZIPORPOSTALCODE,
                  PROPERTYTYPE,
                } = each;
                return (
                  <tr key={`row_for_${ADDRESS}`}>
                    <td>{PRICE}</td>
                    <td>{ADDRESS}</td>
                    <td>{CITY}</td>
                    <td>{STATEORPROVINCE}</td>
                    <td>{ZIPORPOSTALCODE}</td>
                    <td>{PROPERTYTYPE}</td>
                  </tr>
                );
              })
            : null}
        </tbody>
      </table>
    </div>
  );
};

export default Listings;
