import React from "react";
import { auth } from "../config/firebase";
import { useHistory } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
export default function useAuthRedirectFrom() {
  const [user] = useAuthState(auth);
  const history = useHistory<{ from: { pathname: string } }>();
  React.useEffect(() => {
    if (user) {
      const { from } = history.location.state ?? { from: "/admin" };
      history.replace(from);
    }
  }, [user, history]);
}
