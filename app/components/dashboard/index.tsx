"use client";
import Elements from "@/constants/Elements";
import Illustration from "@/constants/Illustration";
import { Box, Button, Grid, Image, Stack, Text } from "@mantine/core";
import clasess from "/app/page.module.css";

export default function Dashboard() {
  return (
    <>
      <Box>
        <Image h="auto" w="4.5rem" src={Elements.RectangleDots}></Image>
        <Box px="9rem">
          <Grid justify="start" gutter="4rem">
            <Grid.Col span={6}>
              <Stack pr="3rem" gap="xl">
                <Text fz={48} fw={500} c="black" style={{ lineHeight: 1 }}>
                  Virtual healthcare for you
                </Text>
                <Text fz={21} fw="normal" c="#7D7987">
                  Trafalgar provides progressive, and affordable healthcare,
                  accessible on mobile and online for everyone
                </Text>
                <Button className={clasess.dashbtn}>Consult today</Button>
              </Stack>
            </Grid.Col>
            <Grid.Col span={6} mt="-5rem">
              <Image src={Illustration.TrafalgarHeaderIllustration}></Image>
            </Grid.Col>
          </Grid>
        </Box>
      </Box>
    </>
  );
}
