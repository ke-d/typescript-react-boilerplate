import * as React from 'react';

const styles = {
  main: {
    fontSize: '100px',
    fontWeight: 900,
  } as React.CSSProperties,
};

const PageNotFound: React.FunctionComponent = () => (
  <div>
    <h1 style={styles.main}>404 - Page not found</h1>
  </div>
);

export default PageNotFound;
