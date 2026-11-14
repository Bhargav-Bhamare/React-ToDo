import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';

import "./info.css";

export default function InfoBox ({info}){

    const INIT_URL ="https://images.unsplash.com/photo-1668531387310-9c3c2f272d52?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D";

    return(
        <div className='infoBox'>
        
        <Card sx={{ maxWidth: 445}} className='card'>
            <CardActionArea>
                <CardMedia
                component="img"
                height="270"
                image= {INIT_URL}
                alt="Cold weather"
                />
                <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {info.city}
                </Typography>
                <Typography variant="body2"sx={{ color: 'text.secondary'}} >
                    Folowing is the Information of the City temperature, humidity and more..
                    <br /><br />
                    <p><b>Temperature</b> = {info.temp}&deg;C</p>
                    <p><b>Min-Temp</b> = {info.tempMin}&deg;C</p>
                    <p><b>Max-Temp</b> = {info.tempMax}&deg;C</p>
                    <p><b>Humidity</b> = {info.humidity}</p>
                    <p><b>Feels- Like</b> = {info.feelsLike}&deg;C</p>
                
                </Typography>

                    
                
                </CardContent>
            </CardActionArea>
        </Card>
        <br /><br />
        </div>
    );
}