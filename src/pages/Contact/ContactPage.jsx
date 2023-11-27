import {  Typography,Grid, Container, TextField, Button, Box } from '@mui/material';

const ContactPage = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
      
        
      };
    return (
        <Grid sx={{marginBottom:'40px'}}>
            <Grid>
        <Typography variant="h6" sx={
            {   fontWeight: '700', 
                fontSize: {
                sm: '24px', 
                md: '42px', 
              },
                display:'flex',
                justifyContent: 'center',
                alignItems:'center',
                marginTop: '40px',
                color:'#08193C'

         }}>
        Contact SouthTech
          </Typography>
          <Typography variant="h6" sx={{ fontWeight: 'medium',display:'flex',
                justifyContent: 'center',
                alignItems:'center',
                marginBottom: '24px',
                color:'#08193C' }}>
          Now the best software solutions are just a few clicks away! Reach us today, we would love to hear from you!
              </Typography>
              
          
        </Grid>
       <Grid container  sx={{display:'flex', flexDirection: { sm: 'column', lg: 'row' },justifyContent:'center',alignItems:'center' }}>
        <Grid  sx={{width:{sm:'90%', md:'90%',lg:'50%'}, background: 'linear-gradient(180deg, #56c4cf 0%, #00619b 100%)', height:'500px'}} >
        <Container >
      <form onSubmit={handleSubmit}>
        <TextField
          label="Name"
          variant="outlined"
          fullWidth
          margin="normal"
          required
          sx={{ background: 'white' }}
        />
        <TextField
          label="Phone"
          variant="outlined"
          fullWidth
          margin="normal"
          required
          sx={{ background: 'white' }}
        />
        <TextField
          label="Email"
          type="email"
          variant="outlined"
          fullWidth
          margin="normal"
          required
          sx={{ background: 'white' }}
        />
        <TextField
          label="Message"
          multiline
          rows={4}
          variant="outlined"
          fullWidth
          margin="normal"
          required
          sx={{ background: 'white' }}
        />
        <Button variant="outlined" sx={{ width:'full', marginTop: '16px', display: 'block', margin: 'auto',color:'white', border: '1px solid white', 
    '&:hover': {
      backgroundColor: 'white', 
      color: 'initial', 
    }, }}>
          Send
        </Button>
      </form>
    </Container>
            
        </Grid>
        <Grid sx={{width:{sm:'100%', md:'100%',lg:'50%'}}} >
        <Box sx={{ width: 'full' }}>
      <iframe
        title="Google Map"
        width="100%"
        height="500"
        frameBorder="0"
        scrolling="no"
        marginHeight="0"
        marginWidth="0"
        src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=+(SouthTech)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
      >
        <a href="https://www.maps.ie/population/">Find Population on Map</a>
      </iframe>
    </Box>


        </Grid>
       </Grid>
         
            
        </Grid>
    );
};

export default ContactPage;