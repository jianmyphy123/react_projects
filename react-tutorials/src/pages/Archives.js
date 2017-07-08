import React from 'react';

const Archives = ({match, location}) => {
  var searchParams = new URLSearchParams(location.search);
  var date = searchParams.get('date');
  var filter = searchParams.get('filter');
  return (
    <div>
      <h1>
        Archives {match.params.article}
      </h1>
      <h4>date: {date} filter: {filter}</h4>
    </div>
  );
}


export default Archives;
