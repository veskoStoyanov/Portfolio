import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Typography,
  Box,
  Divider
} from '@material-ui/core';

const useStyles = makeStyles (theme => ({
  mainContainer: {
    background: '#233',
  },
  timeLine: {
    position: 'relative',
    padding: '1rem',
    margin: '0 auto',
    '&:before': {
      content: "''",
      position: 'absolute',
      height: '100%',
      border: '1px solid tan',
      right: '40px',
      top: 0,
    },
    "&:after": {
      content: "''",
      display: 'table',
      clear: 'both',
    },
    [theme.breakpoints.up('md')]: {
      padding: '2rem',
      '&:before': {
        left: "calc(50% - 1px)",
        right: "auto"
      }
    }
  },
  timeLineItem: {
    padding: '1rem',
    borderBottom: '2px solid tan',
    position: 'relative',
    margin: '1rem 3rem 1rem 1rem',
    clear: 'both',
    '&:after': {
      content: "''",
      position: 'absolute'
    },
    '&:before': {
      content: "''",
      position: 'absolute',
      right: '-0.625rem',
      top: 'calc(50% - 5px)',
      borderStyle: 'solid',
      borderColor: 'tomato tomato transparent transparent',
      borderWidth: '0.625rem',
      transform: 'rotate(45deg)'
    },
    [theme.breakpoints.up("md")]: {
      width: '44%',
      margin: '1rem',
      '&:nth-of-type(2n)': {
        float: 'right',
        margin: '1rem',
        borderColor: 'tan'
      },
      '&:nth-of-type(2n):before': {
        right: 'auto',
        left: '-0.625rem',
        borderColor: 'transparent transparent tomato tomato'
      }
    }
    },
    timeLineYear: {
      textAlign: 'center',
      maxWidth: '9.375rem',
      margin: '0 3rem 0 auto',
      fontSize: '1.8rem',
      background: 'tomato',
      color: 'white',
      lineHeight: 1,
      padding: '0.5rem 0 1rem',
      '&:before': {
        display: 'none'
      },
      [theme.breakpoints.up('md')]: {
        textAlign: 'center',
        margin: '0 auto',
        '&:nth-of-type(2n)': {
          float: 'none',
          margin: '0 auto'
        },
        '&:nth-of-type(2n):before': {
          display: 'none'
        }
      }
    },
    heading: {
      color: 'tomato',
      padding: '3rem 0',
      textTransform: 'uppercase',
    },
    subHeading: {
      color: 'white',
      padding: '0',
      textTransform: 'uppercase'
    },
    link: {
      color: 'tomato',
      'text-decoration': 'none',
      '&:hover': {
        color: 'white'
      }
    } 
}));

