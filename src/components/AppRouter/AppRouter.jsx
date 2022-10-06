import React, { useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { privateRoutes, publicRoutes } from "../../routes/index";
import { CHAT_ROUTE, LOGIN_ROUTE } from "../../utils/consts";
import { useAuthState } from "react-firebase-hooks/auth";
import { Context } from "../../main";

const AppRouter = () => {
  const { auth } = useContext(Context);
  const [user] = useAuthState(auth);

  return (
    <>
      {user ? (
        <Routes>
          {privateRoutes.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              element={<route.element />}
            />
          ))}
          <Route path="*" element={<Navigate to={CHAT_ROUTE} replace />} />
        </Routes>
      ) : (
        <Routes>
          {publicRoutes.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              element={<route.element />}
            />
          ))}
          <Route path="*" element={<Navigate to={LOGIN_ROUTE} replace />} />
        </Routes>
      )}
    </>
  );
};

export default AppRouter;
