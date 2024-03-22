import {createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'
import {Pizza, SearchPizzaParams} from './types'
import pickBy from 'lodash/pickBy'
import identity from 'lodash/identity'


export const fetchPizzas = createAsyncThunk<Pizza[], SearchPizzaParams>(
    'pizza/fetchPizzasStatus',
    async (params) => {
        const {sortBy, order, category, search, currentPage} = params;
        const {data} = await axios<Pizza[]>(`https://628aac3f667aea3a3e2185c0.mockapi.io/items`, {
            params: pickBy(
                {
                    page: currentPage,
                    limit: 4,
                    category,
                    sortBy,
                    order,
                    search
                },
                identity,
            ),
        });
        return data
    }
);
