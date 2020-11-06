import 'package:flutter/material.dart';
import 'package:flutter_counter/flutter_counter.dart';

class CartScreen extends StatefulWidget {
  @override
  _CartScreenState createState() => _CartScreenState();
}

class _CartScreenState extends State<CartScreen> {
  int _defaultValue = 1;

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
          title: Text("Cart",
              style: TextStyle(
                fontSize: 28,
              )
              // color: Colors.grey[700]),
              ),
        ),
        body: ListView.separated(
            separatorBuilder: (context, index) => Divider(
                  color: Colors.black,
                ),
            itemCount: 5,
            itemBuilder: (context, index) {
              return ListTile(
                leading: SizedBox(
                  height: 200,
                  width: 100,
                  child: Image.network(
                    "https://images-na.ssl-images-amazon.com/images/I/51Qvdf1C5GL._SX425_.jpg",
                    fit: BoxFit.contain,
                  ),
                ),
                title: Text(
                  "Product Name",
                  style: TextStyle(fontSize: 28, fontWeight: FontWeight.bold),
                ),
                subtitle: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Text(
                        "₹ 150",
                        style: TextStyle(fontSize: 22),
                      ),
                      SizedBox(
                        height: 10,
                      ),
                      Text(
                        "Total Amount: ₹ 400",
                        style: TextStyle(fontSize: 22),
                      ),
                      SizedBox(
                        height: 10,
                      ),
                      Counter(
                        color: Color(0xff10ac84),
                        initialValue: _defaultValue,
                        buttonSize: 32,
                        textStyle: TextStyle(fontSize: 25),
                        minValue: 0,
                        maxValue: 15,
                        step: 1,
                        decimalPlaces: 0,
                        onChanged: (value) {
                          // get the latest value from here
                          setState(() {
                            _defaultValue = value;
                          });
                        },
                      ),
                    ]),
              );
            }),
        floatingActionButton: FlatButton(
            clipBehavior: Clip.antiAlias,
            color: Color(0xff10ac84),
            onPressed: () {},
            child: Text(
              "Checkout",
              style: TextStyle(fontSize: 22, color: Colors.white),
            )));
  }
}
