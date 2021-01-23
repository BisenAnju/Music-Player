import React from "react";
import ReactAudioPlayer from 'react-audio-player';
import Button from "@material-ui/core/Button";
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import PauseCircleOutlineIcon from '@material-ui/icons/PauseCircleOutline';
import SkipNextIcon from '@material-ui/icons/SkipNext';


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 500,
    height: 450,
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
  button: {
    margin: theme.spacing(1),
  },
}));

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      play1:false,
      play2:false,
      play3:false,
      play4:false,
      pause1:false,
      pause2:false,
      pause3:false,
      pause4:false
    };
  }

  render() {
    const classes = useStyles;

    return (
    <div >
    <GridList >

      <GridListTile key="Subheader" cols={2}
       style={{ height: 'auto',backgroundColor:"red",display:"flex",justifyContent:"center" }}>
        <ListSubheader style={{color:"white",fontWeight:"bold"}}>Music List</ListSubheader>
      </GridListTile>

        <GridListTile key={"11.jpg"} style={{margin:"2% 2.5%",width:"45%",height:"200px"}}>
          <img src={"11.jpg"} alt={"Jingle Bell"} />
          <GridListTileBar
            title={"Jingle Bell"}
            subtitle={<span>by: {"Yo Yo Honey Singh"}</span>}
            actionIcon={
              <IconButton aria-label={`info about Jingle Bell`} className={classes.icon}
              onClick={(e) => {
                    e.preventDefault();
                    this.setState({play1:true,play2:false,play3:false})
                  }}
              >
                {this.state.play1 ? <PauseCircleOutlineIcon style={{color:"white"}}/> : this.state.pause1  ? <PlayCircleOutlineIcon style={{color:"white"}}/>  :  <PlayCircleOutlineIcon style={{color:"white"}}/>   }
              </IconButton>
            }
            
          />
        </GridListTile>

        <GridListTile key={"22.jpg"} style={{margin:"2% 2.5%",width:"45%",height:"200px"}}>
          <img src={"22.jpg"} alt={"Toh Aagaye Hum"} />
          <GridListTileBar
            title={"Toh Aagaye Hum"}
            subtitle={<span>by: {"Jubin Nautiyal"}</span>}
            actionIcon={
              <IconButton aria-label={`info about Toh Aagaye Hum`} className={classes.icon}
              onClick={(e) => {
                    e.preventDefault();
                    this.setState({play1:false,play2:true,play3:false,play4:false})
                  }}
              >
                {this.state.play2 ? <PauseCircleOutlineIcon style={{color:"white"}}/> : this.state.pause2  ? <PlayCircleOutlineIcon style={{color:"white"}}/>  :  <PlayCircleOutlineIcon style={{color:"white"}}/>   }
              
              </IconButton>
            }
            
          />
        </GridListTile>

        <GridListTile key={"33.jpeg"} style={{margin:"2% 2.5%",width:"45%",height:"200px"}}>
 <img src={"33.jpeg"} alt={"Oh Saaiyaan"} />
          <GridListTileBar
            title={"Oh Saaiyaan"}
            subtitle={<span>by: {"Arijit Singh"}</span>}
            actionIcon={
              <IconButton aria-label={`info about Oh Saaiyaan`} className={classes.icon}
              onClick={(e) => {
                    e.preventDefault();
                    this.setState({play1:false,play2:false,play3:true,play4:false})
                  }}
              >
                {this.state.play3 ? <PauseCircleOutlineIcon style={{color:"white"}}/> : this.state.pause3  ? <PlayCircleOutlineIcon style={{color:"white"}}/>  :  <PlayCircleOutlineIcon style={{color:"white"}}/>   }
              
              </IconButton>
            }
            
          />
        </GridListTile>

        <GridListTile key={"44.jpg"} style={{margin:"2% 2.5%",width:"45%",height:"200px"}}>
 <img src={"44.jpg"} alt={"Mehendi Wale Haath"} />
          <GridListTileBar
            title={"Mehendi Wale Haath"}
            subtitle={<span>by: {"Guru Randhawa"}</span>}
            actionIcon={
              <IconButton aria-label={`info about Mehendi Wale Haath`} className={classes.icon}
              onClick={(e) => {
                    e.preventDefault();
                    this.setState({play1:false,play2:false,play3:false,play4:true})
                  }}
              >
                {this.state.play4 ? <PauseCircleOutlineIcon style={{color:"white"}}/> : this.state.pause4  ? <PlayCircleOutlineIcon style={{color:"white"}}/>  :  <PlayCircleOutlineIcon style={{color:"white"}}/>   }
              
              </IconButton>
            }
            
          />
        </GridListTile>


    </GridList>

       {this.state.play1 ?
       <div style={{backgroundColor:"#f1f3f4",position:"absolute", bottom :0,display:"flex",alignItems:"center",width:"100%"}}>
       <div style={{ width:"90%"}}>
       <ReactAudioPlayer
       style={{width:"90%"}}
       src="1.mp3"
       autoPlay
       controls
       onPause= {(e) => this.setState({pause1:true})}
     />
     </div>
     <div>
     <Button
        variant="contained"
        color="primary"
        className={classes.button}
        endIcon={<SkipNextIcon/>}
      >
        Next
      </Button>
     </div>
     </div>
    :null}


{this.state.play2 ?
       <div style={{backgroundColor:"#f1f3f4",position:"absolute", bottom :0,display:"flex",alignItems:"center",width:"100%"}}>
       <div style={{ width:"90%"}}>
       <ReactAudioPlayer
       style={{width:"90%"}}
       src="2.mp3"
       autoPlay
       controls
       onPause= {(e) => this.setState({pause2:true})}
     />
     </div>
     <div>
     <Button
        variant="contained"
        color="primary"
        className={classes.button}
        endIcon={<SkipNextIcon/>}
      >
        Next
      </Button>
     </div>
     </div>
    :null}

{this.state.play3 ?
       <div style={{backgroundColor:"#f1f3f4",position:"absolute", bottom :0,display:"flex",alignItems:"center",width:"100%"}}>
       <div style={{ width:"90%"}}>
       <ReactAudioPlayer
       style={{width:"90%"}}
       src="3.mp3"
       autoPlay
       controls
       onPause= {(e) => this.setState({pause3:true})}
     />
     </div>
     <div>
     <Button
        variant="contained"
        color="primary"
        className={classes.button}
        endIcon={<SkipNextIcon/>}
      >
        Next
      </Button>
     </div>
     </div>
    :null}
 
 {this.state.play4 ?
       <div style={{backgroundColor:"#f1f3f4",position:"absolute", bottom :0,display:"flex",alignItems:"center",width:"100%"}}>
       <div style={{ width:"90%"}}>
       <ReactAudioPlayer
       style={{width:"90%"}}
       src="4.mp3"
       autoPlay
       controls
       onPause= {(e) => this.setState({pause4:true})}
     />
     </div>
     <div>
     <Button
        variant="contained"
        color="primary"
        className={classes.button}
        endIcon={<SkipNextIcon/>}
      >
        Next
      </Button>
     </div>
     </div>
    :null}

  </div>



    )
  }

}
export default App;
