import { useEffect, useState } from 'react';
import Chart from '@/components/common/Chart';
import CardStatus from '@/components/dashboard/CardStatus';
import Layout from '@/components/layouts/Layout';
import Title from '@/components/common/Title';
import Activities from '@/components/dashboard/Activities';
import { ActivitySquare, Box, Globe2, Layers, Users } from 'lucide-react';
import { api } from '@/services/api';

export default function Dashboard() {
  const [objects, setObjects] = useState<any>([]);
  const [classes, setClasses] = useState<any>([]);
  const [interactions, setInteractions] = useState<any>([]);
  const [enviroments, setEnviroments] = useState<any>([]);
  const [friendships, setFriendships] = useState<any>([]);

  useEffect(() => {
    fetchData();
  }, [objects, classes, interactions, enviroments, friendships]);

  const fetchData = async () => {
    try {
      const [objectsRes, classesRes, interactionsRes, envRes, friendshipRes] =
        await Promise.all([
          api.get('/object'),
          api.get('/class'),
          api.get('/interaction'),
          api.get('/ona-environment'),
          api.get('/pagerank-friendship'),
        ]);

      setObjects(objectsRes.data);
      setClasses(classesRes.data);
      setInteractions(interactionsRes.data);
      setEnviroments(envRes.data);
      setFriendships(friendshipRes.data);
    } catch (error) {
      console.log('Erro ao carregar:', error);
      // console.log('Erro na rota:', error.config?.url);
    }
  };

  function formatNumberBR(value: number, decimals: number = 2) {
    return new Intl.NumberFormat('pt-BR', {
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals,
    }).format(value);
  }

  const stats = [
    {
      icon: Box,
      label: 'Objetos',
      value: formatNumberBR(objects.length),
      change: '+12%',
      color: 'text-blue-500',
    },
    {
      icon: Layers,
      label: 'Classes',
      value: formatNumberBR(classes.length),
      change: '+5%',
      color: 'text-cyan-500',
    },
    {
      icon: ActivitySquare,
      label: 'Interações',
      value: formatNumberBR(interactions.length),
      change: '+23%',
      color: 'text-indigo-500',
    },
    {
      icon: Globe2,
      label: 'Ambientes',
      value: formatNumberBR(enviroments.length),
      change: '+3%',
      color: 'text-teal-500',
    },
    {
      icon: Users,
      label: 'Relações',
      value: formatNumberBR(friendships.length),
      change: '+18%',
      color: 'text-sky-500',
    },
  ];

  const recentActivities = [
    {
      type: 'Objeto',
      action: 'criado',
      name: 'Sensor de Temperatura #123',
      time: '2 minutos atrás',
    },
    {
      type: 'Interação',
      action: 'registrada',
      name: 'Device A → Device B',
      time: '5 minutos atrás',
    },
    {
      type: 'Classe',
      action: 'atualizada',
      name: 'Sensores Ambientais',
      time: '10 minutos atrás',
    },
    {
      type: 'Ambiente',
      action: 'criado',
      name: 'Sala de Servidor #2',
      time: '15 minutos atrás',
    },
  ];

  return (
    <Layout>
      <div className="space-y-8">
        <Title title="Dashboard" subtitle="Visão geral do sistema VISO-BASS" />

        <CardStatus stats={stats} />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Chart
            title="Interações ao Longo do Tempo"
            content="Gráfico de série temporal será exibido aqui"
          />

          <Chart
            title="Distribuição por Classe"
            content="Gráfico de distribuição será exibido aqui"
          />
        </div>

        <Activities activities={recentActivities} />
      </div>
    </Layout>
  );
}
