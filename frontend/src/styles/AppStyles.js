// AppStyles.js
export const styles = {
    sidebarIconButton: {
      display: { xs: 'block', md: 'none' },
      position: 'absolute',
      top: 16,
      left: 16,
      zIndex: 1300,
    },
    sidebarPermanentDrawer: {
      display: { xs: 'none', md: 'block' },
      width: 240,
      flexShrink: 0,
      '& .MuiDrawer-paper': {
        width: 240,
        boxSizing: 'border-box',
        backgroundColor: '#333', // Optional: Set sidebar background color
        color: '#fff',
      },
    },
    sidebarTemporaryDrawer: {
      display: { xs: 'block', md: 'none' },
      '& .MuiDrawer-paper': {
        width: 240,
        boxSizing: 'border-box',
        backgroundColor: '#333', // Optional: Set sidebar background color
        color: '#fff',
      },
    },
    mainContent: {
      flexGrow: 1,
      p: 3,
      ml: { md: '0px' },
    },
  };
  