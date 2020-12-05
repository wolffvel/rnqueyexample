import React from "react";
import { ReactQueryCacheProvider, QueryCache } from "react-query";

const appCache = new QueryCache();

const ReactQueryProvider = ({ children }) => {
  return (
    <ReactQueryCacheProvider queryCache={appCache}>
      {children}
    </ReactQueryCacheProvider>
  );
};

export default ReactQueryProvider;
