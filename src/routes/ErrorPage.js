import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';


export default function ErrorPage() {
  return(
     <Card sx={{ width: 1/2, mx: 'auto', my: 10 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="300"
          image="https://www.meme-arsenal.com/memes/b084afa2b8c082060b58360e309c11a5.jpg"
          alt="ГРУСТНЫЙКОТИК"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            ВСЁ СЛОМАЛОСЬ!
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Скорее всего null закрался в массив с задачами. Нужно попробовать следующее: F12->Applications->Local Storage-> удалить: react-todo-list-todos
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}
