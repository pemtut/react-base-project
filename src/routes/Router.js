import {
  Navigate,
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import Home from '../pages/Home';
import PrivatePage from '../pages/PrivatePage';
import PrivateRoute from './PrivateRoute';

const BASENAME_PATH = process.env.REACT_APP_BASENAME_PATH;
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route errorElement={<Navigate to='/' replace />}>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Home />} />
      <Route element={<PrivateRoute isSignedIn={true} />}>
        <Route path='/private' element={<PrivatePage />} />
      </Route>
    </Route>
  ),
  {
    basename: BASENAME_PATH,
  }
);

function Router() {
  return <RouterProvider router={router} />;
}

export default Router;
