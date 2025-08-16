import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client"
import platforms from "@/data/platforms";
import ms from "ms";
import type { Platform } from "../entities/Platform";

const apiClient = new APIClient<Platform>('/platforms/lists/parents');
const usePlatforms = () => useQuery({
    queryKey: ['platforms'],
    queryFn: apiClient.getAll,
    staleTime: ms('24h'), //24 hours,
    initialData: platforms
    
})
// const usePlatforms = () => useData<Platform>("/platforms/lists/parents");

export default usePlatforms;