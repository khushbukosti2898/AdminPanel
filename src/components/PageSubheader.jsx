import { Button, Stack } from '@mui/material';

export const PageSubheader = ({ buttonTitle, buttonClickAction, filter }) => {
  return (
    <Stack direction="row" justifyContent="space-between">
      {filter && <Stack>{filter}</Stack>}
      <Button
        sx={{ textTransform: 'capitalize' }}
        variant="contained"
        onClick={buttonClickAction}
      >
        {buttonTitle}
      </Button>
    </Stack>
  );
};
