import {useContext} from 'react';
import {ItemsContext} from "../context/ItemsContext.js";

export function useItemsContext() {
    const context = useContext(ItemsContext);

    if (!context)
        throw Error('useItemsContext must be used inside an ItemsContextProvider');

    return context;
}