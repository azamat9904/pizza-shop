import React, { useEffect } from 'react';
import { Route } from 'react-router';
import { useDispatch } from 'react-redux';
import { initFilters } from './redux/actions/filters';

import { Header } from './components';
import { Home, Cart } from './pages';


function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initFilters());
  }, [dispatch]);

  return (
    <div className="App">
      <div className="wrapper">
        <Header />
        <div className="content">
          <Route path="/" component={Home} exact />
          <Route path="/cart" component={Cart} />
        </div>
      </div>
    </div>
  );
}

export default App;
