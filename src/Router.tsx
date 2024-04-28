import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import {
  Grid,
  Box,
  Button,
} from '@mui/material';
import Home from './pages/Home';
import Blog from './pages/Blog';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

const tabRouter = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/blog',
    element: <Blog />,
  },
  {
    path: '/projects',
    element: <Projects />,
  },
  {
    path: '/contact',
    element: <Contact />,
  },
  {
    path: '/*',
    element: <NotFound />,
  },
]);

const Router = () => {
  return (
    <Grid
      container
      direction='column'
      justifyContent='center'
    >
      <Grid
        container
        direction='row'
        justifyContent='center'
      >
        <Grid
          item
          justifyContent='center'
        >
          <Button
            variant='outlined'
            onClick={() => { tabRouter.navigate('/') }}
          >
            Dev Patel
          </Button>
        </Grid>
        <Grid
          item
          justifyContent='center'
        >
          <Button
            variant='outlined'
            onClick={() => { tabRouter.navigate('/') }}
          >
            Home
          </Button>
          <Button
            variant='outlined'
            onClick={() => { tabRouter.navigate('/blog') }}
          >
            Blog
          </Button>
          <Button
            variant='outlined'
            onClick={() => { tabRouter.navigate('/projects') }}
          >
            Projects
          </Button>
          <Button
            variant='outlined'
            onClick={() => { tabRouter.navigate('/contact') }}
          >
            Contact
          </Button>
        </Grid>
      </Grid>
      <Grid
        container
        direction='row'
        justifyContent='center'
      >
        <RouterProvider router={tabRouter} />
      </Grid>
    </Grid>
  );
};

export default Router;
