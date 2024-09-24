import Arrows from "@/constants/Arrows";
import Elements from "@/constants/Elements";
import Profiles from "@/constants/Profiles";
import {
  Box,
  Text,
  Image,
  Card,
  Stack,
  Flex,
  Group,
  Divider,
} from "@mantine/core";
import clasess from "/app/page.module.css";

export default function CustomerCard() {
  return (
    <>
      <Box px="9rem" py="10rem">
        <Stack>
          <Card className={clasess.customerCard}>
            <Stack align="center">
              <Group justify="flex-end" w="100%">
                <Image
                  w="auto"
                  h="5rem"
                  src={Elements.CustomerCardRectangleDots}
                ></Image>
              </Group>
              <Text mt="-4rem" fz={36} fw={500} c="white">
                What our customer are saying
              </Text>
              <Divider size="sm" w="10%" />
              <Group justify="space-between" w="82%" mt="xl">
                <Flex align="center" gap="lg">
                  <Image src={Profiles.Profile1}></Image>
                  <Stack gap={0}>
                    <Text fz={22} fw={500} c="white">
                      Edward Newgate
                    </Text>
                    <Text fz={18} fw="lighter" c="white">
                      Founder Circle
                    </Text>
                  </Stack>
                </Flex>
                <Text fz={19} fw="lighter" c="white">
                  "Our dedicated patient engagement app and <br />
                  web portal allow you to access information <br />
                  instantaneously (no tedeous from, long call,
                  <br /> or administrative hassle) and securely"
                </Text>
              </Group>
              <Group mt="-1rem" justify="flex-start" w="100%">
                <Image
                  w="auto"
                  h="5rem"
                  src={Elements.CustomerCardRectangleDots}
                ></Image>
              </Group>
            </Stack>
          </Card>
          <Group justify="center" w="100%" gap="5rem" pt="md">
            <Image src={Arrows.LeftArrow}></Image>
            <Image src={Elements.SliderDots}></Image>
            <Image src={Arrows.RightArrow}></Image>
          </Group>
        </Stack>
      </Box>
    </>
  );
}
