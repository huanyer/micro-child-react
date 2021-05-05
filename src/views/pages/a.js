import React from 'react';
import {Link} from 'react-router-dom';

function Index() {
  return (
    <div className="App">
      this is page-a
      <Link to='/b.html'>to b page</Link>
    </div>
  );
}

export default Index;
