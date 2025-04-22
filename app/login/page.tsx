import { Suspense } from "react";
import LoginForm from "../ui/login-form";

export default function Page() {
    return (
        <Suspense fallback={ <div>Loading login form</div> }>
            <LoginForm />
        </Suspense>
    )
}