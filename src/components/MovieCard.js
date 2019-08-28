import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import DefaultImage from '../images/default.jpg';

const useStyles = makeStyles({
  card: {
    maxWidth: 345,
  },
});

// a cardview containing the name and cover art image of a movie
const MovieCard = (props) => {
  let { name, imageUrl } = props;
  const classes = useStyles();

  // use the default image in case missing
  if (!imageUrl) {
    imageUrl = DefaultImage;
  }

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt={`${name}-cover`}
          height="140"
          image={imageUrl}
          title={name}
          onClick={() => window.location.href = `schedule/${encodeURIComponent(name)}`}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {name}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          size="small"
          color="primary"
          path={`schedule/${name}`}
          onClick={() => window.location.href = `schedule/${encodeURIComponent(name)}`}
        >
          Schedule
        </Button>
      </CardActions>
    </Card>
  );
};

export default MovieCard;
