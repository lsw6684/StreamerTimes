// Global
const HOME = "/";
const JOIN = "/join";
const LOGIN = "/login";
const LOGOUT = "/logout";
const SEARCH = "/search";

// Users
const USERS = "/users";
const USER_DETAIL = "/:id"; //for id numbering
const EDIT_PROFILE = "/edit-profile";
const CHANGE_PASSWORD = "/chage-password";

// Videos
const VIDEOS = "/videos";
const UPLOAD = "/upload";
const VIDEO_DETAIL = "/:id"; // id: << express가 가변 값으로 인식
const EDIT_VIDEO = "/:id/edit";
const DELETE_VIDEO = "/:id/delete";

const routes = {
    home: HOME,
    join: JOIN,
    login: LOGIN,
    logout: LOGOUT,
    search: SEARCH,
    users: USERS,
    userDetail: id => {
      if (id) {
        return `/users/${id}`;
      } else {
        return USER_DETAIL;
      }
    },
    editProfile: EDIT_PROFILE,
    changePassword: CHANGE_PASSWORD,
    videos: VIDEOS,
    upload: UPLOAD,
    videoDetail: id => {
      if (id) {
        return `/videos/${id}`;
      } else {
        return VIDEO_DETAIL;
      }
    },
    editVideo: EDIT_VIDEO,
    deleteVideo: DELETE_VIDEO
  };
  
  export default routes; // default는 전체 다 export 해줌.