import firebase from "../core/firebase/firebase";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  limit,
  orderBy,
  query,
  where,
} from "firebase/firestore";
import { Item, StoreInfoState } from "../core/models/storeInfo";
import { Category } from "../components/Body";

export class StoreRepo {
  getStoreInfo = async (storeUrl: string) => {
    const docRef = doc(firebase.firestore(), "stores", storeUrl);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      console.log("Paragloogged", docSnap.data());
      const data = docSnap.data() as StoreInfoState;
      return data;
    } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
    }
  };

  getSubCategories = async () => {
    let categories: Category[] = [];
    try {
      const querySnapshot = await getDocs(
        collection(firebase.firestore(), "sub-categories")
      );
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        categories.push(doc.data() as Category);
      });
    } catch {}

    return categories;
  };

  getAllItems = async (storeUrl: string) => {
    let items: Item[] = [];
    try {
      const q = query(
        collection(firebase.firestore(), "stores", storeUrl, "items"),
        orderBy("views")
      );
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        items.push(doc.data() as Item);
      });
    } catch {}

    return items;
  };
}
