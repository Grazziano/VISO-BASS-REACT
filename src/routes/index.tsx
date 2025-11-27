import About from '@/pages/About';
import Classes from '@/pages/Classes';
import Dashboard from '@/pages/Dashboard';
import Environments from '@/pages/Environments';
import Friendships from '@/pages/Friendships';
import Interactions from '@/pages/Interactions';
import Login from '@/pages/Login';
import NotFound from '@/pages/NotFound';
import Objects from '@/pages/Objects';
import Register from '@/pages/Register';
import { Routes, Route, Navigate } from 'react-router-dom';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" replace />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/objects" element={<Objects />} />
      <Route path="/classes" element={<Classes />} />
      <Route path="/interactions" element={<Interactions />} />
      <Route path="/environments" element={<Environments />} />
      <Route path="/friendships" element={<Friendships />} />
      <Route path="/about" element={<About />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
