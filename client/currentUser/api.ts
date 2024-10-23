import { cookies, headers } from "next/headers";

export const getCurrentUser = async (): Promise => {
    const session = cookies().get("session");
    const host = headers().get("Host");

    try {
        const response = await fetch(`http://ingress-nginx-controller.ingress-nginx.svc.cluster.local/api/users/currentuser`, {
            headers: {
                Host: host,
                Cookie: `session=${session?.value}`,
            },
        });

        if (response.ok) {
            const res = await response.json();
            console.log(res);
            return res;
        }
    } catch (e) {
        throw e.response?.data?.errors;
    }
}
