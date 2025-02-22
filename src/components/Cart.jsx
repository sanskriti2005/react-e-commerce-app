import { removeFromCart, updateQuantity } from "../redux/action";
import {
  VStack,
  HStack,
  Heading,
  Image,
  Text,
  Button,
  Input,
} from "@chakra-ui/react";
import {
  NumberInputField,
  NumberInputLabel,
  NumberInputRoot,
} from "./ui/number-input";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const Cart = () => {
  const { cart } = useSelector((state) => state.cart);
  const [cartDisplay, setCartDisplay] = useState([]);

  useEffect(() => {}, [cart]);

  const dispatch = useDispatch();

  const handleChangeInQuantity = (item, quantity) => {
    console.log(quantity)
    dispatch(updateQuantity(item, quantity))
  }
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
                  <input type="number" value={item.quantity} onChange={(e) => handleChangeInQuantity(item, e.target.value)}/>
                  {/* <NumberInputRoot defaultValue={item.quantity} >
                    <NumberInputField />
                  </NumberInputRoot> */}

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
