import { useState } from 'react';
import { AppBar, Box, Divider, Drawer, IconButton, List, ListItem, Menu, MenuItem, Toolbar, Typography } from '@mui/material/';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';
import CustomLogo from './CustomLogo';

const Navbar = (props) => {
  const drawerWidth = '100%';
  const navItems = [
    { id: 0, description: 'Home', link: '/' },
    { id: 1, description: 'About', link: '/about' },
    { id: 2, description: 'Services', link: null, subItems: [
      { id: 2.1, description: 'Overview', link: '/servicesoverview' },
      { id: 2.2, description: 'Industries', link: '/servicesindustries' },
    ]},
    { id: 3, description: 'Resources', link: '/resources' },
    { id: 4, description: 'Contact', link: '/contact' },
  ];

  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);
  const [drawerSubItemOpen, setDrawerSubItemOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleDrawerSubItemClick = () => {
    setDrawerSubItemOpen(!drawerSubItemOpen)
  };

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const drawer = (
    <Box 
      sx={{ 
        textAlign: 'center', 
        px: '5px',  
        fontFamily: 'Montserrat, sans-serif',
        fontWeight: 600, 
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'flex-start',
          alignItems: 'center',
          px: 1,
          pt: 1,
        }}
      >
        <IconButton onClick={handleDrawerToggle}>
          <CloseIcon sx={{fontSize: '40px'}} />
        </IconButton>
      </Box>
      <Typography
        variant="h6"
        style={{ fontWeight: 600 }}
        sx={{ mb: 2 }}>
        <CustomLogo isDrawer={true} />
      </Typography>
      <Divider />
      <List>
        <ListItem disablePadding sx={{ textAlign: 'center' }}>
          <div className="navbar-list-anchor-container"></div>
        </ListItem>
        {navItems.map((item) => (
          item.subItems ?
            <div key={item.id} onClick={handleDrawerSubItemClick}>
              {drawerSubItemOpen ? 
                <div>
                  <ListItem key={item.id} disablePadding sx={{ textAlign: 'center' }}>
                    <div className="navbar-list-anchor-container">
                      <div className="navbar-anchor" onClick={handleDrawerSubItemClick}>
                        {item.description}
                        <KeyboardDoubleArrowUpIcon sx={{ fontSize: '34px' }} />
                      </div>
                    </div>
                  </ListItem>
                  {item.subItems.map((subItem) => ( 
                    <ListItem key={subItem.id} disablePadding sx={{ textAlign: 'center', paddingLeft: '3%' }}>
                      <div className="navbar-list-anchor-container">
                        <a
                          className="navbar-anchor-subitem"
                          rel="noreferrer"
                          href={subItem.link}
                        >
                          {subItem.description}
                        </a>
                      </div>
                    </ListItem>
                  ))}
                </div>
                : 
                <ListItem key={item.id} disablePadding sx={{ textAlign: 'center' }}>
                  <div className="navbar-list-anchor-container">
                    <div className="navbar-anchor" onClick={handleDrawerSubItemClick}>
                      {item.description}
                      <KeyboardDoubleArrowDownIcon sx={{ fontSize: '34px' }} />
                    </div>
                  </div>
                </ListItem>
              }
            </div>
            :
            <ListItem key={item.id} disablePadding sx={{ textAlign: 'center' }}>
              <div className="navbar-list-anchor-container">
                <a
                  className="navbar-anchor"
                  rel="noreferrer"
                  href={item.link}
                >
                  {item.description}
                </a>
              </div>
            </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <div>
      <Box
        sx={{
          fontFamily: 'Montserrat, sans-serif',
          fontWeight: 600,
        }}
      >
        <AppBar
          component="nav"
          position="relative"
          sx={{
            py: '0.5%',
            backgroundColor: '#f8f8f8',
          }}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { md: 'none' } }}
            >
              <MenuIcon
                sx={{
                  color: 'black',
                  width: '40px',
                  height: '40px',
                }}
              />
            </IconButton>
            <Typography
              variant="h5"
              component="div"
              sx={{
                flexGrow: 1,
                display: { xs: 'block', sm: 'block' },
              }}
            >
              <Typography
                style={{ fontWeight: 600 }}
                sx={{
                  typography: { xs: 'h5', sm: 'h5' },
                  display: 'flex',
                  justifyContent: 'flex-start',
                  '@media (max-width: 464px)': {
                    fontSize: '16px',
                  },
                }}
              >
                <CustomLogo isDrawer={false} />
              </Typography>
            </Typography>
            <Box
              sx={{
                display: { xs: 'none', sm: 'none', md: 'block' },
                padding: {xs: '2% 1% 0 0', lg: '2% 2% 0 0'},
              }}
            >
              {navItems.map((item) => (
                <Box key={item.id} sx={{ display: 'inline-block', position: 'relative' }}>
                  {item.subItems ? (
                    <div>
                      <a
                        className="navbar-anchor"
                        rel="noreferrer"
                        href="#"
                        onClick={handleMenuOpen}
                      >
                        {item.description.toUpperCase()}
                      </a>
                      <Menu
                        anchorEl={anchorEl}
                        open={Boolean(anchorEl)}
                        onClose={handleMenuClose}
                        slotProps={{
                          paper: {
                            elevation: 0,
                            sx: {
                              overflow: 'visible',
                              filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                              mt: 1.5,
                              backgroundColor: '#4c8099',
                              '& .MuiAvatar-root': {
                                width: 32,
                                height: 32,
                                ml: -0.5,
                                mr: 1,
                              },
                              '&::before': {
                                content: '""',
                                display: 'block',
                                position: 'absolute',
                                top: 0,
                                right: '45%',
                                width: 20,
                                height: 20,
                                bgcolor: '#4c8099',
                                transform: 'translateY(-50%) rotate(45deg)',
                                zIndex: 2,
                              },
                            }
                          }
                        }}
                        transformOrigin={{ horizontal: 'center', vertical: 'top' }}
                        anchorOrigin={{ horizontal: 'center', vertical: 'bottom' }}
                        MenuListProps={{
                          'aria-labelledby': 'basic-button',
                        }}
                      >
                        {item.subItems.map((subItem) => (
                          <MenuItem 
                            key={subItem.id} 
                            onClick={handleMenuClose}
                            sx={{
                              '&:hover': { 
                                bgcolor: 'rgb(109, 163, 188)',
                                zIndex: 3,
                              }
                            }}
                          >
                            <a
                              className="navbar-anchor"
                              rel="noreferrer"
                              href={subItem.link}
                              style={{ 
                                textDecoration: 'none', 
                                color: 'white',
                              }}
                            >
                              {subItem.description}
                            </a>
                          </MenuItem>
                        ))}
                      </Menu>
                    </div>
                  ) : (
                    <a
                      className="navbar-anchor"
                      rel="noreferrer"
                      href={item.link}
                    >
                      {item.description.toUpperCase()}
                    </a>
                  )}
                </Box>
              ))}
            </Box>
          </Toolbar>
        </AppBar>
        <Box component="nav">
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: 'block', sm: 'block', md: 'none' },
              '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
            }}
          >
            {drawer}
          </Drawer>
        </Box>
      </Box>
    </div>
  );
};

export default Navbar;
