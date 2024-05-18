// services/fetchOrderCoupons.js
import { getFirestore, collection, query, where, getDocs } from "firebase/firestore";
import CouponModel from "../../ModelClasses/coupon_model";

const fetchOrderCoupons = async (cusId, orderId) => {
  const db = getFirestore();
  const couponsRef = collection(db, "COUPONS");
  const q = query(couponsRef, where("COSTUMER_ID", "==", cusId), where("ORDER_ID", "==", orderId));
  
  const querySnapshot = await getDocs(q);
  const couponOrderList = [];

  querySnapshot.forEach((doc) => {
    const data = doc.data();
    const coupon = new CouponModel(
        data.COUPON_ID || "", 
        data.ORDER_ID || "",
         data.STATUS || "");
    couponOrderList.push(coupon);
  });

  return couponOrderList;
};

export default fetchOrderCoupons;
