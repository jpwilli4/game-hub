import { useQuery } from '@tanstack/react-query';
import APIClient from '@/services/api-client';
import genres from '@/data/genres';
import ms from 'ms';
import type Genre from '../entities/Genre';

const apiClient = new APIClient<Genre>('/genres');

const useGenres = () => useQuery({
    queryKey: ['genres'],
    queryFn: apiClient.getAll,
    staleTime: ms('24'), //24 hours
    initialData: genres
})

// const useGenres = () => ({data: genres, isLoading: false, error: null});//useData<Genre>("/genres");

export default useGenres;