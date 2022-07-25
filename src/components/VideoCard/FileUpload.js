import { Upload, Button } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import Axios from 'axios';
import React, { useState } from 'react';
import Dropzone from 'react-dropzone';

function FileUpload(props) {

    const [video, setVideoSrc] = useState()

    const handleChange = ({file}) => {
        var reader = new FileReader();
        console.log(file)
        var url = URL.createObjectURL(file.originFileObj);
        setVideoSrc(url);
        props.refreshFunction(file)
    };

    return (
        <div  >
            <Upload 
            accept=".mp4"
            action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
            listType="picture"
            maxCount={1}
            onChange={handleChange}
           >
                <Button style={{ width: '150px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: 10 }} icon={<UploadOutlined />}>Upload</Button>
            </Upload>

            {
                video && (
                    <video width="400" controls>
                    <source
                      src={video}
                      type={video.type}
                     />
                     Your browser does not support HTML5 video.
                  </video>
                )
            }
        </div>
    )
}
export default FileUpload