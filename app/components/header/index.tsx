import Logo from "@/constants/Logo";
import { Box, Flex, Group, Image, Text, UnstyledButton } from "@mantine/core";
import clasess from "/app/page.module.css";

export default function Header() {
  return (
    <>
      <Box px="9rem" py="3rem">
        <Group align="center" justify="space-between">
          <Flex align="center" gap="sm">
            <Image src={Logo.AppLogo}></Image>
            <Text fz={24} fw="bold" c="#233348">
              Trafalgar
            </Text>
          </Flex>
          <Flex align="center" gap="3rem">
            <UnstyledButton className={clasess.headbtn}>Home</UnstyledButton>
            <UnstyledButton className={clasess.headbtn}>
              Find a doctor
            </UnstyledButton>
            <UnstyledButton className={clasess.headbtn}>Apps</UnstyledButton>
            <UnstyledButton className={clasess.headbtn}>
              Testimonials
            </UnstyledButton>
            <UnstyledButton className={clasess.headbtn}>
              About us
            </UnstyledButton>
          </Flex>
        </Group>
      </Box>
    </>
  );
}
