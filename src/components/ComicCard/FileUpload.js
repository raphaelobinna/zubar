import PlusOutlined from '@ant-design/icons/PlusOutlined';
import Axios from 'axios';
import React, {useState} from 'react';
import Dropzone from 'react-dropzone';

function FileUpload(props) {

    const [Images, setImages ] = useState([])


    const onDrop = (files) => {
      setImages([...Images, files[0]])
      props.refreshFunction([...Images, files[0]])
    }

    const onDelete = (image) => {
        const currentIndex = Images.indexOf(image)

        let newImages = [...Images]
        newImages.splice(currentIndex, 1)

        setImages(newImages)
        props.refreshFunction(newImages)
    }

    return (
        <div style={{ display:'flex', justifyContent:'space-between' }} >
            <Dropzone
                onDrop={onDrop}
                multiple={false}  
                maxSize={800000000}
               
            >
                {({getRootProps, getInputProps}) => (
                    <div style={{ width:'300px', height:'240px', border:'2px solid lightgray', borderStyle:'dashed', borderRadius:10, display:'flex', alignItems:'center', justifyContent:'center' }} 
                        {...getRootProps()}
                    >
                        <input {...getInputProps()}  />
                        <PlusOutlined style={{ fontSize:'3rem' }} />

                    </div>
                )}

            </Dropzone>

                    <div style={{ display:'flex', width:'350px', height:'240px', overflowX:'scroll' }} >
                        {Images.map((image, index) => (
                            //console.log(image)
                            <div onClick={() => onDelete(image)} >
                                <img  style={{ minWidth:'300px', width:'300px', height:'240px' }} src={URL.createObjectURL(image)} alt={`comicImg-${index}`}  />
                            </div>
                        ))}
                        
                    </div>
        </div>
    )
} 
export default FileUpload