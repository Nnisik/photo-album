import { create } from "zustand";
import {IGalleryCardProps} from "../types/IGalleryCardProps.ts";

interface IGalleryState {
    items: IGalleryCardProps[];

    get:()=>void;
    empty:()=>void;
};

export const useGalleryStore = create<IGalleryState>((set) => {
    return {
        items: [],

        get: async () => {
            try {
                const res = await fetch('http://localhost:3000/posts');

                if (!res.ok) {
                    throw new Error('Server fetch error');
                }
                const data:IGalleryCardProps[] = await res.json();
                const elems:IGalleryCardProps[] = [];

                data.forEach((elem) => {
                    elems.push(elem);
                })
                set({
                    items: elems
                });
            } catch (error) {
                console.error(error);
            }
        },

        empty: () => {
            set({
                items: []
            });
        }
    };
});
