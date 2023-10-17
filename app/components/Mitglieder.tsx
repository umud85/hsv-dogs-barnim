"use client";

import Box from "@mui/material/Box";
import MitgliederCard from "@/app/components/MitgliederCard";

const imgUrl = "https://fakeimg.pl/250x300";

function Mitglieder() {
  return (
    <Box sx={{
      display: "flex",
      flexWrap: "wrap",
      gap: "1em"
    }}>
      {/* <MitgliederCard name="Peter" imgUrl={imgUrl} />
      <MitgliederCard name="Johnny" imgUrl={imgUrl} />
      <MitgliederCard name="Jimmy" imgUrl={imgUrl} />
      <MitgliederCard name="Jenny" imgUrl={imgUrl} /> */}
    </Box>
  )
}

export default Mitglieder;