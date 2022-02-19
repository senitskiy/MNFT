import { buttonUnstyledClasses, TabPanelUnstyled, TabsListUnstyled, TabsUnstyled, TabUnstyled, tabUnstyledClasses } from "@mui/base";
import { styled } from "@mui/material";

const Tab = styled(TabUnstyled)(({ theme }) => (`
    color: ${theme.palette.text.primary};
    cursor: pointer;
    width: 100%;
    font-weight: bold;
    background-color: transparent;
    padding: 12px 16px;
    margin: 6px 6px;
    border: none;
    border-radius: 5px;
    display: flex;
    justify-content: center;
  
    &:hover {
      background-color: ${theme.palette.background.paper};;
    }
  
    &.${tabUnstyledClasses.selected} {
      background-color: ${theme.palette.background.paper};
      color: ${theme.palette.text.primary};
    }  
`
));
/* font-family: IBM Plex Sans, sans-serif; */

const TabsList = styled(TabsListUnstyled)(({ theme }) => ({
    backgroundColor: theme.palette.background.default,
    borderRadius: 8,
    marginBottom: 16,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'space-between',
}))

export default function TabsHistory() {
    return (
        <TabsUnstyled defaultValue={0}>
            <TabsList>
                <Tab>AD History</Tab>
                <Tab>Sell History</Tab>
            </TabsList>
        </TabsUnstyled>
    );
}