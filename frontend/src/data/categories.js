// import EcoIcon from '@mui/icons-material/Eco';
import SolarPowerIcon from '@mui/icons-material/SolarPower';
import RecyclingIcon from '@mui/icons-material/Recycling';
import WaterDropIcon from '@mui/icons-material/WaterDrop';
import SevereColdIcon from '@mui/icons-material/SevereCold';
import TsunamiIcon from '@mui/icons-material/Tsunami';
import Co2Icon from '@mui/icons-material/Co2';
import NaturePeopleIcon from '@mui/icons-material/NaturePeople';
import EmojiNatureIcon from '@mui/icons-material/EmojiNature';

export const categories = [
  { id: 1, title: 'Climate Change', icon: <SevereColdIcon fontSize="large" />, path: '/quiz/climate-change' },
  { id: 2, title: 'Recycling', icon: <RecyclingIcon fontSize="large" />, path: '/quiz/recycling' },
  { id: 3, title: 'Renewable Energy', icon: <SolarPowerIcon fontSize="large" />, path: '/quiz/renewable-energy' },
  { id: 4, title: 'Water Conservation', icon: <WaterDropIcon fontSize="large" />, path: '/quiz/water-conservation' },
  { id: 5, title: 'Ocean', icon: <TsunamiIcon fontSize="large" />, path: '/quiz/ocean' },
  { id: 6, title: 'Carbon Footprint', icon: <Co2Icon fontSize="large" />, path: '/quiz/carbon-footprint' },
  { id: 7, title: 'Environment', icon: <NaturePeopleIcon fontSize="large" />, path: '/quiz/environment' },
  { id: 8, title: 'Animals', icon: <EmojiNatureIcon fontSize="large" />, path: '/quiz/animals' },
];
