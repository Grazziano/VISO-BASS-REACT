import CardStatus from '@/components/dashboard/CardStatus';
import Layout from '@/components/layouts/Layout';
import Title from '@/components/Title';
import { ActivitySquare, Box, Globe2, Layers, Users } from 'lucide-react';

export default function Dashboard() {
  const stats = [
    {
      icon: Box,
      label: 'Objetos',
      value: '1,234',
      change: '+12%',
      color: 'text-blue-500',
    },
    {
      icon: Layers,
      label: 'Classes',
      value: '45',
      change: '+5%',
      color: 'text-cyan-500',
    },
    {
      icon: ActivitySquare,
      label: 'Interações',
      value: '8,765',
      change: '+23%',
      color: 'text-indigo-500',
    },
    {
      icon: Globe2,
      label: 'Ambientes',
      value: '23',
      change: '+3%',
      color: 'text-teal-500',
    },
    {
      icon: Users,
      label: 'Relações',
      value: '567',
      change: '+18%',
      color: 'text-sky-500',
    },
  ];

  return (
    <Layout>
      <div className="space-y-8">
        <Title title="Dashboard" subtitle="Visão geral do sistema VISO-BASS" />

        <CardStatus stats={stats} />
      </div>
    </Layout>
  );
}
