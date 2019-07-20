import { MuiThemeProvider, createMuiTheme } from '@material-ui/styles';

const Theme = () => {
  return createMuiTheme({
    typography: {
      fontFamily: [
        '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        'sans-serif'
      ].join(''),
    },
  });
}

export default Theme;