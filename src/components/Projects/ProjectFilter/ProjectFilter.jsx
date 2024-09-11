import { Button, Stack, Typography, TextField, Divider } from '@mui/material';
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import RestartAltOutlinedIcon from '@mui/icons-material/RestartAltOutlined';
import { StatusFilter } from './StatusFilter';

export const ProjectFilter = ({ search, applyFilter, filter, resetFilter }) => {
  return (
    <Stack
      direction="row"
      alignItems="center"
      sx={{
        backgroundColor: '#F5F5F5',
        border: '1px solid rgba(224, 224, 224, 1)',
        '.filterItem': {
          padding: '10px 20px',
        },
      }}
    >
      <Typography component="span" className="filterItem">
        <FilterAltOutlinedIcon size="small" />
      </Typography>
      <Divider orientation="vertical" flexItem />
      <Typography component="div" flexItem className="filterItem">
        Filter By
      </Typography>
      <Divider orientation="vertical" flexItem />
      <TextField
        className="filterItem"
        placeholder="Date"
        sx={{
          input: { padding: 0 },
          '.MuiOutlinedInput-notchedOutline': {
            border: '0!important',
          },
        }}
        size="small"
        onChange={(e) => applyFilter([], e.target.value)}
        type="date"
        value={search}
      />
      <Divider orientation="vertical" flexItem />
      <StatusFilter
        className="filterItem"
        applyFilter={applyFilter}
        filter={filter}
      />
      <Divider orientation="vertical" flexItem />
      <Button
        className="filterItem"
        startIcon={<RestartAltOutlinedIcon />}
        color="error"
        onClick={resetFilter}
      >
        Reset
      </Button>
    </Stack>
  );
};
