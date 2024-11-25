import { z } from "zod";
const typeDiscover = z.array(
  z.object({
    title: z.string(),
    image: z.string(),
  })
);
