import APIClient from "@/services/api-client";
import { useQuery } from "@tanstack/react-query";
import type { Game } from "./useGames";

const apiClient = new APIClient<Game>('/games');

const useGame = (slug: string) => useQuery({
    queryKey: ['games', slug],
    queryFn: () => apiClient.get(slug)
})

export default useGame;