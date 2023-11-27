/* eslint-disable react/jsx-key */

import { Accordion, AccordionSummary, AccordionDetails, Typography, Icon,Grid } from '@mui/material';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import { useEffect, useState } from 'react';

const FAQ = () => {

  const [faq,SetFaq] = useState([])
  const [expanded, setExpanded] = useState(false);
  
  useEffect(()=>{
    fetch('/accordion.json')
    .then(res => res.json())
    .then(data => {SetFaq(data)
    console.log(data);})
  },[])



 

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : null);
  };
    return (
      <Grid sx={{marginY: '40px'}}>
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
                marginY: '40px',
                color:'#08193C'

         }}>
         Common FAQs On UX/UI Design Solutions
          </Typography>
        </Grid>
        <Grid>
      {faq.map((ques, index) => (
        <Grid key={index} sx={{ border: '1px solid #ddd', borderRadius: '8px', marginBottom: '8px',  }}>
          <Accordion expanded={expanded === `panel${index}`} onChange={handleChange(`panel${index}`)}>
            <AccordionSummary
              aria-controls={`panel${index}a-content`}
              id={`panel${index}a-header`}
              expandIcon={<Icon>{expanded === `panel${index}` ? <RemoveIcon /> : <AddIcon />}</Icon>}
            >
              <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                {ques.Quesion}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <p>{ques.answer}</p>
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Grid>
      ))}
      </Grid>
    </Grid>
    );
};

export default FAQ;