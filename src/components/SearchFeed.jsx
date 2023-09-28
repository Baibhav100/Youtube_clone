import { Stack,Box,Typography } from '@mui/material';
import React from 'react'
import { useState,useEffect } from 'react';
import Sidebar from './Sidebar';
import Videos from './Videos';
import { useParams } from 'react-router-dom';
import { fetchFromAPI} from '../utils/fetchFromAPI';


const SearchFeed = () => {

  const[videos,setVideos]=useState([]);
  const{searchTerm}=useParams();
  useEffect(()=>{
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`)
      .then((data) => setVideos(data.items))
    }, [searchTerm]);
  return (
    <Box p={2} sx={{overflowY:'auto', height:'90vh', flex:2}}>
      <Typography variant='h4'
      fontWeight="bold" mb={2}
       color='white'>
      Search Results For <span style={{color:'#5353ef'}}>{searchTerm}</span> videos

      </Typography>

      <Videos videos={videos}/>
    </Box>

  )
}

export default SearchFeed;
