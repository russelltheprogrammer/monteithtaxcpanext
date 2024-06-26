import React, { useState } from 'react';
import { AppBar, Box, Divider, Drawer, IconButton, List, ListItem, Toolbar, Typography } from '@mui/material/';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import CustomLogo from './CustomLogo';

const Navbar = (props) => {

        const drawerWidth = 300;
        const navItems = [
          { id: 0, description: 'Home', link: '/' },
          { id: 1, description: 'Services', link: '/services' },
          { id: 2, description: 'About', link: '/about' },
          { id: 3, description: 'Resources', link: '/resources' },
          { id: 4, description: 'Contact', link: '/contact' },
        ];

        const { window } = props;
        const [mobileOpen, setMobileOpen] = useState(false);
        const [isNavCollapsed, setIsNavCollapsed] = useState(true);
        
        const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);
      
        const handleDrawerToggle = () => {
          setMobileOpen(!mobileOpen);
        };
      
        const drawer = (
          <Box 
          onClick={handleDrawerToggle} 
          sx={{ 
            textAlign: 'center', 
            px: "5px",  
            fontFamily: 'Montserrat, sans-serif',
            fontWeight: 600, 
            }}>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                    padding: 1,
                }}
            >
                <IconButton onClick={handleDrawerToggle}>
                    <CloseIcon />
                    </IconButton>
            </Box>
            <Typography
              variant="h6"
              style={{ fontWeight: 600 }}
              sx={{ my: 2 }}>
                <CustomLogo />
            </Typography>
            <Divider />
            <List>
              <ListItem disablePadding sx={{ textAlign: 'center' }}>
                <div className="navbar-list-anchor-container"></div>
              </ListItem>
              {navItems.map((item) => (
                <ListItem key={item.id} disablePadding sx={{ textAlign: 'center' }}>
                  <div className="navbar-list-anchor-container" key={item.id}>
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
            }}>
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
                    <CustomLogo />
                    <button
                     className="navbar-toggler"
                     type="button"
                     data-bs-toggle="collapse"
                     data-bs-target="#toggleMobileMenu"
                     aria-controls="toggleMobileMenu"
                     aria-expanded={!isNavCollapsed ? true : false}
                     aria-label="Toggle navigation"
                     onClick={handleNavCollapse}
                     >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    </Typography>
                  </Typography>
                  <Box
                    sx={{
                      display: { xs: 'none', sm: 'none', md: 'block' },
                      padding: {xs: '2% 1% 0 0', lg: '2% 2% 0 0'},
                    }}
                  >
                    {navItems.map((item) => (
                      <a
                        className="navbar-anchor"
                        rel="noreferrer"
                        key={item.id}
                        href={item.link}
                      >
                        {item.description.toUpperCase()}
                      </a>
                    ))}
                  </Box>
                  <Box>
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

