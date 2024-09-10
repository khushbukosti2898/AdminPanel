import { Button, Stack, Typography } from '@mui/material';

export const PageHeader = ({
  title,
  buttonTitle,
  buttonClickAction,
  showButton,
}) => {
  return (
    <Stack direction="row" justifyContent="space-between">
      <Typography variant="h6" fontWeight="600">
        {title}
      </Typography>
      {buttonTitle && showButton && (
        <Button
          sx={{ textTransform: 'capitalize', width: 'fit-content' }}
          variant="contained"
          onClick={buttonClickAction}
        >
          {buttonTitle}
        </Button>
      )}
    </Stack>
  );
};
