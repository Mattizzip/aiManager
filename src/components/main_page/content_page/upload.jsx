
import React, { useState, useRef } from 'react';
import styles from './styles.module.css';
import UploadImage from '../../../assets/upload_image.svg?react';

const Uploader = () => {
    const [image, setImage] = useState(null);
    const [fileName, setFileName] = useState("No files selected");
    const [dragging, setDragging] = useState(false);
    const formRef = useRef(null);

    const handleDragOver = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setDragging(true);
    };

    const handleDragLeave = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setDragging(false);
    };

    const handleDrop = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setDragging(false);

        const files = e.dataTransfer.files;
        if (files && files.length > 0) {
            const file = files[0];
            setFileName(file.name);
            setImage(file);
        }
    };

    const handleInputChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setFileName(file.name);
            setImage(file);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (image) {
            const formData = new FormData();
            formData.append('image', image);

            try {
                const response = await fetch('URL To Docker container with AI', {
                    method: 'POST',
                    body: formData,
                });

                if (response.ok) {
                    const result = await response.json();
                    console.log("Image uploaded successfully:", result);
                } else {
                    console.error("Failed to upload image");
                }
            } catch (error) {
                console.error("Error uploading image:", error);
            }
        } else {
            console.log("No image selected");
        }
    };

    const submitForm = () => {
        if (formRef.current) {
            formRef.current.requestSubmit();
        }
    };

    return (
        <section 
            className={`${styles.uploader} ${dragging ? styles.dragging : ''}`}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
        >
            <h3 className={styles.componentHeader}>Image to 3D</h3>
            <p className={styles.componentDescr}>
                Choose or drag'n'drop image for creating your own 3D model via AI
            </p>
            <form
                ref={formRef}
                action=''
                className={styles.uploaderForm} 
                onClick={() => document.querySelector("#userImageInput").click()}
                noValidate
                onSubmit={handleSubmit}
            >
                <input
                    type="file" 
                    accept="image/*" 
                    className={styles.uploaderInputField}
                    id='userImageInput'
                    hidden
                    onChange={handleInputChange}
                />
                <UploadImage className={styles.uploadIcon}/>
                <p>{fileName}</p>
            </form>
            <button onClick={submitForm} className={styles.submitUserImage}>Create 3D</button>
        </section>
    );
};

export default Uploader;
