import React, { useState, useEffect } from "react";
import { Assets } from "../../Components/Assets/Assets";
import "./Otp.css";
import { useLocation, useNavigate } from "react-router-dom";
import OtpInput from "react-otp-input";
import { database } from "../../firebase";
import { ref, onValue } from "firebase/database";
import {
  getDocs,
  collection,
  query,
  where,
  getFirestore,
} from "firebase/firestore";
import { firestore } from "../../firebase";
import { ProductModel } from "../../ModelClasses/product_model";
import { useProduct } from "../../Context/ProductContext";

const Otp = () => {
  const { productData, setProductData } = useProduct();
  console.log(productData);
  const location = useLocation();
  const { mobile } = location.state || {};
  const navigator = useNavigate();
  const [otp, setOtp] = useState(["123456", "000000", "111111", "555555"]);
  const [userOtp, setUserOtp] = useState("");

  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    mobile: "",
    otp: "", // Add otp field to the formData
  });
  const [showLoading, setShowLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    setShowLoading(true);
    const targetKey = mobile;
    const pin = userOtp;

    checkValueForKey(targetKey, pin);

    // Call the function to check for OTP
    // checkValueForKey(mobile, otp);

    // Simulate OTP API call
    setTimeout(() => {
      setShowLoading(false);
      // otpPage("/otp"); // Navigate to OTP page
    }, 2000);
  };

  const navigate = useNavigate();

  const checkValueForKey = async (targetKey, pin) => {
    const fixedOtpRef = ref(database, "FIXED_OTP");
    onValue(fixedOtpRef, (snapshot) => {
      if (snapshot.exists()) {
        const data = snapshot.val();
        Object.entries(data).forEach(([key, value]) => {
          if (key === targetKey && value === pin) {
            console.log("Key and pin match found!");
            alert("Login Success");
            userAuthorized();
            // navigate("/");
            // User authorization logic here
            // You might set a token or perform some navigation

            // Example:
            // localStorage.setItem('appwrite_token', '');
            // localStorage.setItem('phone_number', key);
            // Navigate to another page
            // otpPage("/some-page"); // Replace with actual navigation
          } else {
            alert("Invalid otp");
          }
        });
      } else {
        console.log("No fixed OTPs found.");
      }
    });
  };


  const [loginUser, setLoginUser] = useState({
    id: "",
    name: "",
    type: "",
    phone: "",
    place: "",
    photo: "",
  });

  // const [productModelList, setProductModelList] = useState([]);

  let productModelList = [];

  const fetchMainProduct = async () => {
    try {
      const userCollectionRef = collection(firestore, "PRODUCTS");
      const snapshot = await getDocs(userCollectionRef);
      // const snapshot = await db.collection("PRODUCTS").get();
      const products = [];

      snapshot.forEach((doc) => {
        const data = doc.data();
        const addedDate = data.ADDED_DATE.toDate(); // Assuming ADDED_DATE is a Firebase Timestamp
        const product = new ProductModel(
          doc.id,
          data.NAME || "",
          data.PRICE || 0,
          data.CATEGORY_ID || "",
          data.CATEGORY_NAME || "",
          data.DESCRIPTION || "",
          data.IMAGES || [],
          data.OFFER_STATUS || "",
          data.OFFER_PRICE || 0,
          data.ADDED_BY || "",
          addedDate
        );
        productModelList.push(product);
      });
      console.log("sdgfdhjah");
      console.log(products);
      console.log("Product Model List:", productModelList);

      // Update productModelList state

      if (productModelList.length > 0) {
        console.log("First product ID:", productModelList[0].id);
        console.log("First product name:", productModelList[0].name);
      } else {
        console.log("No products found");
      }

      // Trigger a re-render
      // notifyListeners();
    } catch (error) {
      console.error("Error fetching main product data:", error);
      // Handle error
    }
  };


  const userAuthorized = async () => {
    try {
      productModelList = [];
      const userCollectionRef = collection(firestore, "CUSTOMERS");
      console.log("ddysuaiihgffdhsjakjshdfgdhxsjz")
      const q = query(userCollectionRef, where("PHONE", "==", mobile),where("STATUS", "==", "ACTIVE"));
      const querySnapshot = await getDocs(q);
      console.log("irsdhasf")
      // const querySnapshot = await collection("CUSTOMERS")
      //   .where("PHONE", "==", mobile)
      //   .where("STATUS", "==", "ACTIVE")
      //   .get();
      
      if (!querySnapshot.empty) {
        const userData = querySnapshot.docs[0].data();
        const loginUser = {
          id: querySnapshot.docs[0].id,
          name: userData["NAME"] || '',
          phone: userData["PHONE"] || '',
          place: userData["STATE"] || '',
          type: userData["TYPE"] || '',
          photo: userData["PROFILE_IMAGE"] || ''
        };

        setLoginUser(loginUser);

        // Store data in local storage
        localStorage.setItem('appwrite_token', mobile);
        localStorage.setItem('loginUserId', loginUser.id);
        localStorage.setItem('loginUserName', loginUser.name);
        localStorage.setItem('loginUserPhone', loginUser.phone);
        localStorage.setItem('loginUserType', loginUser.type);
        localStorage.setItem('loginUserPhoto', loginUser.photo);
        localStorage.setItem('loginUserPlace', loginUser.place);

        console.log(loginUser);
        console.log("loginUser.............................");
        // Fetch user details and other data
        await fetchMainProduct();
        // await fetchOrders(loginUser.id);
        // await fetchCoupons(loginUser.id);
        // await fetchWallet(loginUser.id);
        
        // Check if product list has more than one product
        console.log(productModelList);
        console.log(productModelList[0].id);
        console.log(productModelList[0].name);
        console.log(productModelList[0].images);
       

        console.log("productModelList...................");
        // setProductData({
        //   productId: productModelList[0].id,
        //   productName: productModelList[0].name,
        //   productImages: productModelList[0].images,
        //   productPrice: productModelList[0].price,
        //   loginUserName: loginUser.name,
        //   loginUserId: loginUser.id,
        //   loginUserType: loginUser.type,
        //   loginUserPhone: loginUser.phone,
        //   loginUserPlace: loginUser.place,
        //   loginUserPhoto: loginUser.photo
        // });
        // console.log("irshadsssss")

        if (productModelList.length > 1) {
          // Do something if there are more than one product
        } else {
          // console.log("irshadsssss")
          localStorage.setItem('productId', productModelList[0].id);
          localStorage.setItem('productName', productModelList[0].name);
          localStorage.setItem('productImages', productModelList[0].images);
          localStorage.setItem('productPrice', productModelList[0].price);

          navigator("/home",{state:{
            "productId":productModelList[0].id,
            "productName":productModelList[0].name,
            "productImages":productModelList[0].images,
            "productPrice":productModelList[0].price,
            "loginUserName":loginUser.name,
            "loginUserId":loginUser.id,
            "loginUserType":loginUser.type,
            "loginUserPhone":loginUser.phone,  
          }});
           
        }
      } else {
        // Redirect to login screen if user not found
      }
    } catch (error) {
      // Handle error
      console.error('Sorry, some error occurred:', error);
      // You might want to show a snackbar or toast here
    }
  };

   








  return (
    <div className="otp">
      <div className="img-box">
        <h6>OTP Verification</h6>
        <p>
          We’ve picked out something special just for you! Check out the app now
          to see what’s waiting.
        </p>
      </div>
      <div className="otp-box">
        <p>
          Enter the <span>OTP Code</span> send to
        </p>
        <p>+91 98765 43210</p>
        <form action="">
          <OtpInput
            type="tel"
            value={userOtp}
            onChange={setUserOtp}
            numInputs={6}
            renderInput={(props) => <input {...props} className="number" />}
            minLength={10}
            maxLength={10}
            pattern="[0-9]{10}"
            required
          />
        </form>
        <button className="otp-b" onClick={handleLogin}>
          Verify
        </button>
        <p>
          Didn't receive a code?<span> 0:30</span>
        </p>
        <button className="resend">Resend OTP</button>
      </div>
    </div>
  );
};

export default Otp;
