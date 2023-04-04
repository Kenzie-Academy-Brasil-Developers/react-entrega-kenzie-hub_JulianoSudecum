import { z } from "zod";

export const formSchema = z.object({
    email: z.string().min(1, "O email é obrigatorio").email("Insira um email valido"),
    password: z.string().min(1, "A senha é obrigatoria"),
})