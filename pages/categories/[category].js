import { Box, Grid } from "@chakra-ui/react";

import MyHeading from "../../shared/UI/MyHeading";
import axiosInstance from "../../shared/axiosInstance";
import MealItem from "../../components/Meals/MealItem";

function CategoryPage(props) {
  const { category, meals } = props;

  return (
    <Box>
      <MyHeading>{category} Meals</MyHeading>

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

export default CategoryPage;

export async function getStaticProps({ params }) {
  const { category } = params;

  const { data } = await axiosInstance.get(`/filter.php?c=${category}`);

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
      category,
      meals,
    },
  };
}

export async function getStaticPaths() {
  const { data } = await axiosInstance.get("/list.php?c=list");
  const paths = data.meals.map((item) => {
    return { params: { category: item.strCategory } };
  });

  return {
    paths,
    fallback: false,
  };
}
