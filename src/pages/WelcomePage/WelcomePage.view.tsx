import PageWrapper from '../../components/PageWrapper';
import { Box, Button, Typography, Container, Stack } from '@mui/material';
import TelegramIcon from '@mui/icons-material/Telegram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const WelcomePageView = () => {
  return (
    <PageWrapper>
      <Container
        sx={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '20px',
          paddingX: '0',
        }}
      >
        <Stack
          direction="row"
          spacing={4}
          alignItems="center"
          justifyContent="center"
        >
          <img
            src="../../assets/logo-color.png"
            alt="Миссис Лазер"
            style={{ width: '95px' }}
          />
          <Typography
            variant="h4"
            gutterBottom
            sx={{
              fontSize: '17px',
              lineHeight: '26px',
              fontWeight: 400,
              color: 'text.primary',
              maxWidth: '240px',
              wordWrap: 'break-word',
              textAlign: 'center',
            }}
          >
            Сеть клиник лазерной эпиляции и косметологии
            <Box component="span" sx={{ color: 'text.secondary' }}>
              {' '}
              «Миссис Лазер»
            </Box>
          </Typography>
        </Stack>

        <Typography
          variant="h6"
          gutterBottom
          sx={{
            fontSize: '21px',
            fontWeight: 700,
            color: 'text.primary',
            wordWrap: 'break-word',
            textAlign: 'center',
          }}
        >
          Жми на мессенджер и забирай купон 10000 руб на лазерную эпиляцию с
          гарантией!
        </Typography>

        <Stack direction="column" spacing={2} justifyContent="center">
          <Button
            href="https://t.me/m/na8mrlRkNjYy"
            sx={{
              color: 'common.white',
              fontSize: {
                xs: '20px',
                sm: '25px',
                md: '30px',
              },
              fontFamily: "'Exo2', Arial, sans-serif",
              lineHeight: 1.55,
              fontWeight: 700,
              borderWidth: '1px',
              borderRadius: '30px',
              backgroundColor: '#77c6e5',
              backgroundPosition: 'center center',
              borderColor: 'transparent',
              borderStyle: 'solid',
              paddingX: '40px',
              paddingY: '10px',
              transition:
                'background-color 0.3s ease-in-out, color 0.3s ease-in-out, border-color 0.3s ease-in-out',
              boxShadow: '0px 4px 39px 0px rgba(255, 226, 236, 0.3)',
              textTransform: 'none',
              '&:hover': {
                backgroundColor: '#6bb0d4',
              },
            }}
          >
            Написать в Telegram
            <TelegramIcon sx={{ marginLeft: '8px', fontSize: '30px' }} />
          </Button>

          <Button
            href="https://wa.me/79315878205?text=%D0%9F%D1%80%D0%B8%D0%B2%D0%B5%D1%82%2C%20%D0%BF%D0%B8%D1%88%D1%83%20%D1%87%D1%82%D0%BE%D0%B1%D1%8B%20%D0%B7%D0%B0%D0%B1%D1%80%D0%B0%D1%82%D1%8C%20%D0%BA%D1%83%D0%BF%D0%BE%D0%BD%2010000%20%D1%80%D1%83%D0%B1%20%D0%BD%D0%B0%20%D0%BB%D0%B0%D0%B7%D0%B5%D1%80%D0%BD%D1%83%D1%8E%20%D1%8D%D0%BF%D0%B8%D0%BB%D1%8F%D1%86%D0%B8%D1%8E!"
            sx={{
              color: 'common.white',
              fontSize: {
                xs: '20px',
                sm: '25px',
                md: '30px',
              },
              fontFamily: "'Exo2', Arial, sans-serif",
              lineHeight: 1.55,
              fontWeight: 700,
              borderWidth: '1px',
              borderRadius: '30px',
              backgroundColor: '#2cb742',
              backgroundPosition: 'center center',
              borderColor: 'transparent',
              borderStyle: 'solid',
              paddingX: '40px',
              paddingY: '10px',
              transition:
                'background-color 0.3s ease-in-out, color 0.3s ease-in-out, border-color 0.3s ease-in-out',
              boxShadow: '0px 4px 39px 0px rgba(255, 226, 236, 0.3)',
              textTransform: 'none',
              '&:hover': {
                backgroundColor: '#28a745',
              },
            }}
          >
            Написать в WhatsApp
            <WhatsAppIcon sx={{ marginLeft: '8px', fontSize: '30px' }} />
          </Button>
        </Stack>
      </Container>
    </PageWrapper>
  );
};

export default WelcomePageView;
