import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { NETWORK_LABELS } from "../constants/network";
import { DEX_LABELS, NETWORK_DEXES, type Dex } from "../constants/dex";
import { SORT_OPTION_LABELS } from "../constants/sort";
import { CHECK_LABELS } from "../constants/checks";
import { FiltersSchema, type Filters } from "../constants/filter";

interface DataContextValue {
    filters: Filters,
    updateFilters: (update: Partial<Filters>) => void,
    clearFilters: () => void;

    results: any[] | null,
    loading: boolean,
    fetchResults: () => Promise<void>,

    availableDexes: Dex[],
    dexLabels: typeof DEX_LABELS,
    networkLabels: typeof NETWORK_LABELS,
    checkLabels: typeof CHECK_LABELS,
    sortOptionLabels: typeof SORT_OPTION_LABELS
}

const DEFAULT_FILTERS: Filters = FiltersSchema.parse({})

const DataContext = createContext<DataContextValue | null>(null)

export const useData = () => {
    const ctx = useContext(DataContext)
    if (!ctx) throw new Error("useData must be used within DataProvider")
    
    return ctx
}

export default function DataProvider({ children }: { children: React.ReactNode }) {
    const [filters, setFilters] = useState<Filters>(DEFAULT_FILTERS)
    const [results, setResults] = useState<any[] | null>(null)
    const [loading, setLoading] = useState<boolean>(false)

    const updateFilters = useCallback((update: Partial<Filters>) => {
        setFilters(prev => {
            const merged = { ...prev, ...update }
            return FiltersSchema.parse(merged)
        })
    }, [])

    const clearFilters = useCallback(() => setFilters(FiltersSchema.parse({})), [])

    const availableDexes = useMemo(() => {
        if (filters.networks.length !== 1) return [];
        
        const net = filters.networks[0]
        return Object.values(NETWORK_DEXES[net]) as Dex[]
    }, [filters.networks])

    // Auto-manage dexes based on networks selection
    // useEffect(() => {
    //     const nets = filters.networks;

    //     // 1) MULTIPLE networks selected → CLEAR dexes
    //     if (nets.length > 1) {
    //         if (filters.dexes.length !== 0) {
    //             setFilters(prev => FiltersSchema.parse({ ...prev, dexes: [] }));
    //         }
    //         return;
    //     }

    //     // 2) EXACTLY ONE network selected → SHOULD have all dexes selected

    //     // If dexes already match allDexes, do nothing
    //     const alreadyFull =
    //         filters.dexes.length === availableDexes.length &&
    //         filters.dexes.every(d => availableDexes.includes(d));

    //     if (!alreadyFull) {
    //         setFilters(prev =>
    //             FiltersSchema.parse({
    //                 ...prev,
    //                 dexes: availableDexes,
    //             })
    //         );
    //     }
    // }, [filters.networks]);

    const fetchResults = useCallback(async () => {
        setLoading(true);

        try {
        const payload = FiltersSchema.parse(filters); // double safe

        console.log("FILTER PAYLOAD →", payload);

        // call backend here:
        // const res = await fetch("/api/suggest", {...});
        // const data = await res.json();
        // setResults(data);

        await new Promise(r => setTimeout(r, 400)); // fake load
        setResults([]);

        } catch (err) {
        console.error("INVALID FILTERS:", err);
        }

        setLoading(false);
    }, [filters]);

    return (
        <DataContext.Provider
            value={{
                filters,
                updateFilters,
                clearFilters,
                results,
                loading,
                fetchResults,
                availableDexes,
                dexLabels: DEX_LABELS,
                networkLabels: NETWORK_LABELS,
                sortOptionLabels: SORT_OPTION_LABELS,
                checkLabels: CHECK_LABELS
            }}
        >
            {children}
        </DataContext.Provider>
    )
}