
import { getFirestore, collection, doc, getDocs } from "firebase/firestore";
import AddressModel from "../../ModelClasses/AddressModel";

const fetchAddress = async (cosId) => {
  const db = getFirestore();
  const addressRef = collection(db, `CUSTOMERS/${cosId}/DELIVER_ADDRESS`);
  
  const querySnapshot = await getDocs(addressRef);
  const addressModelList = [];

  querySnapshot.forEach((doc) => {
    const data = doc.data();
    const address = new AddressModel(
      doc.id,
      data.USER_ID,
      data.USER_NAME,
      data.USER_MOBILE,
      data.USER_LAND_MARK,
      data.USER_LOCALITY,
      data.USER_CITY,
      data.USER_PIN_CODE,
      data.USER_STATE
    );
    addressModelList.push(address);
  });

  return addressModelList;
};

export default fetchAddress;
