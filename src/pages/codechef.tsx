import Head from "next/head";
import { makeStyles, ThemeProvider } from "@mui/styles";
//import { createTheme } from "@material-ui/core";
import { createTheme } from '@mui/material/styles';
import CodechefContent from "../../components/CodechefContent";

// const inter = Inter({ subsets: ['latin'] })

const mainTheme = createTheme({
  palette: {
    primary: {
      main: "#9763f6",
    },
    secondary: {
      main: "#f73378",
    },
    // Background colors
    info: {
      main: "#121212",
      light: "#191b21",
    },
  },
});

const useStyles = makeStyles(() => ({
  root: {
    marginTop: "160px",
    paddingBottom: "160px",
  },
}));

export default function Codechef() {
  //console.log(2 + 3);
  const classes = useStyles();
  return (
    <>
      <Head>
        <title>Code Score</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="icon"
          href="https://i.postimg.cc/44wF0BLr/images-removebg-preview.png"
        />
      </Head>
      <ThemeProvider theme={mainTheme}>
        <div className={classes.root}>
          <CodechefContent />
        </div>
      </ThemeProvider>
    </>
  );
}