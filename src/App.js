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
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';

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

const styles = {
  heading1: {
    color:"white",
    fontSize:"20px",
    fontWeight:"bold",
    marginLeft:"10px"
  },
  heading2: {
    color:"white",
    fontSize:"15px",
    marginLeft:"10px"
  },
}

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


  nextButtonFun=()=>{
if(this.state.play1){
  console.log("1st")
this.setState({play2:true,play1:false,play3:false,play4:false})
}
else if(this.state.play2){
  console.log("2nd")

  this.setState({play3:true,play2:false,play1:false,play4:false})
}
else if (this.state.play3){
  console.log("3rd")

  this.setState({play4:true,play3:false,play1:false,play2:false})
}
else if(this.state.play4){
  console.log("4th")

  this.setState({play1:true,play4:false,play2:false,play3:false})
}
  }

  render() {
    const classes = useStyles;

    return (
    <div style={{width:"100%"}}>
    <GridList style={{width:"100%"}}>

      <GridListTile key="Subheader" cols={2}
       style={{ height: 'auto',backgroundColor:"#cc1717",display:"flex",justifyContent:"center" }}>
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
       <div style={{height:"10%",backgroundColor:"#f1f3f4",position:"absolute", bottom :0,display:"flex",alignItems:"center",width:"100%"}}>

<div style={{display:"flex",flexDirection:"column",justifyContent:"center", width:"45%",height:"100%",backgroundColor:"#cc1717"}}>
      <div style={styles.heading1}>Jingle Bell </div>
      <div style={styles.heading2}> Yo Yo Honey Singh</div>
     </div>

       <div style={{ width:"45%"}}>
       <ReactAudioPlayer
       style={{width:"90%"}}
       src="1.mp3"
       autoPlay
       controls
       onPause= {(e) => this.setState({pause1:true})}
     />
     </div>
     <div style={{width:"10%"}}>
     <Button
        style={{backgroundColor:"#cc1717",color:"white",width:"90%"}}
        className={classes.button}
        endIcon={<SkipNextIcon style={{color:"white"}}/>}
        onClick={(e) => {
          e.preventDefault();
          this.nextButtonFun()
        }}
      >
        Next
      </Button>
     </div>
     </div>
    :null}


{this.state.play2 ?
       <div style={{height:"10%",backgroundColor:"#f1f3f4",position:"absolute", bottom :0,display:"flex",alignItems:"center",width:"100%"}}>
      
      <div style={{display:"flex",flexDirection:"column",justifyContent:"center", width:"45%",height:"100%",backgroundColor:"#cc1717"}}>
      <div style={styles.heading1}>Toh Aagaye Hum </div>
      <div style={styles.heading2}>Jubin Nautiyal</div>
     </div>

       <div style={{ width:"45%"}}>
       <ReactAudioPlayer
       style={{width:"90%"}}
       src="2.mp3"
       autoPlay
       controls
       onPause= {(e) => this.setState({pause2:true})}
     />
     </div>
     <div style={{width:"10%"}}>
     <Button
       style={{backgroundColor:"#cc1717",color:"white",width:"90%"}}
       className={classes.button}
       endIcon={<SkipNextIcon style={{color:"white"}}/>}
       onClick={(e) => {
        e.preventDefault();
        this.nextButtonFun()
      }}
      >
        Next
      </Button>
     </div>
     </div>
    :null}

{this.state.play3 ?
     <div style={{height:"10%",backgroundColor:"#f1f3f4",position:"absolute", bottom :0,display:"flex",alignItems:"center",width:"100%"}}>
      
      <div style={{display:"flex",flexDirection:"column",justifyContent:"center", width:"45%",height:"100%",backgroundColor:"#cc1717"}}>
      <div style={styles.heading1}>Oh Saaiyaan </div>
      <div style={styles.heading2}> Arijit Singh</div>
     </div>

       <div style={{ width:"45%"}}>
       <ReactAudioPlayer
       style={{width:"90%"}}
       src="3.mp3"
       autoPlay
       controls
       onPause= {(e) => this.setState({pause3:true})}
     />
     </div>
     <div style={{width:"10%"}}>
     <Button
        style={{backgroundColor:"#cc1717",color:"white",width:"90%"}}
        className={classes.button}
        endIcon={<SkipNextIcon style={{color:"white"}}/>}
        onClick={(e) => {
          e.preventDefault();
          this.nextButtonFun()
        }}
      >
        Next
      </Button>
     </div>
     </div>
    :null}
 
 {this.state.play4 ?
       <div style={{height:"10%",backgroundColor:"#f1f3f4",position:"absolute", bottom :0,display:"flex",alignItems:"center",width:"100%"}}>
      
      <div style={{display:"flex",flexDirection:"column",justifyContent:"center", width:"45%",height:"100%",backgroundColor:"#cc1717"}}>
      <div style={styles.heading1}>Mehendi Wale Haath</div>
      <div style={styles.heading2}> Guru Randhawa</div>
     </div>

       <div style={{ width:"45%"}}>
       <ReactAudioPlayer
       style={{width:"90%"}}
       src="4.mp3"
       autoPlay
       controls
       onPause= {(e) => this.setState({pause4:true})}
     />
     </div>
     <div style={{width:"10%"}}>
     <Button
         style={{backgroundColor:"#cc1717",color:"white",width:"90%"}}
         className={classes.button}
         endIcon={<SkipNextIcon style={{color:"white"}}/>}
         onClick={(e) => {
          e.preventDefault();
          this.nextButtonFun()
        }}
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
