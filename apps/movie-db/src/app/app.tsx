// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Navigate, Route, Routes } from 'react-router-dom';
import MovieDetail from '../features/movie-detail/movie-detail';
import MovieLanding from '../features/movie-landing/movie-landing';
import styles from './app.module.scss';
import NxWelcome from './nx-welcome';

export function App() {
  return (
    <Routes>
      <Route path="/search" element={<MovieLanding/>}></Route>
      <Route path="/movie">
        <Route path=":movieId" element={<MovieDetail/>}></Route>
      </Route>
      <Route path="*" element={<Navigate to="search" replace/>}></Route>
    </Routes>
  );
}

export default App;
