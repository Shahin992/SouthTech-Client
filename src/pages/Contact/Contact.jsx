import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { Link } from 'react-router-dom';
const Contact = () => {
    return (
        <Grid container justifyContent="center" alignItems="center" sx={{ background: 'linear-gradient(180deg, #56c4cf 0%, #00619b 100%)', minHeight: '50vh', color: '#fff' }}>
      <Container>
        <Typography variant="h3" component="h3" sx={{ fontSize: '2.5rem', fontWeight: 'bold', textAlign: 'center' }}>
          How Can We Help You?
        </Typography>
        <Typography variant="body1" component="p" sx={{ marginTop: '16px', textAlign: 'center' }}>
          We can help you from automating your HR to implementing UX/UI design solutions for your organization
        </Typography>
       <Link to='/contact'>
       <Button variant="outlined" sx={{ marginTop: '16px', display: 'block', margin: 'auto',color:'white', border: '1px solid white', 
    '&:hover': {
      backgroundColor: 'white', 
      color: 'initial', 
    }, }}>
          Get In Touch
        </Button>
       </Link>
      </Container>
    </Grid>
    );
};

export default Contact;