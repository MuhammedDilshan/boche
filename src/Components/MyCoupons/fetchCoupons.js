// services/fetchCoupons.js
import { getFirestore, collection, query, where, getDocs } from "firebase/firestore";
import CouponModel from "../../ModelClasses/coupon_model";

const fetchCoupons = async (cusId) => {
  const db = getFirestore();
  const couponsRef = collection(db, "COUPONS");
  const q = query(couponsRef, where("COSTUMER_ID", "==", cusId));
  
  const querySnapshot = await getDocs(q);
  const couponList = [];

  querySnapshot.forEach((doc) => {
    const data = doc.data();
    const coupon = new CouponModel(
      data.COUPON_ID || "", 
      data.ORDER_ID || "", 
      data.STATUS || "");
    couponList.push(coupon);
  });

  return couponList;
};

export default fetchCoupons;
