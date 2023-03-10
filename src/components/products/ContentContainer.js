import React from "react";
import { Stack, Typography, Box, styled } from "@mui/material";

const HeadingWrappper = styled(Typography)`
  color: rgb(248, 159, 90);
  font-size: 0.8rem;
  font-weight: 600;
`;

const ContentWrapper = styled(Box)`
  background-color: hsl(223, 64%, 98%);
  padding: 4px;
  width: max-content;
  border-radius: 4px;
  display: flex;
  justify-content: start;
`;

const ContentContainer = ({
  name,
  price,
  description,
  category,
  brand,
  countInStock,
  numReviews,
}) => {
  return (
    <Stack spacing={2} p={2}>
      <HeadingWrappper
        fontSize={{ xs: "0.7rem", sm: "0.9rem", md: "1rem" }}
        variant="subtitle2"
      >
        {category}
      </HeadingWrappper>
      <Typography
        fontSize={{ xs: "0.8rem", sm: "0.9rem", md: "1rem" }}
        variant="h6"
        fontWeight={600}
        color={"text.primary"}
      >
        {name}
      </Typography>
      <Typography
        fontSize={{ xs: "0.7rem", sm: "0.8rem", md: "0.9rem" }}
        color={"text.secondary"}
      >
        {description}
      </Typography>
      <ContentWrapper>
        <Typography
          fontSize={{ xs: "0.8rem", sm: "1rem", md: "1.1rem" }}
          variant="h5"
          color={"orange"}
          fontWeight={600}
        >
          ${price}
        </Typography>
      </ContentWrapper>
      {countInStock == 0 ? (
        <Typography variant="body2" color={"text.secondary"}>
          Does not Exist
        </Typography>
      ) : (
        <Typography
          fontSize={{ xs: "0.7rem", sm: "1rem", md: "1rem" }}
          variant="body2"
        >
          Qunatity: {countInStock}
        </Typography>
      )}
      <ContentWrapper>
        <Typography
          fontSize={{ xs: "0.8rem", sm: "1rem", md: "1.1rem" }}
          variant="body1"
          color={"text.secondary"}
        >
          Brand: {brand}
        </Typography>
      </ContentWrapper>
      {countInStock == 0 ? (
        <Typography variant="body2" color={"text.secondary"}>
          Does not Exist
        </Typography>
      ) : (
        <Typography
          fontSize={{ xs: "0.7rem", sm: "1rem", md: "1rem" }}
          variant="body2"
        >
          Qunatity: {countInStock}
        </Typography>
      )}
      <ContentWrapper>
        <Typography
          fontSize={{ xs: "0.8rem", sm: "1rem", md: "1rem" }}
          variant="body1"
        >
          Number of Reviews: {numReviews}
        </Typography>
      </ContentWrapper>
    </Stack>
  );
};

export default ContentContainer;
