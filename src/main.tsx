import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App.tsx';
import { GenresProvider } from './context/genres.context.tsx';
import { SearchProvider } from './context/SearchResult.context.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
    <SearchProvider>
      <GenresProvider>
        <App />
      </GenresProvider>
      </SearchProvider>
    </BrowserRouter>
  </StrictMode>
);
