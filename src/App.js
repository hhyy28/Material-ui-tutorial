
import './App.css';
import { AppBar, Container, Toolbar, IconButton, Typography , Box, Paper, Grid,Card, CardMedia, CardActions, CardContent, BottomNavigationAction, BottomNavigation, Dialog, DialogTitle, DialogContent, DialogContentText, TextField, DialogActions} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu';
import LayerIcon from '@material-ui/icons/Layers';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import Button from  '@material-ui/core/Button'
import{ makeStyles} from '@material-ui/core/styles'
import FolderIcon from '@material-ui/icons/Folder'
import RestoreIcon from '@material-ui/icons/Restore'
import FavoriteIcon from '@material-ui/icons/Favorite'
import LocationIcon from '@material-ui/icons/LocationOn'
import React from 'react'

const useStyles = makeStyles((theme)=>({
  root:{
    flexGrow: 1
  },
  menuButton:{
    marginRight: theme.spacing(1)
  },
  title:{
    flexGrow: 1
  },
  mainFeaturesPost:{
    position:"relative",
    color: theme.palette.common.white,
    marginBottom: theme.spacing(4),
    backgroundSize:"cover",
    backgroundRepeat:"no-repeat",
    backgroundPosition:"center"
  },
  overlay:{
    position:"absolute",
    top:0,
    bottom:0,
    right:0,
    left:0,
    backgroundOverlay:"rgba(0,0,0,.3)"
  },
  mainFeaturesPostContent:{
    marginTop: 20,
    position:"relative",
    padding: theme.spacing(6)
  },
  cardMedia:{
    paddingTop:"56.25%"
  },
  cardContent:{
    flexGrow:1
  },
  cardGrid:{
    marginTop: theme.spacing(4)
  }
  
}))
const cards=[1,2,3,4,5,6,7,8,9]



function App() {
  const [value , setValue]= React.useState("recents")
  const classes = useStyles();
  const handleChange= ( event , newValue)=>{
    setValue(newValue)}
    const [open , setOpen]=React.useState(false)
    const handleClickOpen =()=>{setOpen(true)}
    const handleClose =()=>{setOpen(false)}
  return (
    <>
    <AppBar>
      <Container>
        <Toolbar>
          <IconButton  edge="start" color= "red" aria-label="menu" className={classes.menuButton}>
            <MenuIcon/>
          </IconButton>
          <Typography variant= "h6" className={classes.title}>web hernya</Typography>
          <Box mr={3}>

            <Button color="inherit" variant="outlined" onClick={handleClickOpen}>log in</Button>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
              <DialogTitle id="form-dialog-title">log in</DialogTitle>
              <DialogContent>
                <DialogContentText>log to see a video</DialogContentText>
                <TextField autoFocus margin ="dense" id="name" label="Email Adress"  type="email" fullWidth/>
                <TextField autoFocus margin ="dense" id="pass" label="Password" type="password" fullWidth/>
              </DialogContent>
              <DialogActions>
                <Button onClick={handleClose} color="primary" >cancel</Button>
                <Button onClick={handleClose} color="primary" >log in</Button>
              </DialogActions>
            </Dialog>
          </Box>
          <Button color="secondary" variant="contained">log in</Button>
        </Toolbar>
      </Container>
    </AppBar>

    <main>
      <Paper className={classes.mainFeaturesPost}
      style={{ backgroundImage:"url(https://img.freepik.com/free-vector/retro-futuristic-synthwave-retrowave-styled-night-cityscape-with-sunset-on-background_148087-120.jpg?size=626&ext=jpg)"}}
      >
        <Container fixed>
          <div  className={classes.overlay}/>
          <Grid container>
            <Grid item md={6}>
              <div className={classes.mainFeaturesPostContent}>
                <Typography
                 component="h1"
                 variant="h3"
                 color="inherit"
                 gutterBottom
                >
                    RETROWAVE
                </Typography>
                <Typography
                 variant="h5"
                 color="inherit"
                 paragraph
                >
                   nnnnkskwqlkhslkhkjfekjekjjklkjlewkljejkkjle
                </Typography>
                <Button variant="outlined" color="secondary" >
                    learn more
                </Button>
              </div>
            </Grid>
          </Grid>
        </Container>
      </Paper>
      <div className={classes.mainContent}>
        <Container maxWidth="sm">
          <Typography variant="h2" align="center" color="textPrimary">
            retrovave touch
          </Typography>
          <Typography variant="h5" align="center" color="textSecondary">
            retrovave touch, carpent brut,  kawinsky,  outrun
          </Typography>
          <div className={classes.mainButtons}>
              <Grid container spacing={2} justify="center">
                  <Grid item>
                    <Button variant="contained" color="primary">start now</Button>
                  </Grid>
                  <Grid item>
                  <Button variant="outlined" color="primary">listen more</Button>
                  </Grid>
              </Grid>
          </div>
        </Container>
      </div>
      <Container className={classes.cardGrid} maxWidth="md">
        <Grid container spacing={4}>
          {cards.map((card)=>(
            <Grid item key={card} xs={12} sm={6} md={4}> 
              <Card className={classes.card}>
                <CardMedia className={classes.cardMedia} image="https://thumbs.dreamstime.com/b/%D1%81%D0%BE%D0%BB%D0%BD%D1%86%D0%B5-%D0%B8-%D0%BF%D0%B0%D0%BB%D1%8C%D0%BC%D1%8B-retrowave-%D1%81%D1%82%D0%B8%D0%BB%D1%8C-s-%D1%81%D0%BE%D0%BB%D0%BD%D1%86%D0%B0-%D0%BF%D0%B0%D0%BB%D1%8C%D0%BC-%D1%8F%D1%80%D0%BA%D0%B0%D1%8F-%D0%BF%D1%80%D0%B5%D0%B4%D0%BF%D0%BE%D1%81%D1%8B%D0%BB%D0%BA%D0%B0-%D0%B3%D1%80%D0%B0%D0%B4%D0%B8%D0%B5%D0%BD%D1%82%D0%B0-142691238.jpg"  title="Image title"/>
                <CardContent clasName={classes.cardContent}>
                  <Typography variant="h5" gutterBottom>
                      blog post
                  </Typography>
                  <Typography>
                      BLOG POST
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" color="primary">
                    viev
                  </Button>
                  <Button size="small" color="primary">
                    edit
                  </Button>
                  <LayerIcon/>
                  <PlayCircleFilledIcon/>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </main>
    <footer>
      <Typography variant="h6" align="center" gutterBottom>Footer</Typography>
      <BottomNavigation
      value={value}
      onChange={handleChange}
      className={classes.root}
      >
        <BottomNavigationAction
        label="Recents"
        value="recent"
        icon={ <RestoreIcon/>}
        />
        <BottomNavigationAction
        label="Favorits"
        value="favorite"
        icon={ <FavoriteIcon/>}
        />
        <BottomNavigationAction
        label="Nearby"
        value="nearby"
        icon={ <LocationIcon/>}
        />
        <BottomNavigationAction
        label="Folder"
        value="recent"
        icon={ <FolderIcon/>}
        />
      </BottomNavigation>
    </footer>
    </>
  );
}

export default App;
