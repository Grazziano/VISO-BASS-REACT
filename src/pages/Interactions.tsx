import { useEffect, useState } from 'react';
import Chart from '@/components/common/Chart';
import Title from '@/components/common/Title';
import InteractionsTable from '@/components/interactions/InteractionsTable';
import Layout from '@/components/layouts/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Filter, Search } from 'lucide-react';
import { api } from '@/services/api';
import Loading from '@/components/common/Loading';

export default function Interactions() {
  const [interactions, setInteractions] = useState([]);
  const [limit, setLimit] = useState<number>(0);
  const [page, setPage] = useState<number>(0);
  const [total, setTotal] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);

  console.log(limit);
  console.log(page);

  useEffect(() => {
    const fetchInteractions = async () => {
      try {
        setLoading(true);
        const response = await api.get('/interaction');
        setLimit(response.data.limit);
        setPage(response.data.page);
        setTotal(response.data.total);
        setInteractions(response.data.items);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchInteractions();
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <Layout>
      <div className="space-y-6">
        <Title
          title="Interações"
          subtitle="Monitore as interações entre objetos IoT"
        />

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Chart
            title="Interações por Dia"
            content="Gráfico de barras será exibido aqui"
          />

          <Chart
            title="Série Temporal"
            content="Gráfico de linha será exibido aqui"
          />
        </div>

        {/* Search and Filters */}
        <Card>
          <CardContent className="pt-6">
            <div className="flex gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Buscar interações..." className="pl-10" />
              </div>
              <Button variant="outline">
                <Filter className="w-4 h-4 mr-2" />
                Filtros
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Interactions Table */}
        <InteractionsTable interactions={interactions} total={total} />
      </div>
    </Layout>
  );
}
