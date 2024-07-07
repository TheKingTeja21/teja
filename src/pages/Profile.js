import React, { useState, useEffect } from "react";
import { auth, db } from "../firebase";
import { setDoc, doc, getDoc } from "firebase/firestore";

function Profile() {
  useEffect(() => {
    fetchdata();
  }, []);

  const [userDetails, setUserDetails] = useState(null);
  const fetchdata = async () => {
    auth.onAuthStateChanged(async (user) => {
      const docRef = doc(db, "Users", user.uid);
      const docdata = await getDoc(docRef);
      if (docdata.exists()) {
        setUserDetails(docdata.data);
        console.log("====================================");
        console.log(docdata.data);
        console.log("====================================");
      } else {
        console.log("====================================");
        console.log("not Logged in|plz LOGGED IN");
        console.log("====================================");
      }
    });
  };

  return (
    <div>
      {/* <text>sncoiansksdcl</text>
      userDetails !==null ? <text>{userDetails}</text>
      <text>{userDetails}</text>:<text>dc'asxl</text> */}
    </div>
  );
}
export default Profile;
