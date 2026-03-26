import React, { Component, ErrorInfo, ReactNode } from "react";

interface Props {
  children?: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
}

export default class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  };

  public static getDerivedStateFromError(_: Error): State {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }
      return (
        <div className="py-20 text-center text-muted-foreground flex flex-col items-center justify-center">
          <h2 className="text-xl font-semibold mb-2 text-foreground">Oops, something went wrong.</h2>
          <p className="text-sm">We're having trouble loading this section. Please refresh the page.</p>
        </div>
      );
    }

    return this.props.children;
  }
}
