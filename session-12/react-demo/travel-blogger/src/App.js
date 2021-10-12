import { Route, Switch } from 'react-router-dom';

// bring in pages
import AllTravelBlog from './pages/AllTravelBlog';
import NewTravelBlog from './pages/NewTravelBlog';
import BucketList from './pages/BucketList';
import Layout from './components/layout/Layout';


function App() {
  return (
    <div>
      <Layout>
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
    </Layout>
    </div>
  );
};

export default App;