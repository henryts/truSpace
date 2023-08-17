import { v2 as cloudinary } from "cloudinary";
import multer from "multer";
import { CloudinaryStorage } from "multer-storage-cloudinary";


// Cloudinary configuration
cloudinary.config({
  cloud_name:'dofusy2dr',
  api_key:'436187152191887',
  api_secret:'E49Q-rA9YXx7OiTZ6bDZdgGcjZA',
});

// Multer configuration
const storageOptions = {
  cloudinary: cloudinary,
  params: {
    resource_type: "auto",
    allowed_formats: ["jpg", "jpeg", "png", "pdf"],
    public_id: (req, file) => {
      const fileName = file.originalname.split(".").slice(0, -1).join(".");
      return fileName;
    },
  },
};

const storage = new CloudinaryStorage(storageOptions);

export const uploadprofile = multer({ storage: storage }).single("picturePath");
const uploadCompanylogo = multer({ storage: storage }).single("companylogo");

