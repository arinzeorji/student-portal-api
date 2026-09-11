const cloudinary = require('cloudinary').v2;


cloudinary.config({
    cloud_name: 'da51peddb',
    api_key:'878732534574926',
    api_secret: 'P6GTZjz3Gmhf9BkBsKpltUMkvvE'
})

module.exports = cloudinary;

//CLOUDINARY_URL=cloudinary://878732534574926:P6GTZjz3Gmhf9BkBsKpltUMkvvE@da51peddb