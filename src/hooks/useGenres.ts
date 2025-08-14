// import genres from '../data/genres';
import { useQuery } from '@tanstack/react-query';
import { type FetchResponse } from '../services/api-client';
import apiClient from '@/services/api-client';
import genres from '@/data/genres';

export interface Genre {
    id: number,
    name: string,
    image_background: string
}

const useGenres = () => useQuery<Genre[]>({
    queryKey: ['genres'],
    queryFn: () => apiClient.get<FetchResponse<Genre>>('/genres').then(res => res.data.results),
    staleTime: 24 * 60 * 60 * 1000, //24 hours
    initialData: genres
})

// const useGenres = () => ({data: genres, isLoading: false, error: null});//useData<Genre>("/genres");

export default useGenres;