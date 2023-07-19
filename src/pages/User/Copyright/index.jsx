/* import Link from '@mui/material/Link'; */
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';


export default function Copyright(props) {
    return (
      <Typography variant="body2" color="text.secondary" align="center" {...props}>
        {'Copyright © '}
        <Link color="inherit" to="https://mui.com/">
          React Drinks
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }