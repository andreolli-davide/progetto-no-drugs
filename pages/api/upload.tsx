import { APIRoute } from "next-s3-upload";

export default APIRoute.configure({
    key(req, filename) {
        return `${ req.body.schoolName ? req.body.schoolName : 'progettonodrugs' }/${Math.random().toString(36).slice(2, 7)}-${ filename }`;
    }
});