import React from "react";
import { Link, Flex, HStack, Box } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const {cart} = useSelector(state => state.cart);
  return (
    <Flex justifyContent={"space-between"} padding={8} fontSize={25} fontWeight={'bold'}>
      <Box>My Store</Box>
      <HStack gap={8}>
        <Link as={RouterLink} to="/">
          Products
        </Link>
        <Link as={RouterLink} to="/cart">
          Cart
          <Box background={'white'} color={'black'} borderRadius={'10px'}>{cart.length > 0 && cart.length}</Box>
        </Link>
      </HStack>
    </Flex>
  );
};

export default Navbar;
