import { Stack } from "@mui/material";
import { Link } from "react-router-dom";

import { logo } from "../utils/constants";
import { SearchBar } from "./";

const Navbar = () => (
  <Stack
    direction="row"
    alignItems="center"
    p={2}
    sx={{
      position: "sticky",
      background: '#16161a',
      top: 0,
      justifyContent: "space-between",
      zIndex: 10, // Ensure the navbar stays above other content
    }}
  >
    <Link to="/" style={{ display: "flex", alignItems: "center" }}>
      <img
        src={logo}
        alt="logo"
        style={{
          height: '65px', // Increased height for larger logo
          width: 'auto',  // Maintain aspect ratio
          zIndex: 20,     // If you want the logo above other elements within the navbar
        }}
      />
    </Link>
    <SearchBar />
  </Stack>
);

export default Navbar;