const Resume = () => {
	const classes = useStyles();
		
    return (
    	<>
      	<Box component='header' className={ classes.mainContainer } >
          <Typography
						variant='h4'
						align='center'
						className={ classes.heading }
					>
            programing experience
          </Typography>
          <Box component='div' className={ classes.timeLine }>
            <Typography
							className={`${classes.timeLineYear} ${classes.timeLineItem}`}
							variant='h2'
						>
              2018
            </Typography>
            <Box component='div' className={ classes.timeLineItem } >
              <Typography
								variant='h5'
								align='center'
								className={ classes.subHeading }
							>
                C#
              </Typography>
              <Typography variant='subtitle1' align='center'>
                <Divider />
                <a
									className={ classes.link }
									href='https://softuni.bg/Certificates/Details/60616/ea4dd6e4'
								>
									Programming Basics
								</a>
                <Divider />
                <a
									className={ classes.link }
									href='https://softuni.bg/certificates/details/65248/01a17c48'
								>
									Technology Fundamentals
								</a>
                <Divider />
              </Typography>
              <Typography
								variant='subtitle1'
								align='center'
								style={{ color: 'tan' }}
							>
                I studied Algorithms, Lambda expression, Linq, Matrices, Stucks and Queues, functional programming,
								blog-project with ms-sql and more.
              </Typography>
            </Box>
            <Typography
							className={`${classes.timeLineYear} ${classes.timeLineItem}`}
							variant='h2'
						>
              2019
            </Typography>
						<Box 
							component='div'
							className={ classes.timeLineItem }
						>
              <Typography
								variant='h5'
								align='center'
								className={ classes.subHeading }
							>
                Java Script
              </Typography>
            <Typography variant='subtitle1' align='center' >
						<Divider />
              <a
								className={ classes.link }
								href='https://softuni.bg/certificates/details/67287/64627dd8'
							>
								JS Essential
							</a>
              <Divider />
							<a 
								className={ classes.link }
								href='https://softuni.bg/certificates/details/68457/22c296d6'
							>
								JS Advanced
							</a>
              <Divider />
              <a
								className={ classes.link }
								href='https://softuni.bg/certificates/details/70028/739e9db0'
							>
								JS Apps
							</a>
              <Divider />
            </Typography>
            <Typography
							variant='subtitle1'
							align='center'
							style={{ color: 'tan' }}
						>
              I  became familiar with  OOP, Design Patterns, Maps, JSON, Unit testing, Prototype, Object Composition,
							DOM and I did hundreds of exercises.
            </Typography>
          </Box>
          <Typography
						className={`${classes.timeLineYear} ${classes.timeLineItem}`}
						variant='h2'
					>
            2019
          </Typography>
          <Box component='div' className={ classes.timeLineItem } >
            <Typography
							variant='h5'
							align='center'
							className={ classes.subHeading }
						>
              NodeJS VanilaJS React Angular
            </Typography>
            <Typography variant='subtitle1' align='center' >
              <Divider />
              <a
								className={ classes.link }
								href='https://softuni.bg/certificates/details/72498/676c04d8'
							>
								JS Back-End
							</a>
              <Divider />
              <a
								className={ classes.link }
								href='https://softuni.bg/certificates/details/75509/4fcc9f79'
							>
								ReactJS
							</a>
              <Divider />
              <a
								className={ classes.link }
								href='https://softuni.bg/certificates/details/77669/22e7a5be'
							>
								Angular
							</a>
              <Divider />
            </Typography>
            <Typography
							variant='subtitle1'
							align='center'
							style={{ color: 'tan' }}
						>
              I built SPA commercial site with authentication and authorization, Redux, Hooks, google maps, weather api
							and more. Testing with Jest and enzyme. Back-end Rest-api NodeJS(Express) and MongoDb(mongoose).
            </Typography>
            </Box>
            <Typography
							className={`${classes.timeLineYear} ${classes.timeLineItem}`}
							variant='h2' 
						>
              2020
            </Typography>
            <Box component='div' className={ classes.timeLineItem } >
              <Typography variant='h5' align='center' className={ classes.subHeading }>
                HTML & CSS VueJS
              </Typography>
              <Typography variant='subtitle1' align='center' style={{color: 'white'}} >
                and successfully completed my education
                <Divider />
								<a 
									className={ classes.link }
									href='https://softuni.bg/certificates/details/80847/969665d7'
								>
									 24/04 Diploma JS Web Developer
								</a>
                <Divider />
              </Typography>
              <Typography
								variant='subtitle1'
								align='center'
								style={{ color: 'tan' }}
							>
                HTML structore, Typography, Box model, Position and Float, Flexbox, Media queries, CSS architecture -
								IT, BEM, SASS, Grid, Transitions, Animations, Transformations, Bootstrap, Material-UI
              </Typography>
            </Box>
            <Typography
							className={`${classes.timeLineYear} ${classes.timeLineItem}`}
							variant='h2'
						>
               05/2020
            </Typography>
            <Box component='div' className={ classes.timeLineItem } >
              <Typography variant='h5' align='center' className={ classes.subHeading }>
                MERN Stack
              </Typography>
              <Typography variant='subtitle1' align='center' style={{ color: 'tomato' }}>
                started working at Брокер Инс ООД(broker Ins OOD)
              </Typography>
              <Typography variant='subtitle1' align='center' style={{ color: 'tan' }} >
                I've been working mainly with JavaScript, React, VueJS, NodeJs, Express, mongoDb, mongoose, Git, Gitlab,
                openapi(swagger), Jest, react-testing-library, PassportJs, Docker, Webpack, Babel, HTML, Vanila CSS and Material-UI as full-stack
                developer.
              </Typography>
            </Box>
          </Box>
        </Box>
      </>
    )
}

export default Resume;
