import { Box, Grid } from "@chakra-ui/react";

import axiosInstance from "../../shared/axiosInstance";
import MealItem from "../../components/Meals/MealItem";
import MyHeading from "../../shared/UI/MyHeading";

function AreaPage({ area, meals }) {
  return (
    <Box>
      <MyHeading>{area} Meals</MyHeading>

      <Grid
        gridTemplateColumns='1fr 1fr 1fr'
        justifyItems='center'
        rowGap='40px'
        columnGap='16px'
      >
        {meals.map((item) => (
          <MealItem key={item.id} meal={item} />
        ))}
      </Grid>
    </Box>
  );
}

export default AreaPage;

export async function getStaticProps({ params }) {
  const { area } = params;

  const { data } = await axiosInstance.get(`filter.php?a=${area}`);
  const meals = data.meals.map((item) => {
    return {
      title: item.strMeal,
      image: item.strMealThumb,
      id: item.idMeal,
      price: Number(item.idMeal.slice(0, 2)),
    };
  });

  return {
    props: {
      meals,
      area,
    },
  };
}
export async function getStaticPaths() {
  const { data } = await axiosInstance.get("/list.php?a=list");

  const paths = data.meals.map((item) => {
    return { params: { area: item.strArea } };
  });

  return {
    paths,
    fallback: false,
  };
}
