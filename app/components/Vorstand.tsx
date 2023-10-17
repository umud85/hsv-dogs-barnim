"use client";

import Box from "@mui/material/Box";
import VorstandCard from "@/app/components/VorstandCard";

const imgUrl = "https://fakeimg.pl/250x300";

function Vorstand() {
  return (
    <Box sx={{
      display: "flex",
      flexWrap: "wrap",
      gap: "1em"
    }}>
      {/* <VorstandCard name="Peter" imgUrl={imgUrl} />
      <VorstandCard name="Peter" imgUrl={imgUrl} />
      <VorstandCard name="Peter" imgUrl={imgUrl} />
      <VorstandCard name="Peter" imgUrl={imgUrl} /> */}
    </Box>
  )
}

export default Vorstand;