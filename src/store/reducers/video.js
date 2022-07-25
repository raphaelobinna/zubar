import { 
    GET_ALL_VIDEOS, 
    SHOW_VIDEO,
    DELETE_VIDEO,
    SEARCH_VIDEO,
    UPDATE_VIDEO,
    UPLOAD_VIDEO,
    LIKE_VIDEO
} from '../types';

const DEFAULT_STATE = {
 video:[],
 videos:[],
 likedVideo:[],
 searchVideo:[],
 uploadedVideo:[],
 updatedVideo:[],
 deletedVideo:[]
};

export default (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case GET_ALL_VIDEOS:
      return {
        videos: action.payload,
      };

      case SHOW_VIDEO:
      return {
        video: action.payload,
      };

      case SEARCH_VIDEO:
      return {
        searchVideo: action.payload,
      };

      case LIKE_VIDEO:
        return {
          likedVideo: action.payload,
        };

      case DELETE_VIDEO:
      return {
        deletedVideo: action.payload,
      };

      case UPLOAD_VIDEO:
      return {
        uploadVideo: action.payload,
      };

      case UPDATE_VIDEO:
      return {
        updatedVideo: action.payload,
      };
    default:
      return state;
  }
};