import React, { useEffect, useRef, useState } from "react";
import { auth, db } from "../firebase";
import { collection, getDocs, setDoc, doc } from "firebase/firestore";

function Productcard() {
  const [Product, setProduct] = useState([]);
  const [cart, setCart] = useState({});
  const ItemButton = ({ item }) => (
    <button
      style={{
        width: 100,
        height: 30,
        borderRadius: 9,
        backgroundColor: "#8104EE",
        color: "#fff",
        cursor: "pointer",
      }}
      onClick={() => addToCart(item)}
    >
      add To cart
    </button>
  );
  const fetchPost = async () => {
    await getDocs(collection(db, "Products")).then((querySnapshot) => {
      const newData = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setProduct(newData);
      console.log(Product, newData);
    });
  };
  const addToCart = async (item) => {
    try {
      await setDoc(doc(db, "Cart", item.id), {
        quantity: 1,
        product: item,
      });
      setCart((prevCart) => ({ ...prevCart, [item.id]: item }));
    } catch (error) {
      alert(error);
    }
  };
  useEffect(() => {
    fetchPost();
  }, []);
  return (
    <div style={{ margin: 50 }}>
      {Product !== null ? (
        Product.map((item) => (
          <div
            style={{
              backgroundColor: "#7AB195",
              width: 200,
              height: 300,
              borderRadius: 19,
            }}
          >
            <img
              src={item.Image}
              alt="Product image"
              width={"100%"}
              height={150}
            />
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                margin: 6,
              }}
            >
              <text key={item.id}>Name:{item.name}</text>
              <text key={item.id}>Price:${item.price}</text>
            </div>
            <text style={{ marginLeft: 5 }} key={item.id}>
              descrpition:{item.description}
            </text>
            <div style={{ marginTop: 30, textAlign: "center" }}>
              <ItemButton item={item}/>
            </div>
          </div>
        ))
      ) : (
        <text>kdnci</text>
      )}
    </div>
  );
}

export default Productcard;
