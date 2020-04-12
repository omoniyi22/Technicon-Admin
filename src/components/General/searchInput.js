import React from "react";

import { Input } from "antd";

const { Search } = Input;
export function SearchInput({ placeholder = "input search text", onSearch }) {
  return (
    <React.Fragment>
      <Search
        placeholder={placeholder}
        onSearch={onSearch}
        style={{
          width: 250,
          height: 40,
          display: "flex",
          alignItems: "center",
          borderRadius: 20,
        }}
      />
    </React.Fragment>
  );
}
