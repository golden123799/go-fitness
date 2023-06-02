import React from "react";
import { Link } from "react-router-dom";
import { Button, Stack, Typography } from "@mui/material";

const ExerciseCard = ({ exercise }) => (
  <Link className="exercise-card" to="#">
    <img src={exercise.gifUrl} alt={exercise.name} loading="lazy" />
    <Stack
      direction="row"
      useFlexGap
      flexWrap="wrap"
      alignItems="center"
      justifyContent="center"
    >
      <Button
        sx={{
          ml: "21px",
          color: "black",
          background: "#FFA9A9",
          fontSize: "14px",
          borderRadius: "20px",
          textTransform: "capitalize",
        }}
      >
        {exercise.bodyPart}
      </Button>
      <Button
        sx={{
          ml: "21px",
          color: "black",
          background: "#FCC757",
          fontSize: "14px",
          borderRadius: "20px",
          textTransform: "capitalize",
        }}
      >
        {exercise.target}
      </Button>
    </Stack>
    <Typography
      ml="21px"
      color="#000"
      fontWeight="bold"
      sx={{ fontSize: { lg: "24px", xs: "20px" } }}
      mt="11px"
      pb="10px"
      textTransform="capitalize"
      className="text-center"
    >
      {exercise.name}
    </Typography>
  </Link>
);

export default ExerciseCard;
