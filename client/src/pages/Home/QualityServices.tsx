import React from 'react';
import { Box, Typography } from '@mui/material';

const QualityServices: React.FC = () => {
  return (
    <Box sx={{ padding: { xs: '20px', md: '50px' }, backgroundColor: '#f1f5f9' }}>
      {/* Title Section */}
      <Typography variant="h4" sx={{ color: '#00acc1', fontWeight: 700, marginBottom: '20px', textAlign: 'center' }} className='font-serif font-medium'>
        About Us
      </Typography>

      {/* Description and Image Section */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          justifyContent: 'space-between',
          gap: 4,
          marginTop: 6
        }}
      >
        {/* Description Section */}
        <Box sx={{ flex: 1, ml: '20px' }}>
          <Typography
            variant="body1"
            paragraph
            sx={{
              textAlign: { xs: 'center', md: 'left' },
              color: 'slategray', // Set text color to slate
              lineHeight: 1.5, // Leading normal (adjust line height)
              fontWeight: 300 // Font light (adjust font weight)
            }}
          >
            At SkyLine, we are dedicated to providing the highest quality water purification solutions for households and businesses. Our state-of-the-art filtration systems ensure that you have access to clean, safe drinking water free from contaminants. With a commitment to innovation and sustainability, we use advanced technologies that not only improve water quality but also conserve resources. Our team of experts is passionate about educating customers on the importance of clean water and how our products can enhance their health and well-being.
          </Typography>

          <Typography
            variant="body1"
            paragraph
            sx={{
              textAlign: { xs: 'center', md: 'left' },
              color: 'slategray', // Set text color to slate
              lineHeight: 1.5, // Leading normal (adjust line height)
              fontWeight: 300 // Font light (adjust font weight)
            }}
          >
            Whether you are looking for a compact home purifier or a large-scale filtration system for your office, SkyLine offers a range of products tailored to meet your needs. We pride ourselves on our customer service and support, ensuring that you have the information and assistance you need every step of the way. Join us in our mission to promote clean water for all, and experience the SkyLine difference today!
          </Typography>
        </Box>

        {/* Image Section */}
        <Box sx={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
          <img
            src='https://m.media-amazon.com/images/I/614lPnC5M2L._SX679_.jpg'
            alt="Kent Grand"
            style={{ width: '100%', maxWidth: '300px', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default QualityServices;
