import { z } from "zod";

export const formSchema = z.object({
    email: z.string().min(1, "O email é obrigatorio").email("Insira um email valido"),
    password: z.string().min(6, "Insira uma senha com no minimo 6 caracteres"),
    name: z.string().min(1, "O nome é obrigatorio"),
    confirm: z.string().min(1, "É obrigatorio confirmar a senha"),
    bio: z.string().min(1, "A biografia é obrigatoria"),
    contact: z.string().min(1, "Uma forma de contato é obrigatoria"),
    course_module: z.string().min(1, "É obrigatorio informar um modulo")
}).refine(({password, confirm})=> confirm === password, {
    message: "As senhas não correspondem",
    path: ["confirm"]
})