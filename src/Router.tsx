import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { PageNotFound } from './pages/PageNotFound';
import { Profissional } from './pages/Profissional';
import { UserPerson } from './pages/UserPerson';

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/user-person" element={<UserPerson />} />
      <Route path="/profissional" element={<Profissional />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};