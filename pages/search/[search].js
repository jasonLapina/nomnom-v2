import { Box, Center, Heading } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useQuery } from "react-query";
import axiosInstance from "../../shared/axiosInstance";
import MealItem from "../../components/Meals/MealItem";
import AvailableMeals from "../../components/Meals/AvailableMeals";
function QueryPage() {
  const router = useRouter();
  const userQuery = router.query.search;

  const fetchMeals = async () => {
    const { data } = await axiosInstance.get(`search.php?s=${userQuery}`);
    return data;
  };

  const { data, isLoading, isError } = useQuery("meals", fetchMeals);

  if (isLoading || !data.meals)
    return (
      <Center maxW='600px' mx='auto'>
        <Heading>Fetching data...</Heading>
      </Center>
    );

  const fetchedMeals = data.meals.map((item) => ({
    id: item.idMeal,
    title: item.strMeal,
    image: item.strMealThumb,
    price: Number(item.idMeal.slice(0, 2)),
  }));

  return <AvailableMeals meals={fetchedMeals} />;
}

export default QueryPage;
