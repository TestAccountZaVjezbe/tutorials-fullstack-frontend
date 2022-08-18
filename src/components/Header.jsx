import { useNavigate, useLocation  } from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { useEffect } from "react";


const pages = ['Categories', 'SubCategories', 'Items'];

const ResponsiveAppBar = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const handleCloseNavMenu = (page) => {
        navigate(page.toLowerCase())
    };

  useEffect(()=> {
    console.log('STA JE OVO', location)
  }, [location])

  return (
    <AppBar position="static" sx={{margin: 0, padding: 0, paddingLeft: '0px'}}>
      <Container sx={{ display: 'flex', margin: 0, padding: 0}}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={() => handleCloseNavMenu(page)}
                sx={{  width: '150px', display: 'block', background: 'red', margin: '10px', padding: 0, paddingLeft: '0px' }}
              >
                <div style={{ color: 'white'}}>

                    {page}
                </div>
              </Button>
            ))}
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;