// require('something') - fetch something from the project folder
// if this couldn't find it, this search from node_modules
// ==> import express from 'express' : the newest expression
import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
//import passport from "passport";
//import mongoose from "mongoose";
//import session from "express-session";
//import MongoStore from "connect-mongo";
import { localsMiddleware } from "./middlewares";
import routes from "./routes";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";
import globalRouter from "./routers/globalRouter";

//import "./passport";

const app = express(); // express를 import한 값을 const로

//const CookieStore = MongoStore(session)

// Middlewares
app.use(
  helmet({
    contentSecurityPolicy: false
  })
);
// security
app.set("view engine", "pug");  //view engine을 퍼그로 변경
app.use("/uploads", express.static("uploads"));
app.use("/static", express.static("static"));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("dev"));
// app.use(
//   session({
//     secret: process.env.COOKIE_SECRET,
//     resave: true,
//     saveUninitialized: false,
//     store: new CookieStore({ mongooseConnection: mongoose.connection })
//   })
// );
//app.use(passport.initialize());
//app.use(passport.session());

app.use(localsMiddleware);

/* app.use((req, res, next) => {
  res.setHeader(
    "Content-Security-Policy",
    "script-src 'self' https://archive.org"
  );
  return next();
});
*/
/*---------------------------------
★Three ways to make middleware
app.use((req, res, next) => {}) 
app.use(function(req, res, next){})
const localsMiddleware = (req, res, next) => {}
---------------------------------*/

// Routers
app.use(routes.home, globalRouter); //use는 router 전체 사용
app.use(routes.users, userRouter);
app.use(routes.videos, videoRouter);

export default app;

// application 관련 코드들.