import Elements from "@/constants/Elements";
import Logo from "@/constants/Logo";
import { Box, Text, Image, Group, Stack, Flex } from "@mantine/core";

export default function Footer() {
  return (
    <>
      <Box mt="8rem">
        <Group justify="flex-end" px="4rem">
          <Image src={Elements.FooterUpperElement}></Image>
        </Group>
        <Box bg="#5A98F2">
          <Group px="6rem" justify="space-between" pt="6rem">
            <Stack>
              <Flex align="center" gap="sm">
                <Image src={Logo.AppWhiteLogo}></Image>
                <Text fz={24} fw="bold" c="white">
                  Trafalgar
                </Text>
              </Flex>
              <Text fz={18} fw="lighter" c="white">
                Trafalgar provides progressive, and affordable <br />{" "}
                healthcare, accessible on mobile and online
                <br /> for everyone
              </Text>
              <Text fz={16} fw="lighter" c="white">
                ©Trafalgar PTY LTD 2020. All rights reserved
              </Text>
            </Stack>
            <Stack>
              <Text fz={20} fw="bold" c="white">
                Company
              </Text>
              <Text fz={18} fw="lighter" c="white">
                About
              </Text>
              <Text fz={18} fw="lighter" c="white">
                Testimonials
              </Text>
              <Text fz={18} fw="lighter" c="white">
                Find a doctor
              </Text>
              <Text fz={18} fw="lighter" c="white">
                Apps
              </Text>
            </Stack>
            <Stack>
              <Text fz={20} fw="bold" c="white">
                Region
              </Text>
              <Text fz={18} fw="lighter" c="white">
                Indonesia
              </Text>
              <Text fz={18} fw="lighter" c="white">
                Singapore
              </Text>
              <Text fz={18} fw="lighter" c="white">
                HongKong
              </Text>
              <Text fz={18} fw="lighter" c="white">
                Canada
              </Text>
            </Stack>
            <Stack>
              <Text fz={20} fw="bold" c="white">
                Help
              </Text>
              <Text fz={18} fw="lighter" c="white">
                Help center
              </Text>
              <Text fz={18} fw="lighter" c="white">
                Contact support
              </Text>
              <Text fz={18} fw="lighter" c="white">
                Instructions
              </Text>
              <Text fz={18} fw="lighter" c="white">
                How it works
              </Text>
            </Stack>
          </Group>
          <Group px="sm" pb="sm" pt="lg" justify="flex-start">
            <Image src={Elements.FooterLowerElement}></Image>
          </Group>
        </Box>
      </Box>
    </>
  );
}
