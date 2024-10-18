import React from "react";
import Stack from "@mui/material/Stack";
import Pagination from "@mui/material/Pagination";

const CustomPagination = ({ count, page, onChange }) => {
  return (
    <Stack spacing={2} className="mt-8 mb-4 items-center">
      <Pagination
        count={count}
        page={page}
        onChange={onChange}
        className="text-white"
        sx={{
          "& .MuiPaginationItem-root": {
            color: "white", 
            backgroundColor: "#1f2937", 
          },
          "& .Mui-selected": {
            backgroundColor: "#546E7A", 
            color: "white", 
          },
          "& .MuiPaginationItem-root:hover": {
            backgroundColor: "#374151", 
          },
        }}
      />
    </Stack>
  );
};

export default CustomPagination;
