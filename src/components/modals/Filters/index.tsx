import type React from 'react'
import { useModal } from '../../../contexts/ModalContext'
import Field from '../../ui/Field'
import './styles.css'
import Dropdown from '../../ui/Dropdown'
import Options from '../../ui/Options'
import { useState } from 'react'
import { NETWORK_LABELS, NETWORKS, type Network } from '../../../constants/network'
import { dexLogo, networkLogo } from '../../../lib/cdnResolver'
import { useData } from '../../../contexts/DataContext'
import { DEX_LABELS, NETWORK_DEXES, type Dex } from '../../../constants/dex'
import { DURATION_LABELS, durations, type Duration } from '../../../constants/filter'
import { SORT_OPTION_LABELS, SORT_OPTIONS, type SortOption } from '../../../constants/sort'
import { CHECK_LABELS, CHECKS, type Check } from '../../../constants/checks'

type View = "filters" | "networks" | "dexes"

export default function Filters({
    handleTransaction
}: {
    handleTransaction: () => void
}) {
    const [view, setView] = useState<View>("filters")

    return (
        <div id="filters">
            {view == "filters" && <FiltersView handleTransaction={handleTransaction} setView={setView} />}
            {view == "networks" && <NetworksView setView={setView} />}
            {view == "dexes" && <DexesView setView={setView} />}
        </div>
    )
}

