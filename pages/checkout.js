import {
  Box,
  Grid,
  HStack,
  VStack,
  Text,
  Select,
  Input,
  Button,
  RadioGroup,
  Stack,
  Radio,
  useToast,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import MyHeading from "../shared/UI/MyHeading";
import { useEffect, useState } from "react";
import MyBtn from "../shared/UI/MyBtn";
import MyInput from "../shared/UI/MyInput";
import { clearCart } from "../store/cart";

function Checkout() {
  const cart = useSelector((state) => state.cart);

  const [showOtherDate, setShowOtherDate] = useState(false);
  const [showOtherTime, setShowOtherTime] = useState(false);

  const datesHandler = (e) => {
    if (e.target.value === "other") setShowOtherDate(true);
    else setShowOtherDate(false);
  };
  const timeHandler = (e) => {
    if (e.target.value === "other") setShowOtherTime(true);
    else setShowOtherTime(false);
  };

  const getTotal = () => {
    const itemPrices = cart.map((item) => item.price);
    return itemPrices.reduce((total, current) => total + current, 0);
  };

  const [day, setDay] = useState("Today");
  const [otherDay, setOtherDay] = useState("");
  const [otherTime, setOtherTime] = useState("");
  const [time, setTime] = useState("Now");
  const [address, setAddress] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedAddress = localStorage.getItem("address");
      if (savedAddress) setAddress(savedAddress);
    }
  }, []);

  const toast = useToast();

  const submitHandler = (e) => {
    e.preventDefault();

    if (!address.trim())
      return toast({
        title: "Put in your address.",
        status: "error",
        position: "top",
      });

    if (time === "other" && !otherTime.trim())
      return toast({
        title: "Specify time.",
        status: "error",
        position: "top",
      });
    if (day === "other" && !otherDay.trim())
      return toast({
        title: "Specify date.",
        status: "error",
        position: "top",
      });

    toast({
      title: "Got your order!",
      description: "Give us 10-20 min.",
      status: "success",
      position: "top",
    });

    dispatch(clearCart());
  };

  const saveAddressHandler = () => {
    if (!address.trim()) return;
    else {
      toast({
        title: "Address saved!",
        status: "success",
        position: "top",
      });
      localStorage.setItem("address", address);
    }
  };

  return (
    <Box>
      <MyHeading>Checkout</MyHeading>
      <Grid columnGap='24px' gridTemplateColumns='7fr 3fr'>
        <Box
          onSubmit={submitHandler}
          borderRadius='10px'
          px='16px'
          py='8px'
          boxShadow='4px 8px 8px RGBA(0,0,0,.24)'
          as='form'
        >
          <Box>
            <Text fontSize='24px' fontWeight='bold'>
              1. Delivery details
            </Text>

            <Box mt='24px'>
              <Text>Time:</Text>
              <Grid gridTemplateColumns='1fr 1fr' gap='24px'>
                <div>
                  <Select
                    _focus={{
                      borderColor: "salmon",
                      boxShadow: "1px 1px salmon",
                    }}
                    onChange={(e) => {
                      setDay(e.target.value);
                      datesHandler(e);
                    }}
                    placeholder='Today'
                    value={day}
                  >
                    <option value='option2'>Tomorrow</option>
                    <option value='other'>Other</option>
                  </Select>
                  {showOtherDate && (
                    <MyInput
                      value={otherDay}
                      onChange={(e) => setOtherDay(e.target.value)}
                      mt='16px'
                      placeholder='specify date'
                    />
                  )}
                </div>

                <div>
                  <Select
                    _focus={{
                      borderColor: "salmon",
                      boxShadow: "1px 1px salmon",
                    }}
                    onChange={(e) => {
                      setTime(e.target.value);
                      timeHandler(e);
                    }}
                    placeholder='Now'
                    value={time}
                  >
                    <option value='1hr'>in 1 hour</option>
                    <option value='2hr'>in 2 hours</option>
                    <option value='other'>Other</option>
                  </Select>
                  {showOtherTime && (
                    <MyInput
                      mt='16px'
                      value={otherTime}
                      onChange={(e) => setOtherTime(e.target.value)}
                      placeholder='specify time'
                    />
                  )}
                </div>
              </Grid>
            </Box>
            <Box mt='16px'>
              <Text>Address:</Text>
              <MyInput
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                placeholder='delivery address'
              />
              <Button
                onClick={saveAddressHandler}
                borderColor='salmon'
                variant='outline'
                mt='8px'
              >
                Save address
              </Button>
            </Box>
          </Box>

          <Box>
            <Text mt='40px' mb='24px' fontSize='24px' fontWeight='bold'>
              2. Payment
            </Text>
            <RadioGroup mb='40px' defaultValue='2'>
              <Stack spacing={5} direction='row'>
                <Radio colorScheme='green' value='1'>
                  Cash
                </Radio>
                <Radio colorScheme='blue' value='2'>
                  G-Cash
                </Radio>
                <Radio colorScheme='red' value='3'>
                  Your soul 💀
                </Radio>
              </Stack>
            </RadioGroup>
          </Box>
          <MyBtn
            type='submit'
            isDisabled={cart.length === 0}
            bgColor='salmon'
            w='100%'
          >
            Place Order
          </MyBtn>
        </Box>

        <Box
          px='16px'
          py='8px'
          borderRadius='10px'
          boxShadow='4px 8px 8px RGBA(0,0,0,.24)'
          textAlign='center'
        >
          <Text fontSize='18px' mb='16px'>
            Order summary
          </Text>
          <VStack
            alignItems='start'
            borderBottom='2px solid gray'
            paddingBottom='8px'
          >
            {cart.map((item) => (
              <Box w='100%' key={item.id}>
                <HStack justifyContent='space-between'>
                  <HStack>
                    <Text>{item.quantity}x </Text>
                    <Text>{item.title}</Text>
                  </HStack>
                  <Text>${item.price}</Text>
                </HStack>
              </Box>
            ))}
          </VStack>
          <HStack
            justifyContent='space-between'
            fontSize='20px'
            fontWeight='bold'
            mt='16px'
          >
            <Text>Total:</Text>
            <Text>${getTotal()}</Text>
          </HStack>
        </Box>
      </Grid>
    </Box>
  );
}

export default Checkout;
