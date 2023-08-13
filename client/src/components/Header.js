import AppBar from "@mui/material/AppBar";
import HomeIcon from "@mui/icons-material/Home";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Link } from "@mui/material";

const Header = () => {
  return (
    <AppBar position="relative" dir="rtl">
      <Toolbar>
        <Link href="/" color="inherit" noWrap>
          <HomeIcon sx={{ mt: 1, ml: 1 }} />
        </Link>
        <Typography variant="h6" color="inherit" noWrap>
          זרקור למחקר 2023
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
