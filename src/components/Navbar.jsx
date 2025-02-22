import React from "react";
import { Link, Flex, HStack, Box } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Navbar = () => {
  return (
    <Flex justifyContent={"space-between"} padding={8} fontSize={25} fontWeight={'bold'}>
      <Box>My Store</Box>
      <HStack gap={8}>
        <Link as={RouterLink} to="/">
          Products
        </Link>
        <Link as={RouterLink} to="/cart">
          Cart
        </Link>
      </HStack>
    </Flex>
  );
};

export default Navbar;
