import PlusOutlined from '@ant-design/icons/PlusOutlined';
import { UploadOutlined } from '@ant-design/icons/lib/icons';
import Axios from 'axios';
import React, { useState } from 'react';
import Dropzone from 'react-dropzone';

function FileUpload(props) {

    const [Images, setImages] = useState()

    const [song, setSong] = useState()


    const onDropImages = (files) => {
        setImages(files[0])
        props.refreshFunction(files[0])
    }

    const onDropSong = (files) => {
        setSong(files[0])
        console.log(files)
        props.refreshSong(files[0])
    }

    return (
        <div  >
            <Dropzone
                onDrop={onDropImages}
                multiple={false}
                maxSize={800000000}

            >
                {({ getRootProps, getInputProps }) => (
                    <div style={{ width: '150px', height: '120px', border: '2px solid lightgray', borderStyle: 'dashed', borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                        {...getRootProps()}
                    >
                        <input {...getInputProps()} />
                        <PlusOutlined style={{ fontSize: '3rem' }} />

                    </div>
                )}

            </Dropzone>

            {Images && (
                <div style={{ width: '300px', height: '200px', border: '2px solid lightgray', borderRadius: 10, overflowX: 'scroll', marginTop: 10 }} >

                    <div onClick={() => { setImages(); props.refreshFunction() }} >
                        <img
                            style={{ minWidth: '300px', width: '300px', height: '240px' }} src={URL.createObjectURL(Images)} alt={`comicImg`} />
                    </div>


                </div>
            )}

            <Dropzone
                onDrop={onDropSong}
                multiple={false}
                maxSize={800000000}

            >
                {({ getRootProps, getInputProps }) => (
                    <div style={{ width: '150px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: 10 }}
                        {...getRootProps()}
                    >
                        <input {...getInputProps()} />
                        <p style={{ fontSize: '0.9rem', color: "gray" }} >import song</p>
                        <UploadOutlined style={{ fontSize: '1rem' }} />

                    </div>
                )}

            </Dropzone>

            {
                song && (
                    <div >
                        <audio controls>
                            <source src={URL.createObjectURL(song)} type="audio/mpeg" />
                        </audio>
                    </div>
                )
            }
        </div>
    )
}
export default FileUpload