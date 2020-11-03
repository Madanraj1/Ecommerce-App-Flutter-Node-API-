import 'package:EcommerceApp/Screens/product/productDetailScreen.dart';
import 'package:flutter/material.dart';

class MainScreen extends StatefulWidget {
  @override
  _MainScreenState createState() => _MainScreenState();
}

class _MainScreenState extends State<MainScreen> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        backgroundColor: Colors.white,
        leading: Image.asset(
          "assets/logo_shopit.png",
          height: 20,
        ),
        title: Text(
          "Products",
          style: TextStyle(fontSize: 28, color: Colors.grey[700]),
        ),
      ),
      body: ListView.builder(
          itemCount: 15,
          itemBuilder: (context, index) {
            return ListTile(
              leading: SizedBox(
                height: 100,
                child: Image.network(
                    "https://www.freeiconspng.com/thumbs/no-image-icon/no-image-icon-6.png"),
              ),
              title: Text(
                "    Apple Watch series 102",
                style: TextStyle(fontSize: 20),
              ),
              subtitle: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  SizedBox(
                    height: 10.0,
                  ),
                  Text(
                    "    Red Color",
                    style: TextStyle(fontSize: 20),
                  ),
                  SizedBox(
                    height: 20.0,
                  ),
                  RaisedButton(
                    shape: RoundedRectangleBorder(
                        borderRadius: BorderRadius.circular(10.0)),
                    textColor: Colors.white,
                    color: Color(0xff10ac84),
                    child: Text(
                      "View Item",
                      style: TextStyle(fontSize: 20),
                    ),
                    onPressed: () {
                      Navigator.push(
                          context,
                          MaterialPageRoute(
                              builder: (context) => ProductDetailScreen()));
                    },
                  ),
                ],
              ),
            );
          }),
    );
  }
}