function FiltersView({
    handleTransaction,
    setView
}: {
    handleTransaction: () => void,
    setView: React.Dispatch<React.SetStateAction<View>>
}) {
    const { hideModal } = useModal()
    const { filters, updateFilters, clearFilters } = useData()

    return (
        <>
            <div className="filters-header">
                <span>Edit Filters</span>
                <button className="close-btn" onClick={() => hideModal()}>
                    <span className="material-symbols-rounded">close</span>
                </button>
            </div>
            <div className="filters-container">
                <div className="filters-section row">
                    <h2>Dex & Chains</h2>
                    <div className="filter-fields">
                        <button
                            className='filter-option'
                            onClick={() => setView("networks")}
                        >
                            All Networks
                        </button>
                        <button
                            className='filter-option'
                            onClick={() => setView("dexes")}
                            disabled={filters.networks.length > 1}
                        >
                            All DEXes
                        </button>
                    </div>
                </div>
                <span className="divider" />
                <div className="filters-section column">
                    <h2>Pool</h2>
                    <div className="filter-fields" style={{ "--num": 3 } as React.CSSProperties}>
                        <div className="filter-field">
                            <span className="field-label">Liquidity</span>
                            <div className="filter-field-group">
                                <Field
                                    unit='$'
                                    placeholder='min'
                                    type='number'
                                    value={filters.liquidityMin}
                                    onChange={(v) => updateFilters({ liquidityMin: v == "" ? undefined : Number(v) })}
                                />
                                <Field
                                    unit='$'
                                    placeholder='max'
                                    type='number'
                                    value={filters.liquidityMax}
                                    onChange={(v) => updateFilters({ liquidityMax: v == "" ? undefined : Number(v) })}
                                />
                            </div>
                        </div>
                        <div className="filter-field">
                            <span className="field-label">M. Cap</span>
                            <div className="filter-field-group">
                                <Field
                                    unit='$'
                                    placeholder='min'
                                    type='number'
                                    value={filters.marketcapMin}
                                    onChange={(v) => updateFilters({ marketcapMin: v == "" ? undefined : Number(v) })}
                                />
                                <Field
                                    unit='$'
                                    placeholder='max'
                                    type='number'
                                    value={filters.marketcapMax}
                                    onChange={(v) => updateFilters({ marketcapMax: v == "" ? undefined : Number(v) })}
                                />
                            </div>
                        </div>
                        <div className="filter-field">
                            <span className="field-label">Volume</span>
                            <div className="filter-field-group">
                                <Field
                                    unit='$'
                                    placeholder='min'
                                    type='number'
                                    value={filters.volumeMin}
                                    onChange={(v) => updateFilters({ volumeMin: v == "" ? undefined : Number(v) })}
                                />
                                <Field
                                    unit='$'
                                    placeholder='max'
                                    type='number'
                                    value={filters.volumeMax}
                                    onChange={(v) => updateFilters({ volumeMax: v == "" ? undefined : Number(v) })}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <span className="divider" />
                <div className="filters-section column">
                    <h2>Time</h2>
                    <div className="filter-fields" style={{ "--num": 5 } as React.CSSProperties}>
                        <div className="filter-field">
                            <span className="field-label">Pool Age</span>
                            <div className="filter-field-group">
                                <Field
                                    unit='HOURS'
                                    placeholder='min'
                                    type='number'
                                    value={filters.ageMin}
                                    onChange={(v) => updateFilters({ ageMin: v == "" ? undefined : Number(v) })}
                                />
                                <Field
                                    unit='HOURS'
                                    placeholder='max'
                                    type='number'
                                    value={filters.ageMax}
                                    onChange={(v) => updateFilters({ ageMax: v == "" ? undefined : Number(v) })}
                                />
                            </div>
                        </div>
                        <div className="filter-field">
                            <span className="field-label">Txns</span>
                            <div className="filter-field-group">
                                <Field
                                    placeholder='min'
                                    type='number'
                                    value={filters.txMin}
                                    onChange={(v) => updateFilters({ txMin: v == "" ? undefined : Number(v) })}
                                />
                                <Field
                                    placeholder='max'
                                    type='number'
                                    value={filters.txMax}
                                    onChange={(v) => updateFilters({ txMax: v == "" ? undefined : Number(v) })}
                                />
                            </div>
                            <span className="material-symbols-rounded duration-label" no-select="true">schedule</span>
                            <Dropdown
                                width='short'
                                options={durations}
                                value={filters.txDuration}
                                labels={DURATION_LABELS}
                                onChange={(v) => updateFilters({ txDuration: v as Duration })}
                            />
                        </div>
                        <div className="filter-field">
                            <span className="field-label">Buys</span>
                            <div className="filter-field-group">
                                <Field
                                    placeholder='min'
                                    type='number'
                                    value={filters.buysMin}
                                    onChange={(v) => updateFilters({ buysMin: v == "" ? undefined : Number(v) })}
                                />
                                <Field
                                    placeholder='max'
                                    type='number'
                                    value={filters.buysMax}
                                    onChange={(v) => updateFilters({ buysMax: v == "" ? undefined : Number(v) })}
                                />
                            </div>
                            <span className="material-symbols-rounded duration-label" no-select="true">schedule</span>
                            <Dropdown
                                width='short'
                                options={durations}
                                value={filters.buysDuration}
                                labels={DURATION_LABELS}
                                onChange={(v) => updateFilters({ buysDuration: v as Duration })}
                            />
                        </div>
                        <div className="filter-field">
                            <span className="field-label">Sells</span>
                            <div className="filter-field-group">
                                <Field
                                    placeholder='min'
                                    type='number'
                                    value={filters.sellsMin}
                                    onChange={(v) => updateFilters({ sellsMin: v == "" ? undefined : Number(v) })}
                                />
                                <Field
                                    placeholder='max'
                                    type='number'
                                    value={filters.sellsMax}
                                    onChange={(v) => updateFilters({ sellsMax: v == "" ? undefined : Number(v) })}
                                />
                            </div>
                            <span className="material-symbols-rounded duration-label" no-select="true">schedule</span>
                            <Dropdown
                                width='short'
                                options={durations}
                                value={filters.sellsDuration}
                                labels={DURATION_LABELS}
                                onChange={(v) => updateFilters({ sellsDuration: v as Duration })}
                            />
                        </div>
                        <div className="filter-field">
                            <span className="field-label">Sort By</span>
                            <Dropdown
                                options={Object.values(SORT_OPTIONS)}
                                value={filters.sort}
                                labels={SORT_OPTION_LABELS}
                                onChange={(v) => updateFilters({ sort: v as SortOption })}
                            />
                        </div>
                    </div>
                </div>
                <span className="divider" />
                <div className="filters-section column">
                    <h2>Fraud</h2>
                    <div className="filter-fields" style={{ "--num": 3 } as React.CSSProperties}>
                        <div className="filter-field">
                            <span className="field-label">Checks</span>
                            <Options
                                options={Object.values(CHECKS)}
                                labels={CHECK_LABELS}
                                value={filters.checks}
                                onChange={(v) => updateFilters({ checks: v as Check[] })}
                            />
                        </div>
                        <div className="filter-field">
                            <span className="field-label">Buy Tax</span>
                            <div className="filter-field-group">
                                <Field
                                    placeholder='min'
                                    type='number'
                                    unit='%'
                                    value={filters.buyTaxMin}
                                    onChange={(v) => updateFilters({ buyTaxMin: v == "" ? undefined : Number(v) })}
                                />
                                <Field
                                    placeholder='max'
                                    type='number'
                                    unit='%'
                                    value={filters.buyTaxMax}
                                    onChange={(v) => updateFilters({ buyTaxMax: v == "" ? undefined : Number(v) })}
                                />
                            </div>
                        </div>
                        <div className="filter-field">
                            <span className="field-label">Sell Tax</span>
                            <div className="filter-field-group">
                                <Field
                                    placeholder='min'
                                    type='number'
                                    unit='%'
                                    value={filters.sellTaxMin}
                                    onChange={(v) => updateFilters({ sellTaxMin: v == "" ? undefined : Number(v) })}
                                />
                                <Field
                                    placeholder='max'
                                    type='number'
                                    unit='%'
                                    value={filters.sellTaxMax}
                                    onChange={(v) => updateFilters({ sellTaxMax: v == "" ? undefined : Number(v) })}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <span className="divider" />
                <div className="filters-section column">
                    <h2>Post AI Search</h2>
                    <span className="coming-soon-text">Coming Soon...</span>
                </div>
            </div>
            <div className="filters-footer">
                <button className="clear-btn footer-btn" onClick={() => clearFilters()}>
                    Clear
                </button>
                <button className="payment-btn footer-btn" onClick={() => handleTransaction()}>
                    <img src="/logoBright.svg" alt="logo" />
                    Start AI Search
                </button>
            </div>
        </>
    )
}


