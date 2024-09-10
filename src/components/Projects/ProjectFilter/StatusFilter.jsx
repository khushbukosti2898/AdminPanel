import { Button, Box, Chip, Popover, Stack, Typography } from '@mui/material';
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
        aria-describedby={id}
        variant="text"
        onClick={handleClick}
        endIcon={<KeyboardArrowDownIcon />}
        sx={{ textTransform: 'inherit' }}
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
      >
        <Stack p="20px" gap="20px" width="350px">
          <Stack
            direction="row"
            gap="20px"
            flexWrap="wrap"
            justifyContent="center"
          >
            {PROJECT_STATUS_OPTIONS.map((status) => {
              return (
                <Chip
                  key={status.value}
                  label={status.label}
                  onClick={() => handleMultipleClick(status)}
                  color="primary"
                  variant={
                    filterState.includes(status.value)
                      ? 'contained'
                      : 'outlined'
                  }
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
