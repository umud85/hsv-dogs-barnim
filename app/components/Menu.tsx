"use client";

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ImageListItem from '@mui/material/ImageListItem';
import Image from 'next/image';
import logo from '@/public/images/logo-transparent2.png';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { useRouter } from 'next/navigation';

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}

interface NavItem {
  name: string;
  link: string;
}

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const drawerWidth = 240;
const navItems2 = ['Home', 'Verein', 'Hundesport', 'Veranstaltungen',
  'Gallerie', 'Kontakt'];

const navItems: NavItem[] = [
  { name: 'Home', link: '/' },
  { name: 'Verein', link: '/verein' },
  { name: 'Hundesport', link: '/hundesport' },
  { name: 'Veranstaltungen', link: '/veranstaltungen' },
  { name: 'Gallerie', link: '/gallerie' },
  { name: 'Kontakt', link: '/kontakt' },
]

export default function DrawerAppBar(props: Props) {
  const router = useRouter();
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        HSV Dogs Barnim e.V.
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.name} disablePadding>
            <ListItemButton
              sx={{ textAlign: 'center' }}
              onClick={() => router.push(item.link)}
            >
              <ListItemText primary={item.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <ThemeProvider theme={darkTheme}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar component="nav">
          <Toolbar sx={{
            display: 'flex',
            justifyContent: 'center',
          }}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{
                display: { md: 'none' },
                marginRight: 'auto',
              }}
            >
              <MenuIcon />
            </IconButton>
            <ImageListItem sx={{ mr: 2, display: { xs: 'block' }}}>
              <Image
                src={logo}
                alt="Vereinslogo"
                width={100}
                height={75}
              />
            </ImageListItem>
            <Typography
              variant="h6"
              component="div"
              sx={{ display: { md: 'none' }, marginRight: 'auto' }}
            >
              HSV Dogs Barnim e.V.
            </Typography>
            <Box sx={{ display: { xs: 'none', md: 'block'}}}>
              {navItems.map((item) => (
                <Button
                  key={item.name}
                  sx={{ color: '#fff' }}
                  onClick={() => router.push(item.link)}
                >
                  {item.name}
                </Button>
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
              display: { sm: 'block', md: 'none' },
              '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
            }}
          >
            {drawer}
          </Drawer>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
