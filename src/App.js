import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import secureLocalStorage from "react-secure-storage";
import { getUserAuthUser, getUserByIdAll } from "./api/user-service";
import LoadingPage from "./pages/common/loading-page";
import CustomRoutes from "./router/CustomRoutes";
import { loginFailed, loginSuccess } from "./store/slices/AuthSlice";
import { settings } from "./utils/settings";

const App = () => {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  const loadData = async () => {
    try {
      let token = secureLocalStorage.getItem("token");
      if (token) {
        const respUser = await getUserAuthUser();

        console.log(respUser.data.id);

        const userAll = await getUserByIdAll(respUser.data.id);

        console.log(respUser);

        console.log(userAll);

        dispatch(loginSuccess(userAll.data));
      }
    } catch (err) {
      console.log(err);
      dispatch(loginFailed());
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
    document.title = `${settings.siteName} | Library of Congress`;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <>{loading ? <LoadingPage /> : <CustomRoutes />}</>;
};

export default App;
