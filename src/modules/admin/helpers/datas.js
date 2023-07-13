import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import CollectionsBookmarkIcon from '@mui/icons-material/CollectionsBookmark';
import CollectionsIcon from '@mui/icons-material/Collections';
import BarChartIcon from '@mui/icons-material/BarChart';
import PersonIcon from '@mui/icons-material/Person';

export const dataMenu = [
    {
        title: 'Usuarios',
        icon: PersonIcon,
        path: '/usuarios'
    },
    {
        title: 'Cursos',
        icon: CollectionsBookmarkIcon,
        path: '/cursos'
    },
    {
        title: 'Eventos',
        icon: CollectionsIcon,
        path: '/eventos' 
    },
    {
        title: 'Normativas',
        icon: AccountBalanceIcon,
        path: '/normativas' 
    },
    {
        title: 'Simred',
        icon: BarChartIcon,
        path: '/simred' 
    }
]