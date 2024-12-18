import React, { createContext, useContext, useState, useEffect } from "react";
import { useLoading, BallTriangle } from "@agney/react-loading";
import "./Loader.css";

const LoaderContext = createContext();

export const LoaderProviderComponent = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(true); // State to control website refresh

  // Set up the loader with an indicator
  const { containerProps, indicatorEl } = useLoading({
    loading: refreshing || loading,
    indicator: <BallTriangle width="50" />,
  });

  useEffect(() => {
    // Simulate a refresh effect on first load
    setTimeout(() => {
      setRefreshing(false);
    }, 1000); // Adjust this timeout to control initial load time
  }, []);

  const startLoader = () => setLoading(true);
  const stopLoader = () => setLoading(false);

  return (
    <LoaderContext.Provider value={{ startLoader, stopLoader }}>
      {(refreshing || loading) && (
        <section className="loader-container" {...containerProps}>
          {indicatorEl}
        </section>
    
      )}
      {!refreshing && !loading && children}
    </LoaderContext.Provider>
  );
};

// Custom hook to use the loader
export const useLoader = () => {
  return useContext(LoaderContext);
};
