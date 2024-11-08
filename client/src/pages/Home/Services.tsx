import React from 'react';
import { Container, Grid, Card, CardContent, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

type Service = {
  title: string;
  description: string;
  image: string;
};

const services: Service[] = [
  {
    title: "Installation",
    description: "Our technicians are factory trained to install water purifiers for effective functioning.",
    image: "AuroInstallation.webp",
  },
  {
    title: "Maintenance",
    description: "We are the best when it comes to providing maintenance to water purifiers for safe and smooth run.",
    image: "AuroMaintenance.webp",
  },
  {
    title: "Repair",
    description: "We are the best when it comes to repair and provide hassle-free service for water purifiers.",
    image: "AuorRepair.webp",
  },
  {
    title: "Exchange",
    description: "We provide best exchange offers on our quality water purifiers of leading brands at best prices.",
    image: "AuroExchange.jpg",
  },
];

const Services: React.FC = () => {

  const navigate = useNavigate();

  return (
    <div className='mx-auto my-16'>
      <Container>
        {/* <Typography variant="h4" sx={{ color: '#00acc1', fontWeight: 700, marginBottom: '24px', textAlign: 'center' }} className='font-serif font-medium'>
        Services
      </Typography> */}


        <Typography
          variant="h2"
          sx={{
            color: '#00acc1',
            fontFamily: 'serif',  // Match font family
            fontWeight: 'medium',
            marginBottom: '20px',
            textAlign: 'center',
            fontSize: { xs: '2.5rem', md: '3rem' },  // Adjust font size to match
            marginTop: '20px',  // Optional: add top margin for spacing consistency
          }}
        >
          Services
        </Typography>

        <Grid container spacing={4}>
          {services.map((service, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card>
                <img
                  src={service.image}
                  alt={service.title}
                  style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '8px 8px 0 0' }}
                />
                <CardContent>
                  <Typography variant="h6" align="center" fontFamily= 'serif' gutterBottom>
                    {service.title}
                  </Typography>
                  <Typography variant="body2" color="textSecondary" align="center" fontFamily= 'serif'  paragraph>
                    {service.description}
                  </Typography>
                  <Button
                    variant="contained"
                    color="primary"
                    fullWidth
                    // style={{ marginTop: '10px', backgroundColor: '#0891b2' }}
                    sx={{
                      mt: 1, // margin-top in MUI shorthand
                      backgroundColor: '#0891b2',
                      '&:hover': {
                        backgroundColor: '#06b6d4',
                      },
                    }}
                    onClick={() => navigate('/login')}
                    className='font-serif'
                  >
                    Enquire Now
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>

  );
};

export default Services;
