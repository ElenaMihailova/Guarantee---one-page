import PageWrapper from '../../components/PageWrapper';
import { Box, Typography, Container, Stack } from '@mui/material';
import telegramIcon from '../../assets/icon/tm.png';
import whatsAppIcon from '../../assets/icon/wa.png';
import MessengerButton from '../../components/messenger-button';

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
          gap: {
            xs: '20px',
          },
          paddingX: '0',
          maxWidth: '880px',
        }}
      >
        <Stack
          alignItems="center"
          justifyContent="center"
          sx={{
            flexDirection: {
              xs: 'column',
              md: 'row',
            },
            gap: {
              xs: '0px',
              md: '20px',
            },
          }}
        >
          <Stack
            direction="column"
            alignItems="center"
            justifyContent="center"
            sx={{
              marginBottom: {
                xs: '10px',
                md: '0',
              },
            }}
          >
            <a
              href="https://missis-laser.ru"
              style={{ width: '95px', display: 'block' }}
            >
              <img
                src="../../assets/logo-color.png"
                alt="Миссис Лазер"
                style={{ width: '95px', display: 'block' }}
              />
            </a>
            <Typography
              sx={{
                fontSize: '18px',
                fontWeight: 400,
                color: 'text.secondary',
                maxWidth: '240px',
                wordWrap: 'break-word',
                textAlign: 'center',
                margin: '0px',
              }}
            >
              missis_laser
            </Typography>
          </Stack>

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
              margin: '0px',
              marginTop: '0px',
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
            fontSize: {
              xs: '19px',
              md: '21px',
            },
            fontFamily: "'Exo 2', sans-serif",
            fontWeight: '700',
            color: 'text.primary',
            wordWrap: 'break-word',
            textAlign: 'center',
            margin: '0px',
            maxWidth: '700px',
          }}
        >
          Жми на мессенджер и забирай купон 10000 руб на лазерную эпиляцию с
          гарантией!
        </Typography>

        <Stack
          direction="column"
          spacing={2}
          justifyContent="center"
          width="100%"
          alignItems="center"
        >
          <MessengerButton
            href="https://t.me/m/na8mrlRkNjYy"
            text="Написать в Telegram"
            iconSrc={telegramIcon}
            backgroundColor="#77c6e5"
            hoverColor="#6bb0d4"
            altText="Telegram Icon"
          />

          <MessengerButton
            href="https://wa.me/79315878205?text=%D0%9F%D1%80%D0%B8%D0%B2%D0%B5%D1%82%2C%20%D0%BF%D0%B8%D1%88%D1%83%20%D1%87%D1%82%D0%BE%D0%B1%D1%8B%20%D0%B7%D0%B0%D0%B1%D1%80%D0%B0%D1%82%D1%8C%20%D0%BA%D1%83%D0%BF%D0%BE%D0%BD%2010000%20%D1%80%D1%83%D0%B1%20%D0%BD%D0%B0%20%D0%BB%D0%B0%D0%B7%D0%B5%D1%80%D0%BD%D1%83%D1%8E%20%D1%8D%D0%BF%D0%B8%D0%BB%D1%8F%D1%86%D0%B8%D1%8E!"
            text="Написать в WhatsApp"
            iconSrc={whatsAppIcon}
            backgroundColor="#2cb742"
            hoverColor="#28a745"
            altText="WhatsApp Icon"
          />
        </Stack>
      </Container>
    </PageWrapper>
  );
};

export default WelcomePageView;
