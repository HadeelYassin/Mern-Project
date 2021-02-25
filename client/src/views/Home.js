import React, { useEffect, useRef, useState } from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Video from '../components/Video';
import MoviesList from '../components/MoviesList';
import axios from 'axios';

const Home = () => {
    const Style={
        backgroundColor: '#202020'
    }
    const [category, setCategory] = useState([]);
    const [loaded, setLoaded] = useState(false);
    const [selectedcategory,setSelectedCategory]=useState("");
    const changeCategory=(id)=>{
        setSelectedCategory(id)
    }
    useEffect(()=>{
        axios.get('http://localhost:8000/api/getAllCategories')
            .then(res=>{
                setCategory(res.data);
                setLoaded(true);
            });
    },[])
    return (
        <div style={Style}>
            <Video/>
            <MoviesList selectedategory={selectedcategory}/>
            {loaded &&<Header categories={category} changeCategory={changeCategory} />}    
            <Footer/>
        </div>
    )
}

export default Home
