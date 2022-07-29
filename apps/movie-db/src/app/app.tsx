import { Navigate, Route, Routes } from 'react-router-dom';
import MovieLanding from '../features/movie-landing/movie-landing';

export function App() {
  return (
    <Routes>
      <Route path="/search" element={<MovieLanding />}></Route>
      {/* <Route path="/movie">
        <Route path=":movieId" element={<MovieDetail/>}></Route>
      </Route> */}
      <Route path="*" element={<Navigate to="search" replace />}></Route>
    </Routes>
  );
}

export default App;
