import { 
    GET_ALL_COMICS, 
    SHOW_COMIC,
    DELETE_COMIC,
    SEARCH_COMIC,
    UPDATE_COMIC,
    UPLOAD_COMIC,
    LIKE_COMIC
} from '../types';

const DEFAULT_STATE = {
 comic:[],
 comics:[],
 likedComic:[],
 searchComic:[],
 uploadedComic:[],
 updatedComic:[],
 deletedComic:[]
};

export default (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case GET_ALL_COMICS:
      return {
        comics: action.payload,
      };

      case SHOW_COMIC:
      return {
        comic: action.payload,
      };

      case SEARCH_COMIC:
      return {
        searchComic: action.payload,
      };

      case LIKE_COMIC:
        return {
          likedComic: action.payload,
        };

      case DELETE_COMIC:
      return {
        deletedComic: action.payload,
      };

      case UPLOAD_COMIC:
      return {
        uploadComic: action.payload,
      };

      case UPDATE_COMIC:
      return {
        updatedComic: action.payload,
      };
    default:
      return state;
  }
};