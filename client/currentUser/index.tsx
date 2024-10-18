import { getCurrentUser } from "@/CurrentUser/api";

export const CurrentUser = async () => {
    const res = await getCurrentUser();
    return <div>CurrentUser</div>
};
