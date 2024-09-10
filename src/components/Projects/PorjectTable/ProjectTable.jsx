import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
} from '@mui/material';
import { PorjectTableHeader } from './PorjectTableHeader';
import { PROJECT_TABLE_HEADER } from '../../../const/projects';
import { PorjectTableRow } from './PorjectTableRow';

export const ProjectTable = ({ projects, onRowClick }) => {
  return (
    <Paper sx={{ borderRadius: '10px' }}>
      <TableContainer>
        <Table>
          <PorjectTableHeader />
          <TableBody>
            {!projects.length ? (
              <TableRow>
                <TableCell colSpan={PROJECT_TABLE_HEADER.length} align="center">
                  No data found
                </TableCell>
              </TableRow>
            ) : (
              projects.map((project) => (
                <PorjectTableRow
                  onRowClick={onRowClick}
                  key={project.id}
                  project={project}
                />
              ))
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};
