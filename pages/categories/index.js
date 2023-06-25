import { Box, Grid } from "@chakra-ui/react";
import axiosInstance from "../../shared/axiosInstance";
import CategoryItem from "../../components/Categories/CategoryItem";
import MyHeading from "../../shared/UI/MyHeading";

function Categories({ categories }) {
  return (
    <>
      <MyHeading>Categories</MyHeading>
      <Grid rowGap='40px' columnGap='16px' gridTemplateColumns='1fr 1fr 1fr'>
        {categories.map((item) => (
          <CategoryItem key={item.idCategory} category={item} />
        ))}
        {/* <CategoryItem category={categories[0]} /> */}
      </Grid>
    </>
  );
}

export default Categories;

export async function getStaticProps() {
  const { data } = await axiosInstance.get("/categories.php");

  return {
    props: { categories: data.categories },
  };
}
