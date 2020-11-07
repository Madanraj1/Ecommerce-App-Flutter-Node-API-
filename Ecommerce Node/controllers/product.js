const Product = require("../models/product");
const formidable = require("formidable");
const fs = require("fs");



// param
exports.getProductById = (req, res, next, id) => {

    Product.findById(id)
        .exec((error, product) => {
            if (error) {
                return res.status(400).json({
                    error: "Product Not found"
                })
            }
            req.product = product;
            next();
        })
}

// routes
exports.createProduct = (req, res) => {


    let form = new formidable.IncomingForm();
    form.keepExtensions = true;
    form.parse(req, (error, fields, file) => {

        if (error) {
            return res.status(400).json({
                error: " problem with file"
            })
        }


        const { name, description, price, stock } = fields;

        if (!name || !description || !price || !stock) {
            console.log(name, description, price, stock, photo);
            return res.status(400).json({
                error: "please include all fileds"
            });
        }

        let product = new Product(fields);

        if (file.photo) {
            if (file.photo.size > 3000000) {
                return res.json({
                    error: "Image is too Big"
                })
            }
            product.photo.data = fs.readFileSync(file.photo.path);
            product.photo.contentType = file.photo.type

        }



        // saving in DB
        product.save((error, updateProduct) => {

            if (error) {
                return res.status(400).json({
                    error: "Saving data failed"
                })
            }
            return res.json(updateProduct);

        })


    });


}


exports.updateProduct = (req, res) => {

    let form = new formidable.IncomingForm();
    form.keepExtensions = true;
    form.parse(req, (error, fields, file) => {

        if (error) {
            return res.status(400).json({
                error: " problem with file"
            })
        }


        // const { name, description, price, stock } = fields;

        // if (!name || !description || !price || !stock) {
        //     console.log(name, description, price, stock, photo);
        //     return res.status(400).json({
        //         error: "please include all fileds"
        //     });
        // }

        let product = new Product(fields);

        if (file.photo) {
            if (file.photo.size > 3000000) {
                return res.json({
                    error: "Image is too Big"
                })
            }
            product.photo.data = fs.readFileSync(file.photo.path);
            product.photo.contentType = file.photo.type

        }




        // saving in DB
        product.save((error, updateProduct) => {

            if (error) {
                console.log(error);
                return res.status(400).json({
                    error: "Saving data failed"
                })
            }
            return res.json(updateProduct);

        });


    });
}


exports.getProduct = (req, res) => {

    req.product.photo = undefined;
    return res.json(req.product);

}

exports.getphoto = (req, res) => {

    if (req.product.photo.data) {
        res.set("Content-Type", req.product.photo.contentType);
        return res.send(req.product.photo.data);
    }



}


exports.deleteProduct = (req, res) => {


    let product = req.product;
    product.remove((error, deletedProduct) => {
        if (error) {
            res.status(400).json({
                error: "failed to delete ",
                deletedProduct
            })
        }
        return res.json({
            message: "Deleted successfully",
            deletedProduct
        })

    })

}


exports.getAllProducts = (req, res) => {

    Product.find()
        .select("-photo")
        .exec((error, products) => {


            if (error) {
                return res.status(400).json({
                    error: "No Product Found"
                })
            }
            return res.json(products);

        })

}