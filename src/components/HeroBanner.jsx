import { Box, Button, Stack, Typography } from "@mui/material";

import HeroBannerImage from "../assets/images/go-fitness.jpg";

const HeroBanner = () => {
  return (
    <Box
      sx={{ mt: { lg: "212px", xs: "70px" }, ml: { sm: "50px" } }}
      position="relative"
      p="20px"
    >
      <Typography className="gradient-text" fontWeight="600" fontSize="50px">
        Go Fitness
      </Typography>
      <Typography
        fontWeight={700}
        sx={{ fontSize: { lg: "44px", xs: "40px" } }}
        mb="23px"
        mt="30px"
        className="text-white"
      >
        STOP WISHING <br />
        START DOING
      </Typography>
      <Typography
        fontSize="22px"
        fontFamily="Alegreya"
        lineHeight="35px"
        className="text-white"
      >
        The body achieves what the mind believes
      </Typography>
      <Stack>
        <a
          href="#exercises"
          className="relative inline-flex items-center justify-center px-6 py-3 overflow-hidden font-bold hover:text-black text-white rounded-md shadow-2xl group w-[200px] mt-8"
        >
          <span className="absolute inset-0 w-full h-full transition duration-300 ease-out opacity-0 bg-gradient-to-br from-blue-500 to-white group-hover:opacity-100"></span>
          <span className="absolute top-0 left-0 w-full bg-gradient-to-b from-white to-transparent opacity-5 h-1/3"></span>
          <span className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-white to-transparent opacity-5"></span>
          <span className="absolute bottom-0 left-0 w-4 h-full bg-gradient-to-r from-white to-transparent opacity-5"></span>
          <span className="absolute bottom-0 right-0 w-4 h-full bg-gradient-to-l from-white to-transparent opacity-5"></span>
          <span className="absolute inset-0 w-full h-full border border-white rounded-md opacity-10"></span>
          <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-56 group-hover:h-56 opacity-5"></span>
          <span className="relative">Explore Exercises</span>
        </a>
      </Stack>
      <Typography
        className="text-blue-100"
        fontWeight={600}
        sx={{
          opacity: "0.2",
          display: { lg: "block", xs: "none" },
          fontSize: { xs: "90px", xl: "150px" },
        }}
        my="80px"
      >
        Exercise
      </Typography>
      <img
        src={HeroBannerImage}
        alt="hero-banner"
        className="hero-banner-img rounded-lg"
      />
    </Box>
  );
};

export default HeroBanner;
