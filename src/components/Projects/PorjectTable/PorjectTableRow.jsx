import { TableCell, TableRow } from '@mui/material';
import { PROJECT_TABLE_HEADER } from '../../../const/projects';

export const PorjectTableRow = ({ project, onRowClick }) => {
  return (
    <TableRow key={project.id} onClick={() => onRowClick(project)} hover>
      {PROJECT_TABLE_HEADER.map((header) => {
        return (
          <TableCell align={header.align} key={header.id}>
            {project[header.id]}
          </TableCell>
        );
      })}
    </TableRow>
  );
};
