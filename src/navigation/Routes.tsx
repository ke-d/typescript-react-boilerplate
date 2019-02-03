import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { Route, Switch } from 'react-router-dom';
import { Alert } from 'reactstrap';
import Loading from '../components/Loading';

const HomeRoute = React.lazy(() => import('../pages/Home'));

const AnotherPageRoute = React.lazy(() => import('../pages/AnotherPage'));

const PageNotFoundRoute = React.lazy(() => import('../pages/PageNotFound'));

const RoutePath = ({ location }: RouteComponentProps) => (
  <React.Suspense fallback={<Loading />}>
    <Switch key={location.key} location={location}>
      <Route exact={true} path="/" component={HomeRoute} />
      <Route exact={true} path="/anotherpage" component={AnotherPageRoute} />
      <Route exact={true} path="/loading" component={Loading} />
      <Route component={PageNotFoundRoute} />
    </Switch>
  </React.Suspense>
);

class Routes extends React.Component {
  public state = {
    error: new Error(),
    hadError: false,
  };
  public componentDidCatch(error: Error) {
    // Catch errors in any components below and re-render with error message
    this.setState({
      error,
      hadError: true,
    });
    // You can also log error messages to an error reporting service here
  }
  // Reset the error variables
  public handleDismiss() {
    this.setState({
      error: new Error(),
      hadError: false,
    });
  }

  public render() {
    const { error, hadError } = this.state;
    if (!hadError) {
      return (
        <Route
          render={(locationProps: RouteComponentProps) => (
            <RoutePath {...locationProps} />
          )}
        />
      );
    }
    return (
      <Alert
        message="Error Text"
        description="Oh Snap! You got an error!"
        type="error"
        closable={true}
        onClose={this.handleDismiss}
      />
    );
  }
}

export default Routes;
