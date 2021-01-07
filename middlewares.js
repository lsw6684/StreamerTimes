import routes from "./routes";

export const localsMiddleware = (req,res,next)=>{
    res.locals.siteName = 'Streamer Times';
    res.locals.routes = routes;
    next();
};