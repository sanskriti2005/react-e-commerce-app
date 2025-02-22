import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../redux/action";
import React, { useEffect } from "react";
import { Grid, GridItem, Text, Image, HStack, Button } from "@chakra-ui/react";

const ProductList = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.products);
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  const handleAddToCart = (productObj) => {
    console.log(productObj)
    const cart = JSON.parse(localStorage.getItem('cart'));
    let localStorageCart;
    if (cart == null){
      localStorageCart = [{...productObj}]
      localStorage.setItem('cart',JSON.stringify(localStorageCart))
    } else {
      localStorageCart = [...cart, {...productObj}]
      localStorage.setItem('cart', JSON.stringify(localStorageCart))
    }
  }
  return (
    <div>
      <Grid
        templateColumns={"repeat(auto-fit, minmax(300px, 1fr))"}
        width={"100%"}
        gap={6}
      >
        {products.length > 0 &&
          products.map((product) => {
            return (
                <GridItem
                  key={product.id}
                  width={"300px"}
                  padding={6}
                  borderRadius={"5px"}
                  background={"gray.100"}
                  color={"black"}
                  textAlign={"center"}
                >
                  <Image
                    src={product.image}
                    width={"100%"}
                    aspectRatio={3 / 3}
                    borderRadius={"5px"}
                  />
                  <Text>{product.title}</Text>
                  <HStack justify={'space-around'} alignSelf={'flex-end'}>
                    <Text>${product.price}</Text>
                    <Button background={'black'} color={'white'} onClick={() => handleAddToCart(product)}>Add to Cart</Button>
                  </HStack>
                </GridItem>
            );
          })}
      </Grid>
    </div>
  );
};

export default ProductList;
