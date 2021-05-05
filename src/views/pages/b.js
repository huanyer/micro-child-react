import React from 'react';
import {Link} from 'react-router-dom';

function Index() {
  return (
    <div className="App">
      this is page-b
      <Link to='/a.html'>to a page</Link>
    </div>
  );
}

export default Index;
