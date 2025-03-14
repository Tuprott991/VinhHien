import {AuthProviderButton, AuthProviders} from "@/types/AuthProviderButton";

const authProviderButtons: AuthProviderButton[] = [
    {
        title: "Dùng tài khoản Demo",
        icon: "/logo.png",
        provider: AuthProviders.DEMO
    },
    // {
    //     title: "Đăng nhập bằng Microsoft",
    //     icon: "/microsoft.png",
    //     provider: AuthProviders.MICROSOFT
    // },
    {
        title: "Đăng nhập bằng Google",
        icon: "/google.png",
        provider: AuthProviders.GOOGLE
    }
]

export default authProviderButtons;