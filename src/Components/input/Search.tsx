import { styled, InputBase } from "@mui/material";
import { Icon28SearchOutline } from "@vkontakte/icons";

const SearchContainer = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: theme.palette.background.paper,
    '&:hover': {
        backgroundColor: theme.palette.background.paper
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    top: 0,
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
}));

interface SearchProps {
    placeholder?: string,
}

const Search = (props: SearchProps) => {
    return (
        <SearchContainer>
            <StyledInputBase placeholder={props.placeholder} />
            <SearchIconWrapper>
                <Icon28SearchOutline fill="#FEFEFE" height={18} width={18} />
            </SearchIconWrapper>
        </SearchContainer>
    );
}

export default Search;