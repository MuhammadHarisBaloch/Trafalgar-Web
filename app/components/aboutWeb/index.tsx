"use client";
import Illustration from "@/constants/Illustration";
import { Box, Button, Divider, Grid, Image, Stack, Text } from "@mantine/core";
import clasess from "/app/page.module.css";

export default function AboutWeb() {
  return (
    <>
      <Box px="9rem" mt="12rem">
        <Grid>
          <Grid.Col span={6}>
            <Image src={Illustration.AboutWebIllustration} />
          </Grid.Col>
          <Grid.Col span={6}>
            <Stack pl="6rem" gap="xl">
              <Text fz={36} fw={500} c="black" style={{ lineHeight: 1.2 }}>
                Leading healthcare <br /> providers
              </Text>
              <Divider size="sm" w="10%" color="black" />
              <Text fz={18} fw="normal" c="#7D7987">
                Trafalgar provides progressive, and affordable <br />
                healthcare, accessible on mobile and online for <br /> everyone.
                To us, it’s not just work. We take pride <br />
                in the solutions we deliver
              </Text>
              <Button className={clasess.btn1}>Learn more</Button>
            </Stack>
          </Grid.Col>
        </Grid>
      </Box>
    </>
  );
}
