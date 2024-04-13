import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';

const tabRouter = createBrowserRouter([
  {
    path: '/',
    element: <div>Home</div>,
  },
  {
    path: '/about',
    element: <div>About</div>,
  },
  {
    path: '/posts',
    element: <div>Posts</div>,
  },
  {
    path: '/projects',
    element: <div>Projects</div>,
  },
  {
    path: '/*',
    element: <div>Not found</div>,
  },
]);

const Router = () => {
  return (
    <RouterProvider router={tabRouter} />
  );
};

export default Router;
