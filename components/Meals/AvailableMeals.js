import { Grid } from "@chakra-ui/react";
import MealItem from "./MealItem";
function AvailableMeals({ meals }) {
  return (
    <Grid
      justifyContent='center'
      justifyItems='center'
      alignItems='center'
      alignContent='center'
      gridTemplateColumns='repeat(auto-fit, minmax(280px, 1fr))'
      columnGap='16px'
      rowGap='24px'
    >
      {meals.map((item) => (
        <MealItem key={item.id} meal={item} />
      ))}
    </Grid>
  );
}

export default AvailableMeals;
