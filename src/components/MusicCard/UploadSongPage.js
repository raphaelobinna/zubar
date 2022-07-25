import React, { useState } from 'react';
import { Typography, Form } from 'antd';
import FileUpload from './FileUpload';
import Axios from 'axios';


const { Title } = Typography

function UploadSongPage(props) {


    const [Images, setImages] = useState()
    const [song, setSong] = useState()
    const [song_name, setSongNameInput] = useState('')


    const updateImages = (newImages) => {
        setImages(newImages)
    }

    const updateSong = (newSong) => {
        setSong(newSong)
        setSongNameInput(newSong.name)
    }

    const onSubmit = (event) => {
        event.preventDefault();
    }

    return (
        <div style={{ maxWidth: '700px', margin: '2rem auto' }} >
            <div style={{ textAlign: 'center', marginBottom: '2rem' }} >
                <Title level={2}> Upload Song </Title>
            </div>


            <Form onSubmit={onSubmit}>
                {/* dropzone */}
                <label style={{ fontSize: '0.9rem', color: "gray" }}>Cover Picture: </label>
                <FileUpload refreshSong={updateSong} refreshFunction={updateImages} />

                <br />

                <form className="input_profile_section">
                    <label style={{ fontSize: '0.9rem', color: "gray" }} >name: </label>
                    <input value={song_name} onChange={e => setSongNameInput(e.target.value)} placeholder="song name" />
                </form>

                <button onClick={onSubmit} className="login_but"> Upload </button>

            </Form>
        </div>
    )
}
export default UploadSongPage;