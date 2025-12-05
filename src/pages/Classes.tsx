import ClassCard from '@/components/classes/ClassCard';
import Title from '@/components/common/Title';
import Layout from '@/components/layouts/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Plus, Search } from 'lucide-react';

export default function Classes() {
  const classes = [
    {
      id: '1',
      name: 'Sensores Ambientais',
      objects: 45,
      description: 'Sensores de temperatura, umidade e pressão',
    },
    {
      id: '2',
      name: 'Câmeras de Segurança',
      objects: 12,
      description: 'Dispositivos de vigilância e monitoramento',
    },
    {
      id: '3',
      name: 'Atuadores HVAC',
      objects: 8,
      description: 'Controle de climatização e ventilação',
    },
    {
      id: '4',
      name: 'Sensores de Movimento',
      objects: 23,
      description: 'Detecção de presença e movimento',
    },
    {
      id: '5',
      name: 'Displays Informativos',
      objects: 6,
      description: 'Painéis de informação digital',
    },
  ];

  return (
    <Layout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <Title
            title="Classes IoT"
            subtitle="Gerencie as classes cadastradas no sistema"
          />

          <Button className="bg-blue-500 hover:bg-blue-600 text-white">
            <Plus className="w-4 h-4 mr-2" />
            Nova Classe
          </Button>
        </div>
      </div>

      <Card className="mt-6">
        <CardContent className="pt-6">
          <div className="relative">
            <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Buscar classes..." className="pl-10" />
          </div>
        </CardContent>
      </Card>

      {/* Classes Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
        {classes.map((classItem) => (
          <ClassCard
            key={classItem.id}
            id={classItem.id}
            name={classItem.name}
            objects={classItem.objects}
            description={classItem.description}
          />
        ))}
      </div>
    </Layout>
  );
}
