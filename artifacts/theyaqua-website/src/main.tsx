import { createRoot, hydrateRoot } from 'react-dom/client';

import App from './App';
import { ErrorBoundary } from '@/components/error-boundary';

import './index.css';

const container = document.getElementById('root')!;
const options = {
  // Keeps caught errors off reportError(), which would raise the dev overlay.
  onCaughtError: (error: unknown, errorInfo: { componentStack?: string | null }) => {
    console.error(error, errorInfo.componentStack);
  },
};
const page = (
  <ErrorBoundary>
    <App />
  </ErrorBoundary>
);

if (container.hasChildNodes()) {
  hydrateRoot(container, page, options);
} else {
  createRoot(container, options).render(page);
}
