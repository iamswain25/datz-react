import React from "react";
export default function useTitle() {
  React.useEffect(() => {
    document.title = "Datzpress Admin Page";
  }, []);
}
