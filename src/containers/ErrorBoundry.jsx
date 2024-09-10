import React from 'react';
import { Button, Typography } from '@mui/material';

export class ErrorBoundary extends React.Component {
  static getDerivedStateFromError(error) {
    return { hasError: true, errorInfo: error.toString() };
  }
  constructor(props) {
    super(props);
    this.state = { hasError: false, errorInfo: '' };
  }

  componentDidCatch(error) {
    this.setState({
      hasError: true,
      errorInfo: error.toString(),
    });

    if (error) {
      Bugsnag.notify(error);
    }
  }

  render() {
    const { hasError, errorInfo } = this.state;
    const { children } = this.props;
    if (hasError) {
      return (
        <div className="error-container">
          <div className={errorConent}>
            <Typography variant="h5" component="h3">
              Oops... Something went wrong 😟
            </Typography>
            <Typography component="p" className={errorInfoClass}>
              {errorInfo}
            </Typography>
            <Button
              variant="contained"
              color="primary"
              onClick={() => window.location.reload()}
            >
              Refresh Page
            </Button>
          </div>
        </div>
      );
    }

    return children;
  }
}
