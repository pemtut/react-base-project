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
import Login from '../pages/Login';
import useAuth from '../hooks/useAuth';

const BASENAME_PATH = process.env.REACT_APP_BASENAME_PATH;
function Router() {
  const { isSignedIn } = useAuth();
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route errorElement={<Navigate to='/' replace />}>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route element={<PrivateRoute isSignedIn={isSignedIn} />}>
          <Route path='/private' element={<PrivatePage />} />
        </Route>
      </Route>
    ),
    {
      basename: BASENAME_PATH,
    }
  );

  return <RouterProvider router={router} />;
}

export default Router;
