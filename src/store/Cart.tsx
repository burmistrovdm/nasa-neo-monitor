'use client';
import { IAsteroid } from '@/models/Asteroid';
import { createContext, useContext, useState, Dispatch, SetStateAction, ReactNode } from 'react';

const CartContext = createContext<[IAsteroid[], Dispatch<SetStateAction<IAsteroid[]>>]>([[], () => {}]);

export function CartContextProvider({ children }: { children: ReactNode }) {
    const asteroidState = useState<IAsteroid[]>([]);
    return <CartContext.Provider value={asteroidState}>{children}</CartContext.Provider>;
}

export const useCartContext = () => useContext(CartContext);
