"use client";
import Illustration from "@/constants/Illustration";
import { Box, Grid, Stack, Button, Image, Text, Divider } from "@mantine/core";
import { IconArrowDown } from "@tabler/icons-react";
import clasess from "/app/page.module.css";

export default function DownloadAppSection() {
  return (
    <>
      <Box px="9rem" mt="12rem">
        <Grid>
          <Grid.Col span={6}>
            <Stack pl="4rem" gap="xl">
              <Text fz={36} fw={500} c="black" style={{ lineHeight: 1.2 }}>
                Download our <br />
                mobile apps
              </Text>
              <Divider size="sm" w="10%" color="black" />
              <Text fz={18} fw="normal" c="#7D7987">
                Our dedicated patient engagement app and <br />
                web portal allow you to access information <br />
                instantaneously (no tedeous form, long calls, <br />
                or administrative hassle) and securely
              </Text>
              <Button
                className={clasess.btn1}
                rightSection={<IconArrowDown size={18} />}
              >
                Download
              </Button>
            </Stack>
          </Grid.Col>
          <Grid.Col span={6}>
            <Image src={Illustration.DownloadAppIllustration} />
          </Grid.Col>
        </Grid>
      </Box>
    </>
  );
}
