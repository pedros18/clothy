import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';
import CreditScoreOutlinedIcon from '@mui/icons-material/CreditScore';
import WorkspacePremiumOutlinedIcon from '@mui/icons-material/WorkspacePremium';
import AccessAlarmOutlinedIcon from '@mui/icons-material/AccessAlarm';
import { Box, Container, Divider, Stack, Typography, useMediaQuery } from '@mui/material';
import { useTheme } from '@emotion/react';

const IconSection = () => {
  const theme = useTheme();
  return (
    <Container sx={{ mt: 4 ,bgcolor: theme.palette.mode === "dark" ? "#000" : "#FFF" }}> {/* Added top margin for spacing */}
      <Stack divider={useMediaQuery('(min-width:600px)') ? (<Divider orientation='vertical' flexItem />): (null)} direction="row" justifyContent={"center"} alignItems="center" flexWrap={"wrap"}>
        <Mybox icon={<ElectricBoltIcon />} title="Fast Delivery" subtitle="Start from $10" />
        <Mybox icon={<WorkspacePremiumOutlinedIcon />} title="Money Guarantee" subtitle="7 Days Back" />
        <Mybox icon={<AccessAlarmOutlinedIcon />} title="365 Days" subtitle="For free return" />
        <Mybox icon={<CreditScoreOutlinedIcon />} title="Payment" subtitle="Secure system" />
      </Stack>
    </Container>
  );
};

export default IconSection;

const Mybox = ({ icon, title, subtitle }) => {
  const theme = useTheme();

  return (
    <Box  sx={{width:250, display: 'flex', alignItems: 'center', gap: 3,flexGrow:1,py:1.6,
    justifyContent: useMediaQuery("(min-width:600px)") ? "center" : "left", }}> {/* Added flexbox for layout and gap between icon and text */}
      <Box sx={{ color: theme.palette.primary.main }}>{icon}</Box>
      <Box>
        <Typography variant="body1" sx={{ fontWeight: 600 }}>{title}</Typography> {/* Made title bolder */}
        <Typography
          variant="body2"
          sx={{ fontWeight: 300, color: theme.palette.text.secondary }}
        >
          {subtitle}
        </Typography>
      </Box>
    </Box>
  );
};
