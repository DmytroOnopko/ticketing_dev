export const getCurrentUser = async (): Promise => {
    try {
        const response = await fetch(`http://ingress-nginx.ingress-nginx.svc.cluster.local/api/users/currentuser`, {
            headers: {
                Host: 'ticketing.dev'
            }
        });

        return await response.json();
    } catch (e) {
        throw e.response?.data?.errors;
    }
}
