import { TableCell, TableHead, TableRow } from '@mui/material';
import { PROJECT_TABLE_HEADER } from '../../../const/projects';

export const PorjectTableHeader = () => {
  return (
    <TableHead>
      <TableRow>
        {PROJECT_TABLE_HEADER.map((header) => {
          return (
            <TableCell
              align={header.align}
              sx={{
                textTransform: 'uppercase',
                fontWeight: 'bold',
                borderRight: '1px solid #0000001f',
                margin: '8px 16px',
              }}
              key={header.id}
            >
              {header.label}
            </TableCell>
          );
        })}
      </TableRow>
    </TableHead>
  );
};
