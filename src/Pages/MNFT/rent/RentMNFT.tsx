import { Box, Grid, Stack, Button } from '@mui/material';
import { Image } from '../../../Components/image/Image';
import { Input } from './../../../Components/input/Input';
export const RentMNFT = () => {
    return (
        <Stack height="calc(100% - 64px)" direction="row" spacing={2} justifyContent="center" alignItems="center">
            <Box>
                <Image width={500} height={500} />
            </Box>
            <Box width="50% ">
                <Grid container spacing={2} component="form">
                    <Grid item xs={12}>
                        <Input
                            label="Start"
                            name="name"

                            placeholder="Name of composition"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Input
                            label="End"
                            name="description"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Input
                            label="Price of k ad"
                            name="cost"
                            type="number"

                            placeholder="1.1 ETH"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Stack spacing={2} direction="row">
                            <Button variant="contained">Publish</Button>
                            {/* <Button variant="contained" onClick={mintNFT}>Publish original</Button> */}
                            <Button>Save draft</Button>
                            {/* <Button onClick={Mint}>Mint</Button>
                                <Button onClick={CreateMNft}>create M-Nft</Button> */}
                        </Stack>
                    </Grid>
                </Grid>
            </Box>
        </Stack>
    );
}