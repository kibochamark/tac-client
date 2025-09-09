import { FormState, SignupFormSchema } from "../schema"


export async function signup(state: FormState, formData: FormData) {
    // Validate form fields
    const validatedFields = SignupFormSchema.safeParse({
        name: formData.get('name'),
        email: formData.get('email'),
        password: formData.get('password'),
    })

    // If any form fields are invalid, return early
    if (!validatedFields.success) {
        return {
            errors: {
                email: "Email already taken",
                password: ["Too short", "Must contain special character"],
                agreeToTerms: "You must agree before signing up",
            }
        }
    }

    // Call the provider or db to create a user...
}