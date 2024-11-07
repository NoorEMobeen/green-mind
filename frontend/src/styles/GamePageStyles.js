// GamePageStyles.js
export const styles = {
    container: {
      display: 'flex',
      height: '100vh',
      backgroundColor: '#1e1e1e',
      color: '#fff',
    },
    sidebarDrawer: {
      variant: 'permanent',
    },
    mainContent: {
      flex: 1,
      p: 3,
    },
    backButton: {
      mb: 2,
    },
    gameTitle: {
      variant: 'h4',
      gutterBottom: true,
    },
    topicsContainer: {
      mt: 2,
    },
    topicsTitle: {
      variant: 'h6',
      gutterBottom: true,
    },
    topicBox: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#333',
      borderRadius: 2,
      p: 2,
      height: 120,
      cursor: 'pointer',
      '&:hover': { backgroundColor: '#444' },
    },
    topicImage: {
      width: 40,
      height: 40,
      marginBottom: 8,
    },
    difficultyContainer: {
      mt: 4,
    },
    difficultyButtons: {
      display: 'flex',
      gap: 2,
      justifyContent: 'center',
    },
    startButtonContainer: {
      mt: 4,
      textAlign: 'center',
    },
    startButton: {
      width: '50%',
    },
  };
  