import { ReactNode } from 'react';
import { ErrorBoundary as ReactErrorBoundary } from 'react-error-boundary';

import { buttonStyles, pageWrapperStyles } from './ErrorBoundary.styled';

interface ErrorBoundaryProps {
  children: ReactNode;
}

export const ErrorBoundary = ({ children }: ErrorBoundaryProps) => {
  return (
    <ReactErrorBoundary
      fallback={
        <div style={pageWrapperStyles}>
          <h2>Something went wrong ...</h2>
          <button style={buttonStyles} onClick={() => window.location.reload()}>
            Reload
          </button>
        </div>
      }
    >
      {children}
    </ReactErrorBoundary>
  );
};
