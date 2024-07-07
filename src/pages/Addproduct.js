import React, { useState } from "react";
import "./AddProduct.css";
import { auth, db, storage } from "../firebase";
import { setDoc, doc } from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

function Addproduct(props) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [Image, setImage] = useState(null);
  const types = ["image/png", "image/jpeg", "image/jpg"];
  const ProductImagehandler = (file) => {
    if (file && types.includes(file.type)) {
      setImage(file);
    } else {
      setImage(null);
      console.log("Error to upload image");
    }
    if (!file) {
      alert("Please choose a file first!");
    }
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    // Call API or perform action to add product
    const storageRef = ref(storage, `/images/${Image.name}`);
    const uploadTask = uploadBytesResumable(storageRef, Image);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
        switch (snapshot.state) {
          case "paused":
            console.log("Upload is paused");
            break;
          case "running":
            console.log("Upload is running");
            break;
        }
      },
      (error) => {
        switch (error.code) {
          case "torage/unauthorized":
            // User doesn't have permission to access the object
            break;
          case "torage/canceled":
            // User canceled the upload
            break;
          //...
          case "torage/unknown":
            // Unknown error occurred, inspect error.serverResponse
            break;
        }
      },
      () => {
        // Upload completed successfully, now we can get the download URL
        getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
          await setDoc(doc(db, "Products", name), {
            name: name,
            description: description,
            Image: downloadURL,
            price: price,
          }).then(() => {
            setName("");
            setImage(null);
            setPrice(0);
            setDescription("");
          });
        });
      }
    );
  };

  return (
    <form onSubmit={handleSubmit} className="AddProductForm">
      <label>
        Name:
        <input
          type="text"
          required
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </label>
      <br />
      <label>
        Price:
        <input
          type="number"
          required
          value={price}
          onChange={(event) => setPrice(event.target.value)}
        />
      </label>
      <br />
      <label>
        Description:
        <textarea
          value={description}
          required
          onChange={(event) => setDescription(event.target.value)}
        />
      </label>
      <br />
      {/* <label>
            Location:
            <input type="text" value={location} onChange={(event) => setLocation(event.target.value)} />
            </label>
            <br /> */}
      <label>
        AddImage:
        <input
          type="file"
          onChange={(event) => {
            const file = event.target.files[0];
            ProductImagehandler(file);
          }}
        />
      </label>
      <br />
      <button type="submit">Add Product</button>
    </form>
  );
}
export default Addproduct;
