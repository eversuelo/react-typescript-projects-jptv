import { CryptoSchema } from "../schema/crypto-schema";
import { z } from "zod";
export type Currency = z.infer<typeof CryptoSchema>;
