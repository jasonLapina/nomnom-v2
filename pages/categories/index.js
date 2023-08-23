import { Grid } from "@chakra-ui/react";
import axiosInstance from "../../shared/axiosInstance";
import CategoryItem from "../../components/Categories/CategoryItem";
import MyHeading from "../../shared/UI/MyHeading";

function Categories({ categories }) {
  return (
    <>
      <MyHeading>Categories</MyHeading>
      <Grid
        bgColor='bisque'
        borderRadius='20px'
        px='24px'
        py='12px'
        rowGap='40px'
        columnGap='16px'
        gridTemplateColumns='repeat(auto-fit,minmax(280px,1fr))'
        justifyContent='center'
      >
        {categories.map((item, i) => (
          <CategoryItem
            key={item.idCategory}
            bgColor={i % 2 ? "blackAlpha.700" : "whiteAlpha.700"}
            color={i % 2 ? "white" : "black"}
            category={item}
          />
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
