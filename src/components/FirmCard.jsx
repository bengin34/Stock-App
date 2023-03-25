import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline"
import EditIcon from "@mui/icons-material/Edit"
import { btnStyle, flex } from '../styles/globalStyles';
import useStockCall from '../hooks/useStockCall';

export default function FirmCard({firm}) {
    const {deleteStockData} = useStockCall()

  return (
    <Card 
    sx={{
        p:2,
        width:300,
        height:400,
        display:"flex",
        flexDirection: "column",
        justifyContent: "space-between"
    }}
    >
    
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {firm?.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {firm?.address}
        </Typography>
      </CardContent>
      <CardMedia
        sx={{ p:1, objectFit: "contain", height:130 }}
        image={firm?.image}
        component="img"
        title={firm?.name}
      />
       <Typography variant="body2" color="text.secondary">
          {firm?.phone}
        </Typography>
      <CardActions sx={flex} >
       <DeleteOutlineIcon sx={btnStyle} onClick={() => deleteStockData("firms", firm.id)} />
       <EditIcon sx={btnStyle} />
      </CardActions>
    </Card>
  );
}