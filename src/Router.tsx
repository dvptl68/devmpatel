import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Posts from './pages/Posts';
import Projects from './pages/Projects';
import NotFound from './pages/NotFound';

const tabRouter = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/about',
    element: <About />,
  },
  {
    path: '/posts',
    element: <Posts />,
  },
  {
    path: '/projects',
    element: <Projects />,
  },
  {
    path: '/*',
    element: <NotFound />,
  },
]);

const Router = () => {
  return (
    <RouterProvider router={tabRouter} />
  );
};

export default Router;
