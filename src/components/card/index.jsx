import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, CardActionArea} from '@mui/material';

function PokemonCard({name, image, types}) {
    function typeHandler(){
        if(types[1]){
            return types[0].type.name + " | " + types[1].type.name
        }
        return types[0].type.name
    }
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          image={image}
          alt="green iguana"
        />
        <CardContent>
            <Box display='flex' justifyContent='space-between' alignItems='center'>
                <Typography gutterBottom variant="h5" component="div">
                    {name}
                </Typography>
                <Typography gutterBottom variant="caption" component="div">
                    {typeHandler()}
                </Typography>
            </Box>
        </CardContent>
      </CardActionArea>
      
    </Card>
  );
}

export default PokemonCard;