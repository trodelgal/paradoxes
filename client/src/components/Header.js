import AppBar from "@mui/material/AppBar";
import CameraIcon from "@mui/icons-material/PhotoCamera";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
const Header = () => {
  return (
    <AppBar position="relative" dir="rtl">
      <Toolbar>
        {/* <CameraIcon sx={{ mr: 2 }} /> */}
        <Typography variant="h6" color="inherit" noWrap>
          זרקור למחקר 2023
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
