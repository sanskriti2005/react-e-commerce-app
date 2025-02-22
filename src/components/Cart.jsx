import { removeFromCart } from "../redux/action";
import { VStack, HStack, Heading, Image, Text, Button } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const Cart = () => {
  const { cart } = useSelector((state) => state.cart);
  const [cartDisplay, setCartDisplay] = useState([]);

  useEffect(() => {
    
  }, [cart])
  const dispatch = useDispatch();
  return (
    <div>
      <VStack margin={"auto"}>
        {cart.length > 0 ? (
          cart.map((item) => {
            return (
              <HStack
                key={item.id}
                border={"1px solid white"}
                padding={3}
                maxW={"300px"}
                borderRadius={"5px"}
              >
                <Image
                  src={item.image}
                  height={20}
                  width={20}
                  borderRadius={"5px"}
                />
                <VStack>
                  <Heading>{item.title}</Heading>
                  <Text>${item.price}</Text>
                  <Button onClick={() => dispatch(removeFromCart(item.id))}>
                    Remove from Cart
                  </Button>
                </VStack>
              </HStack>
            );
          })
        ) : (
          <Heading>No items in your cart</Heading>
        )}
      </VStack>
    </div>
  );
};

export default Cart;
