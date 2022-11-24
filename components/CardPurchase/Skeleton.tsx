import {
  Card,
  CardActions,
  CardContent,
  Skeleton,
  Typography,
} from "@mui/material";
import * as React from "react";

export function CardSkeletons({}) {
  return (
    <>
      {" "}
      {Array(5)
        .fill("")
        .map((_, index) => (
          <Card
            key={index}
            sx={{
              minHeight: { xs: "350px", sm: "350px", md: "350px", lg: "350px" },
              minWidth: { xs: "220px", sm: "220px", md: "250px", lg: "250px" },
              maxHeight: { xs: "350px", sm: "350px", md: "350px", lg: "350px" },
              maxWidth: { xs: "220px", sm: "220px", md: "250px", lg: "250px" },

              borderRadius: "15px 15px 0px 15px ",
              border: "solid 2px #F2F2F2",
              zIndex: "2",
              cursor: "help",
            }}
          >
            <Skeleton variant="rectangular" width={"100%"} height={140} />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                <Skeleton />
              </Typography>
              <Typography variant="body2" color="text.secondary">
                <Skeleton width="60%" />
              </Typography>
            </CardContent>
            <CardActions
              sx={{ display: "flex", justifyContent: "space-between" }}
            >
              <Skeleton width={"100px"} height="50px" />

              <Skeleton width={"50px"} height="50px" />
            </CardActions>
          </Card>
        ))}
    </>
  );
}

// ,
// ,
