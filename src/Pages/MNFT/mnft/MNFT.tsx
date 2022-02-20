import { Box, Button, Typography, Stack } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import { CellUser } from "../../../Components/cell-user/CellUser";
import { Image } from "../../../Components/image/Image";
import { CardHistory } from "./../../../Components/card-history/CardHistory";

export const MNFT = () => {
  const { state } = useLocation();
  console.log(state);
  const nav = useNavigate();

  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "70%",
          justifyContent: "center",
        }}
      >
        <Image
          width="100%"
          height={400}
          src={`https://ipfs.io/ipfs/${(state as any).image?.split("//")[1]}`}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Box
            component="div"
            p={2}
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <div>
              <Stack direction="row" spacing={1} p={1}>
                <CellUser
                  title="Owner"
                  name={
                    (state as any).owner?.name
                      ? `@${(state as any).owner?.name}`
                      : (state as any).owner?.address
                  }
                  image="https://img.rarible.com/prod/image/upload/t_avatar_big/prod-users/0x0271e8197f31a493629baab075295b8e5fa33aad/avatar/QmYmAr3DjoDaozskiFD7g8YJ9sNd8JMmFdACfhFALNCm32"
                />
                {(state as any).sponsor && (
                  <CellUser
                    title="Sponsor"
                    name={
                      (state as any).sposnsor?.name
                        ? `@${(state as any).sposnsor?.name}`
                        : (state as any).sposnsor?.address
                    }
                    image="https://img.rarible.com/prod/image/upload/t_avatar_big/prod-users/0x0271e8197f31a493629baab075295b8e5fa33aad/avatar/QmYmAr3DjoDaozskiFD7g8YJ9sNd8JMmFdACfhFALNCm32"
                  />
                )}
              </Stack>
              <Box>
                <Typography p={1} variant="h2" color="text.primary">
                  {(state as any).name}
                </Typography>
                <Typography p={1} variant="body1" color="text.primary">
                  {(state as any).description}
                </Typography>
              </Box>
              <Stack direction="row" p={2} spacing={1}>
                <Button
                  size="large"
                  variant="contained"
                  onClick={() => nav("/rent/" + (state as any).address, { state: state })}
                  sx={{
                    backgroundColor: "#414144",
                    color: "text.primary",
                    fontWeight: 700,
                  }}
                >
                  Rent AD
                </Button>
                <Button size="large" color="secondary">
                  Buy for 4.4 ETH
                </Button>
                <Button
                  sx={{ backgroundColor: "#414144" }}
                  size="large"
                  color="secondary"
                  href={
                    state
                      ? `https://rinkeby.rarible.com/token/${
                          (state as any).address
                        }:0`
                      : "https://rinkeby.rarible.com"
                  }
                  target="_blank"
                >
                  Open on rarible.com
                </Button>
              </Stack>
            </div>
            <div>
              <CardHistory />
            </div>
          </Box>
        </div>
      </div>
    </Box>
  );
};
