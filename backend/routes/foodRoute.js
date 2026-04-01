import express from "express"
import { addFood,listFood,removeFood } from "../controllers/foodController.js"
import multer from "multer"
//import fs from "fs";
//import path from "path";

const foodRouter = express.Router();

// Ensure uploads directory exists
/*const uploadPath = path.join("uploads");
if (!fs.existsSync(uploadPath)) {
  fs.mkdirSync(uploadPath);
}



//Image Storage Engine

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, uploadPath);
    },
    filename: function (req, file, cb) {
      cb(null, `${Date.now()}-${file.originalname}`);
    }
  });
*/
const storage = multer.diskStorage({
    destination:"uploads",
    filename:(req,file,cb)=>{
        return cb(null,`${Date.now()}${file.originalname}`)
    }
})

const upload = multer({storage:storage})

foodRouter.post("/add",upload.single("image"),addFood)
foodRouter.get("/list", listFood)
foodRouter.post("/remove",removeFood);



export default foodRouter;