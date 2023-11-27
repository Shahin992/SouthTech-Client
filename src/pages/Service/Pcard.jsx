/* eslint-disable react/prop-types */
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Grid } from '@mui/material';

const Pcard = ({service}) => {
    
    return (
        <Grid item  sm={12} md={6} lg={4}>
        <Card>
        <CardMedia
          component="img"
          alt={service.name}
          height="140"
          image={service.image}
        />
        <CardContent>
          <Typography variant="h6" sx={{ fontWeight: '700', fontSize: '20px' }}>
            {service.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" sx={{ fontWeight: '600', fontSize: '14px' }}>
            {service.description}
          </Typography>
        </CardContent>
        <Button
          variant="outlined"
          style={{ borderColor: '#01619C', color: 'bg-fushia-50' }}
          sx={{
            '&:hover': {
              backgroundColor: '#01619C',
              color: 'white',
            },
            width: '100%',
          }}
        >
        <Typography sx={{fontWeight:'600', textTransform: 'capitalize'}}>
            {
                service.button
            }
        </Typography>
        </Button>
      </Card>
      </Grid>
    );
};

export default Pcard;