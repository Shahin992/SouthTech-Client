
import { Grid } from '@mui/material';
import Pcard from './Pcard.jsx';
import { useEffect, useState } from 'react';
import Typography from '@mui/material/Typography';


const ProductCard = () => {
    const [services,setServices] = useState([])
    useEffect(()=>{
      fetch('/services.json')
      .then(res => res.json())
      .then(data => {setServices(data)
      console.log(data);})
    },[])
    return (
    
       <Grid>
         <Typography variant="h6" sx={
            {   fontWeight: '700', 
                fontSize: {
                sm: '24px', 
                md: '48px', 
              },
                display:'flex',
                justifyContent: 'center',
                alignItems:'center',
                marginTop: '40px',
                color:'#08193C'

         }}>
         Types of Services We Provide
          </Typography>
          <Typography variant="h6" sx={
            {   fontWeight: '500', 
                fontSize: {
                sm: '18px', 
                md: '32px', 
              },
                display:'flex',
                justifyContent: 'center',
                alignItems:'center',
                marginBottom: '40px',
                
                
         }}>
         Designing Websites. Mobile Apps. Software
          </Typography>
        <Grid container spacing={3}>
        
        {services.map((service) => (
          <Pcard key={service.id} service={service}></Pcard>
        ))}
      </Grid>
       </Grid>
    )
};

export default ProductCard;