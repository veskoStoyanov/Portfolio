import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { 
	BottomNavigation,
	BottomNavigationAction
} from '@material-ui/core';

import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import LinkedInIcon2 from '@material-ui/icons/LinkedIn';

const useStyles = makeStyles({
	root: {
		'& .MuiBottomNavigationAction-root': {
			minWidth: 0,
			maxWidth: 250
		},
		'& .MuiSvgIcon-root': {
			fill: 'tan',
			'&:hover': {
				fill: 'tomato',
				fontSize: '1.8rem'
			}
		}
	}
});

const Footer = () => {
	const classes = useStyles();

  return (
		<BottomNavigation
			className={ classes.root }
			width='auto'
			style={{
				background: '#222'
			}}
		>
			<BottomNavigationAction
				className={ classes.root }
				style={{ padding: 0 }}
				icon={ <GitHubIcon /> }
				href='https://github.com/veskoStoyanov/SOFTUNI-EDUCATION'
			/>
			<BottomNavigationAction
				className={ classes.root }	
				style={{ padding: 0 }}
				icon={ <LinkedInIcon /> }
				href='https://www.linkedin.com/in/vesko-stoyanov-5072411a6/'
			/>
		</BottomNavigation>
    )
}

export default Footer;
