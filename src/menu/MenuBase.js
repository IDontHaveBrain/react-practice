import {
    Box,
    CssBaseline,
    Divider,
    IconButton,
    List,
    ListItem,
    ListItemButton, ListItemIcon, ListItemText, styled,
    Toolbar,
    Typography, useTheme
} from "@mui/material";
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import MailIcon from '@mui/icons-material/Mail';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import GridOnIcon from "@mui/icons-material/GridOn";
import {useState} from "react";
import {Link} from "react-router-dom";
import WebExcel from "../practice02/WebExcel";
import {Feed, Inventory2Outlined} from "@mui/icons-material";

const menuList = [
    {id: 1, name: 'Home', link: '/', icon: <HomeIcon/>},
    {id: 2, name: 'About', link: '/about', icon: <InfoIcon/>},
    {id: 3, name: 'Email Save', link: '/email', icon: <MailIcon/>},
    {id: 4, name: 'Web Excel', link: '/webexcel', icon: <GridOnIcon/>},
    {id: 5, name: 'Email Save Adv(서치 독립 컴포넌트화)', link: '/emailAdv', icon: <InboxIcon/>},
    {id: 6, name: 'Immer 사용해보기', link: '/withimmer', icon: <InboxIcon/>},
    {id: 7, name: '뉴스 뷰어', link: '/newsviewer', icon: <Feed/>},
    {id: 8, name: 'Context API', link: '/context', icon: <Inventory2Outlined/>},
];
const drawerWidth = 240;

const openedMixin = (theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
});

const closedMixin = (theme) => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
        width: `calc(${theme.spacing(8)} + 1px)`,
    },
});

const DrawerHeader = styled('div')(({theme}) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({theme, open}) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const Drawer = styled(MuiDrawer, {shouldForwardProp: (prop) => prop !== 'open'})(
    ({theme, open}) => ({
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        ...(open && {
            ...openedMixin(theme),
            '& .MuiDrawer-paper': openedMixin(theme),
        }),
        ...(!open && {
            ...closedMixin(theme),
            '& .MuiDrawer-paper': closedMixin(theme),
        }),
    }),
);

const MenuBase = ({children}) => {
    const theme = useTheme();
    const [open, setOpen] = useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar position="fixed" open={open}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        sx={{
                            marginRight: 5,
                            ...(open && {display: 'none'}),
                        }}
                    >
                        <MenuIcon/>
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        리액트 연습 모음
                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer variant="permanent" open={open}>
                <DrawerHeader>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'rtl' ? <ChevronRightIcon/> : <ChevronLeftIcon/>}
                    </IconButton>
                </DrawerHeader>
                <Divider/>
                <List>
                    {menuList.map((item, index) => (
                        <ListItem key={item.id} component={Link} to={item.link}>
                            <ListItemIcon>
                                {item.icon}
                            </ListItemIcon>
                            <ListItemText primary={item.name}/>
                        </ListItem>
                    ))}
                    {/*}
                    <ListItem key={'Email Save'} disablePadding sx={{ display: 'block' }}>
                        <ListItemButton to={'/webexcel'}
                                        sx={{minHeight: 48, justifyContent: open? 'initial' : 'center', px: 2.5,}}>
                            <ListItemIcon sx={{minWidth: 0, mr: open? 3 : 'auto', justifyContent: 'center'}}>
                                <MailIcon />
                            </ListItemIcon>
                            <ListItemText primary={'Email Save'} sx={{ opacity: open ? 1 : 0 }}/>
                        </ListItemButton>
                    </ListItem>
                    */}
                </List>
                <Divider/>
            </Drawer>
            <Box component="main" sx={{flexGrow: 1, p: 3}}>
                <DrawerHeader />
                {children}
            </Box>
        </Box>
    );
}

export default MenuBase;