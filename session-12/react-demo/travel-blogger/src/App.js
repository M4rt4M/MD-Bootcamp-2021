import { Route, Switch } from 'react-router-dom';

// bring in pages
import AllTravelBlog from './pages/AllTravelBlog';
import NewTravelBlog from './pages/NewTravelBlog';
import BucketList from './pages/BucketList';

function App() {
  return (
    <div>
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