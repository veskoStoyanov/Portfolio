import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Box,
  Grid,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
	Typography
} from '@material-ui/core';

import vanilaImg from '../images/vanila.jpg';
import fullImg from '../images/full.jpg';
import reactImg from '../images/reactt.jpeg';
import htmlImg from '../images/htmlcss.png';
import node from '../images/nodejs-logo.png';
import github from '../images/gith.jpg';

const useStales = makeStyles(theme => ({
  mainContainer: {
    background: '#233',
    height: "100%"
  },
  cardContainer: {
    maxWidth: 345,
    margin: '5rem auto',
  }
}));

const Portfolio = () => {
  const classes = useStales();

  return (
    <>
      <Box component='div' className={classes.mainContainer}>
        <Grid container justify='center' >
          <Grid item xs={8} md={6}>
            <Card className={classes.cardContainer}>
              <CardActionArea>
                <CardMedia
                  component='img'
                  alt='Portfolio'
                  height='140'
                  image={vanilaImg}
                />
                <CardContent>
                  <Typography variant='h5' gutterBottom >
                    VanilaJS
                  </Typography>
                </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button
                    size='small'
                    variant='outlined'
                    style={{ color: 'tomato', background: '#233' }}
                    href='https://relaxed-roentgen-dce131.netlify.app'
                  >
                   Furniture-e
                  </Button>
                  <Button
                    size='small'
                    variant='outlined'
                    style={{ color: 'tomato', background: '#233' }}
                    href='https://github.com/veskoStoyanov/SOFTUNI-EDUCATION/tree/master/PROJECTS/VanilaJs/Furniture-E-store'
                  >
                   GITHUB
                  </Button>
                </CardActions>
                <CardActions>
                  <Button
                    size='small'
                    variant='outlined'
                    style={{ color: 'tomato', background: '#233' }}
                    href='https://objective-nightingale-660bb2.netlify.app'
                  >
                   Budget-Calc
                  </Button>
                  <Button
                    size='small'
                    variant='outlined'
                    style={{ color: 'tomato', background: '#233' }}
                    href='https://github.com/veskoStoyanov/SOFTUNI-EDUCATION/tree/master/PROJECTS/VanilaJs/Budget-Calculator'
                  >
                   GITHUB
                  </Button>
                </CardActions>
                <CardActions>
                  <Button
                    size='small'
                    variant='outlined'
                    style={{ color: 'tomato', background: '#233' }}
                    href='https://wizardly-mayer-d8bc07.netlify.app'
                  >
                   Time-Converter
                  </Button>
                  <Button
                    size='small'
                    variant='outlined'
                    style={{ color: 'tomato', background: '#233' }}
                    href='https://github.com/veskoStoyanov/SOFTUNI-EDUCATION/tree/master/PROJECTS/VanilaJs/Time-Converter'
                  >
                   GITHUB
                  </Button>
                </CardActions>
                <CardActions>
                </CardActions>
            </Card>
          </Grid>
          <Grid item xs={8} md={6}>
            <Card className={classes.cardContainer}>
              <CardActionArea>
                <CardMedia
                  component='img'
                  alt='Portfolio'
                  height='140'
                  image={fullImg}
                />
                <CardContent>
                  <Typography variant='h5' gutterBottom >
                   React, Angular, NodeJS
                  </Typography>
                </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button
                    size='small'
                    variant='outlined'
                    style={{ color: 'tomato', background: '#233' }}
                    href='https://elegant-mahavira-28329e.netlify.app'
                  >
                    Work-test
                  </Button>
                  <Button
                    size='small'
                    variant='outlined'
                    style={{ color: 'tomato', background: '#233' }}
                    href='https://github.com/veskoStoyanov/SOFTUNI-EDUCATION/tree/master/PROJECTS/Full-Stack/Test-for-work-with-NodeJS'
                  >
                    GITHUB
                  </Button>
                </CardActions>
                <CardActions>
                  <Button
                    size='small'
                    variant='outlined'
                    style={{ color: 'tomato', background: '#233' }}
                    href='https://github.com/veskoStoyanov/SOFTUNI-EDUCATION/tree/master/PROJECTS/Full-Stack/Motors'
                  >
                    MOTORS - GITHUB
                  </Button>
                </CardActions>
                <CardActions>
                  <Button
                    size='small'
                    variant='outlined'
                    style={{ color: 'tomato', background: '#233' }}
                    href='https://github.com/veskoStoyanov/SOFTUNI-EDUCATION/tree/master/PROJECTS/Full-Stack/Angular'
                  >
                   Angular - GITHUB
                  </Button>
                </CardActions>
                <CardActions>
                </CardActions>
            </Card>
          </Grid>
          <Grid item xs={8} md={6}>
            <Card className={classes.cardContainer}>
              <CardActionArea>
                <CardMedia
                  component='img'
                  alt='Portfolio'
                  height='140'
                  image={reactImg}
                />
                <CardContent>
                  <Typography variant='h5' gutterBottom >
                   ReactJs
                  </Typography>
                </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button
                    size='small'
                    variant='outlined'
                    style={{ color: 'tomato', background: '#233' }}
                    href='https://jolly-hawking-705b45.netlify.app'
                  >
                   Holiday
                  </Button>
                  <Button
                    size='small'
                    variant='outlined'
                    style={{ color: 'tomato', background: '#233' }}
                    href='https://github.com/veskoStoyanov/SOFTUNI-EDUCATION/tree/master/PROJECTS/React/Holiday-React'
                  >
                    GITHUB
                  </Button>
                </CardActions>
                <CardActions>
                  <Button
                    size='small'
                    variant='outlined'
                    style={{ color: 'tomato', background: '#233' }}
                    href='https://awesome-stonebraker-1b3e35.netlify.app'
                  >
                   E-phone-store
                  </Button>
                  <Button
                    size='small'
                    variant='outlined'
                    style={{ color: 'tomato', background: '#233' }}
                    href='https://github.com/veskoStoyanov/SOFTUNI-EDUCATION/tree/master/PROJECTS/React/PhoneE-store'
                  >
                   github
                  </Button>
                </CardActions>
                <CardActions>
                  <Button
                    size='small'
                    variant='outlined'
                    style={{ color: 'tomato', background: '#233' }}
                    href='https://vigorous-stonebraker-afc307.netlify.app'
                  >
                    Motors - Demo
                  </Button>
                  <Button
                    size='small'
                    variant='outlined'
                    style={{ color: 'tomato', background: '#233' }}
                    href='https://github.com/veskoStoyanov/SOFTUNI-EDUCATION/tree/master/PROJECTS/React/Motors-Demo'
                  >
                    GITHUB
                  </Button>
                </CardActions>
                <CardActions>
                </CardActions>
            </Card>
          </Grid>
          <Grid item xs={8} md={6}>
            <Card className={classes.cardContainer}>
              <CardActionArea>
                <CardMedia
                  component='img'
                  alt='Portfolio'
                  height='140'
                  image={htmlImg}
                />
                <CardContent>
                  <Typography variant='h5' gutterBottom >
                    HTML & CSS
                  </Typography>
                </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button
                    size='small'
                    variant='outlined'
                    style={{ color: 'tomato', background: '#233' }}
                    href='https://jovial-blackwell-f4bcfa.netlify.app'
                  >
                   Portfolio
                  </Button>
                  <Button
                    size='small'
                    variant='outlined'
                    style={{ color: 'tomato', background: '#233' }}
                    href='https://github.com/veskoStoyanov/SOFTUNI-EDUCATION/tree/master/PROJECTS/HTML%26CSS/Portfolio'
                  >
                    GITHUB
                  </Button>
                </CardActions>
                <CardActions>
                  <Button
                    size='small'
                    variant='outlined'
                    style={{ color: 'tomato', background: '#233' }}
                    href='https://hardcore-kare-b7fef9.netlify.app'
                  >
                   myTunes
                  </Button>
                  <Button
                    size='small'
                    variant='outlined'
                    style={{ color: 'tomato', background: '#233' }}
                    href='https://github.com/veskoStoyanov/SOFTUNI-EDUCATION/tree/master/PROJECTS/HTML%26CSS/musicPage'
                  >
                    github
                  </Button>
                </CardActions>
                <CardActions>
                  <Button
                    size='small'
                    variant='outlined'
                    style={{ color: 'tomato', background: '#233' }}
                    href='https://youthful-northcutt-6a367a.netlify.app'
                  >
                    Microsoft-home
                  </Button>
                  <Button
                    size='small'
                    variant='outlined'
                    style={{ color: 'tomato', background: '#233' }}
                    href='https://github.com/veskoStoyanov/SOFTUNI-EDUCATION/tree/master/PROJECTS/HTML%26CSS/MicrosoftHomePage'
                  >
                   github
                  </Button>
                </CardActions>
                <CardActions>
                </CardActions>
            </Card>
          </Grid>
          <Grid item xs={8} md={6}>
            <Card className={classes.cardContainer}>
              <CardActionArea>
                <CardMedia
                  component='img'
                  alt='Portfolio'
                  height='140'
                  image={node}
                />
                <CardContent>
                  <Typography variant='h5' gutterBottom >
                   NodeJS, Express, MongoDb, Mongoose, Handlebars - Projects
                  </Typography>
                </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button
                    size='small'
                    variant='outlined'
                    style={{ color: 'tomato', background: '#233' }}
                    href='https://github.com/veskoStoyanov/SOFTUNI-EDUCATION/tree/master/Node%2C%20Express%2C%20MongoDb'
                  >
                   github
                  </Button>
                </CardActions>
                <CardActions>
                </CardActions>
            </Card>
          </Grid>
          <Grid item xs={8} md={6}>
            <Card className={classes.cardContainer}>
              <CardActionArea>
                <CardMedia
                  component='img'
                  alt='Portfolio'
                  height='140'
                  image={github}
                />
                <CardContent>
                  <Typography variant='h5' gutterBottom >
                    C#, JavaScript, DOM, PhP, Dart, HTML & CSS, MySQL - Exercises
                  </Typography>
                </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button
                    size='small'
                    variant='outlined'
                    style={{ color: 'tomato', background: '#233' }}
                    href='https://github.com/veskoStoyanov/SOFTUNI-EDUCATION/tree/master/Exercises'
                  >
                   github
                  </Button>
                </CardActions>
                <CardActions>
                </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </>
  )
}

export default Portfolio;