function NetworksView({
    setView
}: {
    setView: React.Dispatch<React.SetStateAction<View>>
}) {
    const { filters, updateFilters } = useData();

    const toggle = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, slug: Network) => {
        e.currentTarget.blur()

        const selected = filters.networks
        const allNetworks = Object.values(NETWORKS)

        // Case: all selected → clicking one selects ONLY that one
        if (selected.length === allNetworks.length) {
            updateFilters({
                networks: [slug],
                dexes: Object.values(NETWORK_DEXES[slug]) // auto-fill dexes
            })
            return
        }

        const isSelected = selected.includes(slug)

        // Case: removing the only network → block (min 1)
        if (isSelected && selected.length === 1) {
            return
        }

        let updated: Network[]
        if (isSelected) {
            updated = selected.filter(n => n !== slug)
        } else {
            updated = [...selected, slug]
        }

        // If > 1 network → dexes must be cleared
        if (updated.length > 1) {
            updateFilters({
                networks: updated,
                dexes: []
            })
        } else {
            // If exactly 1 network → fill all dexes
            const net = updated[0]
            updateFilters({
                networks: updated,
                dexes: Object.values(NETWORK_DEXES[net])
            })
        }
    };

    return (
        <>
            <div className="filters-header">
                <span>Choose Networks</span>
            </div>
            <div className="filters-container">
                <div className="filters-section row">
                    <div className="filter-fields" style={{ "--num": 3 } as React.CSSProperties}>
                        <button
                            className="list-option"
                            data-active={filters.networks.length == Object.values(NETWORKS).length}
                            onClick={() => updateFilters({ networks: Object.values(NETWORKS) })}
                        >
                            <p>All Networks</p>
                        </button>
                        {Object.values(NETWORKS).map((n, idx) => (
                            <button
                                key={idx}
                                className="list-option"
                                data-active={filters.networks.includes(n) && filters.networks.length < Object.values(NETWORKS).length}
                                onClick={(e) => toggle(e, n)}
                            >
                                <img loading="lazy" decoding='async' src={networkLogo(n)} alt={NETWORK_LABELS[n]} />
                                <p>{NETWORK_LABELS[n]}</p>
                            </button>
                        ))}
                    </div>
                </div>
            </div>
            <div className="filters-footer">
                <button className="clear-btn footer-btn">
                    Clear
                </button>
                <button className="payment-btn footer-btn" onClick={() => setView("filters")}>
                    Save
                </button>
            </div>
        </>
    )
}


function DexesView({
    setView
}: {
    setView: React.Dispatch<React.SetStateAction<View>>
}) {
    const { filters, updateFilters, availableDexes } = useData()

    const toggle = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, slug: Dex) => {
        e.currentTarget.blur()
        const selected = filters.dexes

        // If all dexes selected, clicking one → select only that one
        if (selected.length === availableDexes.length) {
            updateFilters({ dexes: [slug] })
            return
        }

        const isSelected = selected.includes(slug)

        let updated: Dex[]
        if (isSelected) {
            updated = selected.filter(d => d !== slug)
        } else {
            updated = [...selected, slug]
        }

        updateFilters({ dexes: updated })
    };

    return (
        <>
            <div className="filters-header">
                <span>Choose Dexes</span>
            </div>
            <div className="filters-container">
                <div className="filters-section row">
                    <div className="filter-fields" style={{ "--num": 3 } as React.CSSProperties}>
                        <button
                            className="list-option"
                            data-active={filters.dexes.length == availableDexes.length}
                            onClick={() => updateFilters({ dexes: availableDexes })}
                        >
                            <p>All Dexes</p>
                        </button>
                        {availableDexes.map((d, idx) => (
                            <button
                                key={idx}
                                className="list-option"
                                data-active={filters.dexes.includes(d) && filters.dexes.length < availableDexes.length}
                                onClick={(e) => toggle(e, d)}
                            >
                                <img loading="lazy" decoding='async' src={dexLogo(d)} alt={DEX_LABELS[d]} />
                                <p>{DEX_LABELS[d]}</p>
                            </button>
                        ))}
                    </div>
                </div>
            </div>
            <div className="filters-footer">
                <button className="clear-btn footer-btn">
                    Clear
                </button>
                <button className="payment-btn footer-btn" onClick={() => setView("filters")}>
                    Save
                </button>
            </div>
        </>
    )
}