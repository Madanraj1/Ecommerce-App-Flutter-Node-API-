import 'package:EcommerceApp/Screens/product/cartScreen.dart';
import 'package:flutter/material.dart';

class ProductDetailScreen extends StatefulWidget {
  @override
  _ProductDetailScreenState createState() => _ProductDetailScreenState();
}

class _ProductDetailScreenState extends State<ProductDetailScreen> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        backgroundColor: Color(0xff10ac84),
        leading: IconButton(
          icon: Icon(
            Icons.arrow_back_sharp,
            // color: Colors.black,
            size: 30,
          ),
          onPressed: () {
            Navigator.pop(context);
          },
        ),
        title: Text("Products Detail",
            style: TextStyle(
              fontSize: 28,
            )
            // color: Colors.grey[700]),
            ),
        actions: [
          IconButton(
            icon: Icon(
              Icons.shopping_basket_outlined,
              // color: Colors.black,
              size: 30,
            ),
            onPressed: () {
              Navigator.push(context,
                  MaterialPageRoute(builder: (context) => CartScreen()));
            },
          ),
        ],
      ),
      body: ListView(
        children: [
          Container(
            height: 300,
            child: Image.network(
                "https://www.freeiconspng.com/thumbs/no-image-icon/no-image-icon-6.png"),
          ),
          Padding(
            padding: const EdgeInsets.all(8.0),
            child: Column(
              children: [
                SizedBox(
                  height: 20.0,
                ),
                Text(
                  "Product Name fully",
                  style: TextStyle(
                    fontSize: 35,
                    fontWeight: FontWeight.bold,
                    color: Color(0xff10ac84),
                  ),
                ),
                Text(
                  "₹350",
                  style: TextStyle(
                    fontSize: 34,
                    fontWeight: FontWeight.bold,
                    color: Color(0xff10ac84),
                  ),
                ),
                Text(
                  "orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
                  style: TextStyle(
                    fontSize: 22,
                    // fontWeight: FontWeight.bold,
                    color: Colors.grey,
                  ),
                ),
                SizedBox(
                  height: 15,
                ),
                Container(
                  width: 170.0,
                  alignment: Alignment.topRight,
                  child: RaisedButton(
                    shape: RoundedRectangleBorder(
                        borderRadius: BorderRadius.circular(10.0)),
                    textColor: Colors.white,
                    color: Color(0xff10ac84),
                    child: Row(
                      // mainAxisAlignment: MainAxisAlignment.end,
                      children: [
                        Icon(Icons.shopping_basket_rounded),
                        Text(
                          "Add to Cart",
                          style: TextStyle(fontSize: 20),
                        ),
                      ],
                    ),
                    onPressed: () {
                      Navigator.push(
                          context,
                          MaterialPageRoute(
                              builder: (context) => ProductDetailScreen()));
                    },
                  ),
                ),
              ],
            ),
          )
        ],
      ),
    );
  }
}
