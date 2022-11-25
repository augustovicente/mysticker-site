import { paste_stickers } from "models/User"
import { useCallback, useState } from "react"
import { Link } from "react-router-dom"
import { AlbumModal, StikerContainer } from "../styles"

type StickerProps = {
    stickerId: number
    rarity: number
    name: string
    country_id: number;
}

const ownedStickers: number[] = [
    263,
    262
]

const pastedStickers: number[] = [
    262,
]

export const Sticker = ({ stickerId, name, rarity, country_id }: StickerProps) => {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [playerSelected, setPlayerSelected] = useState(stickerId)

    const handlePasteSticker = useCallback(() => {
        paste_stickers(country_id);
    }, [])

    const showModal = () => {
        setIsModalOpen(true)
    }

    const handleOk = () => {
        setIsModalOpen(false)
    }

    const handleCancel = () => {
        setIsModalOpen(false)
    }

    const handleNextPlayer = useCallback(() => {
        if (playerSelected < 12) {
            setPlayerSelected(playerSelected + 1)
        }
    }, [playerSelected])

    const handlePreviewPlayer = useCallback(() => {
        if (playerSelected > 1) {
            setPlayerSelected(playerSelected - 1)
        }
    }, [playerSelected])

    return (
        <>
            <StikerContainer
                className="sticker"
                onClick={showModal}
                pasted={pastedStickers.includes(stickerId)}
            >
                {ownedStickers.includes(stickerId) ? (
                    <>
                        <img className="player-img" src={`/copa_pruu/${stickerId}.png`} alt={name} />
                        <img className="player-tier" src={`/assets/img/icons/tier-${rarity}-icon.svg`} />
                        <img className="player-base-tier" src={`/assets/img/icons/tier-base-${rarity}-icon.svg`} />
                    </>
                ) : (

                    <>
                        <span>{`#0${stickerId}`}</span>
                        <img className="add-icon" src="/assets/img/icons/add-icon.svg" />
                        <img src="/assets/img/icons/paste-sticker-action-icon.svg" />
                    </>
                )}

            </StikerContainer>

            <AlbumModal title="" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <div
                    className="sticker"
                >
                    {ownedStickers.includes(stickerId) ? (
                        <>
                            <img className="player-img" src={`/copa_pruu/${stickerId}.png`} alt={name} />
                            <img className="player-tier" src={`/assets/img/icons/tier-${rarity}-icon.svg`} />
                            <img className="player-base-tier" src={`/assets/img/icons/tier-base-${rarity}-icon.svg`} />
                        </>
                    ) : (

                        <>
                            <span>{`#0${stickerId}`}</span>
                            <img className="add-icon" src="/assets/img/icons/add-icon.svg" />
                            <img src="/assets/img/icons/paste-sticker-action-icon.svg" />
                        </>
                    )}
                </div>

                <div className="rarity-number">
                    <div className="rarity">
                        Raridade
                        <span>ouro</span>
                    </div>

                    <span>{`#0${playerSelected}`}</span>
                </div>

                <div className="next-preview-sticker">
                    <span className="next-preview-line" />
                    <div className="next-preview">
                        <button
                            onClick={handlePreviewPlayer}
                        >
                            <svg width="11" height="17" viewBox="0 0 11 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.6875 14.1L3.5 8.65623L7.6875 3.21248" stroke="white" stroke-width="5" stroke-linecap="round" />
                            </svg>
                        </button>

                        <button
                            onClick={handleNextPlayer}
                        >
                            <svg width="11" height="17" viewBox="0 0 11 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2.9873 14.1L7.1748 8.65623L2.9873 3.21248" stroke="white" stroke-width="5" stroke-linecap="round" />
                            </svg>

                        </button>
                    </div>
                </div>

                <div className="paste-sell-buy-container">
                    {!pastedStickers.includes(stickerId) && (
                        <button
                            disabled={!ownedStickers.includes(stickerId)}
                            className="paste-sell-buy-btn"
                            onClick={() => ownedStickers.includes(stickerId) ? handlePasteSticker : {}}
                        >
                            <img src="/assets/img/icons/paste-burn-green-icon.svg" />

                            <p>Colar</p>

                            {!ownedStickers.includes(stickerId) ? (
                                <span>
                                    <img src="/src/assets/imgs/lock.svg" />
                                </span>
                            ) : (
                                <span />
                            )}
                        </button>
                    )}

                    <button className="paste-sell-buy-btn" disabled={true}>
                        <img src="/assets/img/icons/sell-green-icon.svg" />

                        <p>vender</p>

                        <span>
                            <img src="/src/assets/imgs/lock.svg" />
                        </span>
                    </button>
                    <Link className="paste-sell-buy-btn" to="/marketplace">
                        <img src="/assets/img/icons/cart-buy-green-icon.svg" />

                        <p>comprar</p>

                        <span />
                    </Link>
                </div>
            </AlbumModal>
        </>

    )
}
