import { Box, Grid, Stack, Button } from "@mui/material";
import { useRef, useState } from "react";
import { ImageEditor } from "../../../Components/image-editor/imageEditor";
import { Image } from "../../../Components/image/Image";
import { Input } from "./../../../Components/input/Input";
export const RentMNFT = () => {
  const ADVImageRef = useRef<any>();
  const [ADVImageUrl, setADVImageUrl] = useState();
  return (
    <Stack
      height="calc(100% - 64px)"
      direction="row"
      spacing={2}
      justifyContent="center"
      alignItems="center"
    >
      <Box>
        <ImageEditor
          size={500}
          image={
            "https://ipfs.io/ipfs/QmNygunX5xsUsLxmai3owWNoTJAU3BrMUeAxtd8TJm8WVm"
          }
          ADVImageUrl={ADVImageUrl}
        />
      </Box>
      <Box width="25% ">
        <Grid container spacing={2} component="form">
          <Grid item xs={12}>
            <Stack spacing={1} direction="row">
              <input
                type="file"
                id="ADV"
                ref={ADVImageRef}
                style={{ display: "none" }}
                onChange={(event: any) => {
                  let reader = new FileReader();
                  reader.onload = (e: any) => {
                    setADVImageUrl(e.target.result);
                  };
                  reader.readAsDataURL(event.target.files[0]);
                }}
              />
              <Image width={100} height={100} onClick={() => {
                  ADVImageRef.current.click();
              }} />
              <Image width={100} height={100} />
            </Stack>
          </Grid>
          <Grid item xs={12}>
            <Input label="Start" name="name" type="datetime-local" focused />
          </Grid>
          <Grid item xs={12}>
            <Input
              label="End"
              type="datetime-local"
              name="description"
              focused
            />
          </Grid>
          <Grid item xs={12}>
            <Input
              label="Price of ad"
              name="cost"
              type="number"
              focused
              placeholder="1.1 ETH"
            />
          </Grid>
          <Grid item xs={12}>
            <Stack spacing={2} direction="row">
              <Button variant="contained">Apply</Button>
              {/* <Button variant="contained" onClick={mintNFT}>Publish original</Button> */}
              {/* <Button onClick={Mint}>Mint</Button>
                                <Button onClick={CreateMNft}>create M-Nft</Button> */}
            </Stack>
          </Grid>
        </Grid>
      </Box>
    </Stack>
  );
};
