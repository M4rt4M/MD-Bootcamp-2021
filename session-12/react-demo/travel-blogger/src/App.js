import { Route, Switch } from 'react-router-dom';

// bring in pages
import AllTravelBlog from './pages/AllTravelBlog';
import NewTravelBlog from './pages/NewTravelBlog';
import BucketList from './pages/BucketList';
import MainNavigation from './components/layout/MainNavigation';

function App() {
  return (
    <div>
      <MainNavigation />
      <Switch>
      <Route path='/' exact>
        <AllTravelBlog />
      </Route>

      <Route path='/new-travel-blog'>
        <NewTravelBlog />
      </Route>

      <Route path='/bucket-list'>
        <BucketList />
      </Route>
    </Switch>
    </div>
  );
};

export default App;