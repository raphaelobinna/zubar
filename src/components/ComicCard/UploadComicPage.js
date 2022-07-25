import React, { useState } from 'react';
import { Typography, Form } from 'antd';
import FileUpload from './FileUpload';
import Axios from 'axios';
import { useDispatch } from 'react-redux';
import { uploadAction } from '../../store/actions/comic';


const { Title } = Typography

function UploadComicPage(props) {

    const dispatch = useDispatch()

    const [images, setImages] = useState([])
    const [input, setInput] = useState({
        comic_name: "", description: ""
    })

    const updateImages = (newImages) => {
        setImages(newImages)
    }
    const onSubmit = (event) => {
        event.preventDefault();

        var bodyFormData = new FormData();
        console.log(images)

        for (const image of images) {
            bodyFormData.append("images", image);

        }
        bodyFormData.append("comic_name", input.comic_name)
        bodyFormData.append("description", input.description)

        dispatch(uploadAction(bodyFormData))

    }

    return (
        <div style={{ maxWidth: '700px', margin: '2rem auto' }} >
            <div style={{ textAlign: 'center', marginBottom: '2rem' }} >
                <Title level={2}> Upload Comic Slides </Title>
            </div>


            <Form onSubmit={onSubmit}>
                {/* dropzone */}
                <FileUpload refreshFunction={updateImages} />

                <br />
                <br />

                <form className="input_profile_section">
                    <input value={input.comic_name} onChange={e => setInput({ ...input, comic_name: e.target.value })} placeholder="Name" />

                </form>

                <form className="textarea_profile_section">
                    <input value={input.description} onChange={e => setInput({ ...input, description: e.target.value })} placeholder="description" />
                </form>


                <button onClick={onSubmit} className="login_but"> Upload </button>


            </Form>
        </div>
    )
}
export default UploadComicPage;