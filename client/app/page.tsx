import { CurrentUser } from "@/CurrentUser";
import { Stack, Typography } from "@mui/material";

export default function Home() {
    return (
    <Stack>
      <Typography>Index</Typography>
      <CurrentUser/>
    </Stack>
  );
}
