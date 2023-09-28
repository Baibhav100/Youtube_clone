import { Stack,Box,Typography } from '@mui/material';
import React from 'react'
import { useState,useEffect } from 'react';
import Sidebar from './Sidebar';
import Videos from './Videos';
import { fetchFromAPI} from '../utils/fetchFromAPI';


const Feed = () => {
  const[selectedCategory,setselectedCategory] = useState('New');
  const[videos,setVideos]=useState([]);
  useEffect(()=>{
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
      .then((data) => setVideos(data.items))
    }, [selectedCategory]);
  return (
  <Stack sx={{flexDirection:{sx:'column',md:'row'}}}>
    <Box sx={{height:{sx:'auto',md:'92vh'},
    borderRight:'1px solid #3d3d3d',px:{sm:0,md:2}
  
  }}>
    <Sidebar selectedCategory={selectedCategory} setselectedCategory={setselectedCategory}/>
    <Typography className='copyright'
    variant='body2' sx={{mt:1.5,color:'#fff'}}
    >
    Made by Baibhav

    </Typography>
    </Box>
    <Box p={2} sx={{overflowY:'auto', height:'90vh', flex:2}}>
      <Typography variant='h4'
      fontWeight="bold" mb={2}
       color='white'>
       {selectedCategory}<span style={{color:'#5353ef'}}>Videos</span>

      </Typography>

      <Videos videos={videos}/>
    </Box>

  </Stack>

  )
}

export default Feed;
