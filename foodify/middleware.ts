export { default } from "next-auth/middleware";

export const config = {
    matcher: [
        "/favorites",
        "/myrecipes",
    ]
}

//inside matcher array put all routes which need to be protected