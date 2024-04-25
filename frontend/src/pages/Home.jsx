import React, { useEffect, useState } from 'react'
import axios from '../axios/axios'
import styles from './Home.module.css'

function Home() {
    const [movieData, setmovieData] = useState([])
    const [images, setImages] = useState([])
    const [currentIndex, setCurrentIndex] = useState(0);
      
        const nextSlide = (e) => {
            e.preventDefault();
          setCurrentIndex(() => (currentIndex === images.length - 1 ? 0 : currentIndex + 1));
        };
      
        const prevSlide = (e) => {
            e.preventDefault();
          setCurrentIndex(() => (currentIndex === 0 ? images.length - 1 : currentIndex - 1));
        };
      
        useEffect(() => {
          const intervalId = setInterval(() => {
            nextSlide();
          }, 3000);
      
          return () => clearInterval(intervalId);
        }, [currentIndex]);
    
    localStorage.setItem('bearerToken', 'FSMovies2023')
    async function fetchData() {
        const result = await axios.get('/movies')
        setmovieData(result.data)
    }

    useEffect(() => {
        fetchData()
    }, [])
    useEffect(() => {
       console.log(movieData); 
        let imageUrls=[]
        if(movieData){
            console.log('asss');
           for(let movies in movieData){
                movieData[movies].forEach((movieCategories)=>{
                    if(imageUrls.indexOf(movieCategories.backdrop)==-1){
                        imageUrls.push(movieCategories.backdrop)
                    }
                })
           }

           setImages([...imageUrls]) 
      
    }

    }, [movieData])

    useEffect(()=>{
        console.log(images);
    },[images])


    return (
        <div className={styles.parent}>
       <div className={styles.navbar}>
       <div className={styles.logo}>
            <span className={styles.logoName}>WOOKIE MOVIES</span>
        </div>
        <div className={styles.inputDiv}>
            <input className={styles.input} type="text" />
        </div>

      
       </div>
         <div className={styles.carousel}>
         {images && images.map((imageUrl, index) => (
           <div
             key={index}
             className={index === currentIndex ? `${styles.slide} ${styles.active}` : styles.slide}
             style={{ backgroundImage: `url(${images[currentIndex]})` }}
           >{console.log(imageUrl)}</div>
         ))}
         <button className={styles.prev} onClick={(e)=>prevSlide(e)}>&#10094;</button>
         <button className={styles.next} onClick={(e)=>nextSlide(e)}>&#10095;</button>
       </div>
       <div className={styles.movieContainer}>
                {Object.entries(movieData).map(([genre, movies]) => (
                    <div key={genre} className={styles.genreRow}>
                        <h1 style={{color:'white'}}>{genre}</h1>
                        <div className={styles.movieRow}>
                            {movies.map((movie) => (
                                <div key={movie.id} className={styles.movieCard}>
                                    <img src={movie.poster} alt={movie.title} />
                                    <h3 style={{color:'white'}}>{movie.title}</h3>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
       </div>
    )
}

export default Home
