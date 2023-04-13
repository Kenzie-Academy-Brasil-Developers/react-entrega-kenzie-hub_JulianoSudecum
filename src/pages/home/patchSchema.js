import { z } from "zod";

export const patchSchema = z.object({
    title: z.string().min(1, "Obrigatorio informar o nome"),
    status: z.string().min(1, "É obrigatorio informar o nivel")
})