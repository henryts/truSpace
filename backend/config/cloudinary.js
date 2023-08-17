import { v2 as cloudinary } from 'cloudinary';

console.log(process.env.CLOUDINARY_API_KEY);
cloudinary.config({
  cloud_name:'dofusy2dr',
  api_key:'436187152191887',
  api_secret:'E49Q-rA9YXx7OiTZ6bDZdgGcjZA'
});
 

export default cloudinary;
