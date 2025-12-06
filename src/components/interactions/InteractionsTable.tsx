import type { IInteraction } from '@/types/interaction';
import { Badge } from '../ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { formatNumberBR } from '@/utils/format-number.util';
import { formatDate } from '@/utils/format-date.util';
import { cn } from '@/lib/utils';

interface InteractionsTableProps {
  interactions: IInteraction[];
  total: number;
}

export default function InteractionsTable({
  interactions,
  total,
}: InteractionsTableProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Interações Recentes ({formatNumberBR(total, 0)})</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left py-3 px-4 font-medium">Origem</th>
                <th className="text-left py-3 px-4 font-medium">Destino</th>
                <th className="text-left py-3 px-4 font-medium">Feedback</th>
                <th className="text-left py-3 px-4 font-medium">Timestamp</th>
              </tr>
            </thead>
            <tbody>
              {interactions.map((interaction) => (
                <tr
                  key={interaction._id}
                  className="border-b hover:bg-muted/50 transition-colors"
                >
                  <td className="py-3 px-4 font-medium">
                    {interaction.inter_obj_i}
                  </td>
                  <td className="py-3 px-4">{interaction.inter_obj_j}</td>
                  <td className="py-3 px-4">
                    <Badge
                      variant="outline"
                      className={cn(
                        interaction.inter_feedback
                          ? 'bg-green-300 text-green-600'
                          : 'bg-red-300 text-red-600'
                      )}
                    >
                      {interaction.inter_feedback ? 'Positiva' : 'Negativa'}
                    </Badge>
                  </td>
                  <td className="py-3 px-4 text-sm text-muted-foreground">
                    {formatDate(interaction.createdAt)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  );
}
