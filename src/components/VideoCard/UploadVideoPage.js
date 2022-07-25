import React, { useState } from 'react';
import { Typography, Form } from 'antd';
import FileUpload from './FileUpload';
import Axios from 'axios';


const { Title } = Typography

function UploadVideoPage(props) {

    const [video, setVideo] = useState()
    const [video_name, setVideoName] = useState('')


    const updateVideo = (newVideo) => {
        setVideo(newVideo)
        setVideoName(newVideo.name)
    }

    const onSubmit = (event) => {
        event.preventDefault();
    }

    return (
        <div style={{ maxWidth: '700px', margin: '2rem auto' }} >
            <div style={{ textAlign: 'center', marginBottom: '2rem' }} >
                <Title level={2}> Upload Video </Title>
            </div>


            <Form onSubmit={onSubmit}>
                {/* dropzone */}
                <label style={{ fontSize: '0.9rem', color: "gray" }}>Cover Picture: </label>
                <FileUpload  refreshFunction={updateVideo} />

                <br />

                <form className="input_profile_section">
                    <label style={{ fontSize: '0.9rem', color: "gray" }} >name: </label>
                    <input value={video_name} onChange={e => setVideoName(e.target.value)} placeholder="video name" />
                </form>

                <button onClick={onSubmit} className="login_but"> Upload </button>

            </Form>
        </div>
    )
}
export default UploadVideoPage;