import { Button, Chip, Popover, Stack, Typography } from '@mui/material';
import { useState } from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { PROJECT_STATUS_OPTIONS } from '../../../const/projects';

export const StatusFilter = ({ applyFilter, filter }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [filterState, setFilterState] = useState(filter);

  const handleClick = (event) => {
    setFilterState(filter);
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  const handleMultipleClick = (status) => {
    setFilterState((filter) =>
      filter.includes(status.value)
        ? filter.filter((f) => f !== status.value)
        : [...filter, status.value]
    );
  };

  return (
    <>
      <Button
        variant="text"
        onClick={handleClick}
        sx={{ '.MuiButton-icon': { marginLeft: '30px' } }}
        endIcon={<KeyboardArrowDownIcon sx={{ marginLeft: '12px' }} />}
        color="rgba(0, 0, 0, 0.87)"
        className="filterItem"
      >
        Status
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        sx={{ '.MuiPaper-root': { borderRadius: '15px' } }}
      >
        <Stack p="20px" gap="20px" width="450px">
          <Typography variant="h6">Select Status</Typography>
          <Stack direction="row" gap="10px" flexWrap="wrap">
            {PROJECT_STATUS_OPTIONS.map((status) => {
              return (
                <Chip
                  key={status.value}
                  label={status.label}
                  onClick={() => handleMultipleClick(status)}
                  color={
                    filterState.includes(status.value) ? 'primary' : 'default'
                  }
                  variant={
                    filterState.includes(status.value)
                      ? 'contained'
                      : 'outlined'
                  }
                  sx={{ width: '130px' }}
                />
              );
            })}
          </Stack>
          <Typography
            component="div"
            color="text.secondary"
            variant="caption"
            justifySelf="start"
          >
            *You can chosse multiple status
          </Typography>
          <Button
            variant="contained"
            sx={{ width: 'fit-content', margin: '0 auto' }}
            onClick={() => {
              applyFilter(filterState, '');
              handleClose();
            }}
          >
            Apply Now
          </Button>
        </Stack>
      </Popover>
    </>
  );
};
