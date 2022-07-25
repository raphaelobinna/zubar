import React, { useState, useEffect } from 'react';
import Seo from "../shared/Seo";
// import {Col, Container, Row} from "react-bootstrap"
import Navigation from "../components/Navigation";
import SuperCard from "../components/SuperCard";
import MobileToogle from "../components/MobileToogle"
import UploadComicPage from '../components/ComicCard/UploadComicPage';

import { Typography, Button, Form, message, Input, Icon } from 'antd';
import UploadSongPage from '../components/MusicCard/UploadSongPage';
import UploadVideoPage from '../components/VideoCard/UploadVideoPage';
import { useDispatch, useSelector } from 'react-redux';
import { getAllComicAction } from '../store/actions/comic';
import { getAllSongAction } from '../store/actions/music';
import { getAllVideoAction } from '../store/actions/video';

const { Title } = Typography

const contents = [
    { key: 1, value: "Comic" },
    { key: 2, value: "Song" },
    { key: 3, value: "Video" },
]

export default function Profile() {

    const dispatch = useDispatch()

    const [input, setInput] = useState({
        video: [], comic: [], music: []
    })

    const [mode, setMode] = useState()

    const onContentSelectChange = (event) => {
        setMode(event.currentTarget.value)
    }

    useEffect(() => {
        dispatch(getAllComicAction())
        dispatch(getAllSongAction())
        dispatch(getAllVideoAction())
    }, [])


    return (

        <React.Fragment>
            <Seo page="Profile">
                <Navigation />
                <div className='profile_container'>

                    <div className="profile_wrapper">

                        {(function () {
                            switch (mode) {
                                case '1':
                                    return <UploadComicPage />;
                                case '2':
                                    return <UploadSongPage />;
                                case '3':
                                    return <UploadVideoPage />;
                                default:
                                    break;
                            }
                        })()}

                        {/* {choice} */}

                    </div>
                    {mode && <hr />}
                    <div className="profile_wrapper">
                        <Title level={3}> Comics : </Title>
                        {input.comic.length !== 0 ? input.comic.map(post => {
                            return (
                                <div >
                                    <div className="user_card">
                                        <img src={post.base_img} alt="baser" />
                                        <h4>{post.comic_name}</h4>
                                    </div>
                                </div>
                            )
                        }) : <p style={{ fontSize: '0.9rem', color: "lightgray" }} >No available comics</p>
                        }

                        <br />

                        <Title level={3}> Songs : </Title>
                        {input.music.length !== 0 ? input.music.map(post => {
                            return (
                                <div >
                                    <div className="user_card">
                                        <img src={post.base_img} alt="baser" />
                                        <h4>{post.comic_name}</h4>
                                    </div>
                                </div>
                            )
                        }) : <p style={{ fontSize: '0.9rem', color: "lightgray" }} >No available songs</p>
                        }
                        <br />

                        <Title level={3}> Videos : </Title>
                        {input.video.length !== 0 ? input.video.map(post => {
                            return (
                                <div >
                                    <div className="user_card">
                                        <img src={post.base_img} alt="baser" />
                                        <h4>{post.comic_name}</h4>
                                    </div>
                                </div>
                            )
                        }) : <p style={{ fontSize: '0.9rem', color: "lightgray" }} >No available videos</p>
                        }

                        <br />

                        <form className="upload_section">
                            <label>Upload : </label>
                            <select onChange={onContentSelectChange} >
                                <>
                                    <option>select an option</option>
                                    {contents.map(item => (

                                        <option key={item.key} value={item.key} >
                                            {item.value}
                                        </option>

                                    ))}
                                </>

                            </select>
                        </form>

                    </div>
                </div>

                <MobileToogle />


            </Seo>
        </React.Fragment>

    )

}