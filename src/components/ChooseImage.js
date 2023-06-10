import React from 'react';

import { useState } from 'react';
import Imagecontroler from './Imagecontroler';
import axios from 'axios';
import LinearWithValueLabel from './Progressbar';
import { useEffect } from 'react';
import styles from "./styles/ChooseImage.module.css";
const ChooseImage = () => {



    const [file, setFile] = useState("");
    const [filename, setFilename] = useState("select one photo");
    const [progress, setProgress] = useState(0);
    const [messege, setMessege] = useState("");
    const [images, setImages] = useState([]);
    const [submitted, setSubmitted] = useState(false);
    useEffect(() => {
        fetchImages();
    }, []);
    const submitHandler = e => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('image', file);
        axios.post("http://localhost:8000/api/upload", formData, {
            onUploadProgress: (progressEvent) => {
                const percentCompleted = (Math.round((progressEvent.loaded * 100) / progressEvent.total));
                setProgress(percentCompleted);
            }

        })
            .then(response => {
                console.log(response.data);
                setProgress(0);
                
              setMessege("Your image has been uploaded");
               
                
                fetchImages();


            })
            .catch(error => console.error('Error:', error))
        
        setSubmitted(true);


    }


    const fetchImages = () => {
        axios.get("http://localhost:8000/api/upload-data")
            .then(res => setImages(res.data) )
            .catch(err => console.error('Error fetching images:', err));
    };
    const imageHandler = e => {
        setFile(e.target.files[0])
        setFilename(e.target.files[0].name)
        setMessege("")
        setSubmitted(false);
    }
    console.log(file);
    return (
        <div className={styles.container}>
            
             {submitted ? <h2 className={styles.messege}>
                    {messege}
            </h2> : null}
            <form onSubmit={submitHandler} className={styles.formcontainer}>
               
                <div className={styles.labelinput}>
                    <label htmlFor='chooser'>{filename}</label>
                    <input type='file' id='chooser' onChange={imageHandler} name='image' />
                </div>
                <div className={styles.progressbar}>
                    {<LinearWithValueLabel value={progress} />}
                </div>
                <input type='submit' value="send image"  className={styles.submitbutton}/>

                

            </form >

            <div className={styles.imagecontainer}>
                <Imagecontroler images={images} />
            </div>


        </div>

    );
};

export default ChooseImage;
