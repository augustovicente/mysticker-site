import styled from "styled-components"
import Skeleton from "react-loading-skeleton"

export const MarketplaceContainer = styled.div`
    margin-top: 8rem;
    display: grid;
    gap: 54px;
    padding: 1rem 0;

    .marketplace-title {
        display: flex;
        justify-content: space-between;
        color: white;
        margin: 0;
        margin-bottom: 2rem;

        h1.title-text{
            margin-right: auto;
        }

        img {
            height: 50px;
            width: 50px;
            margin-right: 1.25rem;
        }

        a {
            font-size: 1rem;
            color: white;
            display: flex;
            justify-content: center;
            align-items: center;
            background: linear-gradient(to left, rgba(255, 83, 83, 1), rgba(254, 69, 126, 1));
            width: 15%;
            border-radius: 30px;
            font-weight: bold;
        }
    }

    .stickers-package-list {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        width: 100%;
    }

    .carousel-root {
        display: none;
    }
    /* media query for mobile */
    @media (max-width: 768px) {
        .marketplace-title{
            flex-direction: column;
            align-items: center;
            gap: 1rem;
            h1.title-text{
                text-align: center;
                font-size: 1.5rem;
                margin: 0 auto;
            }
            a {
                padding: 0.5rem;
                font-size: 1rem;
                width: 50%;
                border-radius: 10px;
                font-weight: bold;
            }
        }
        .stickers-package-list {
            display: none;
        }
        .carousel-root {
            display: block;
            max-width: 100%;
            min-width: 100%;
            width: 100%;
            .carousel.carousel-slider{
                overflow: visible;
                .control-dots{
                    bottom: -2.5rem;
                }
            }
            .carousel.carousel-slider {
                overflow: inherit;
            }

            .carousel .control-next.control-arrow, .carousel .control-next.control-arrow:hover{
                background-color: transparent;
                right: -2.5rem;
            }

            .carousel .control-prev.control-arrow, .carousel .control-prev.control-arrow:hover {
                background-color: transparent;
                left: -2.5rem;
            }

            .carousel .control-arrow, .carousel.carousel-slider .control-arrow{
                opacity: 1;
            }

            .carousel .control-next.control-arrow:before {
                content: '';
                border: solid #FFDB45;
                border-width: 0 5px 5px 0;
                display: inline-block;
                padding: 14px;
                transform: rotate(-45deg);
                -webkit-transform: rotate(-45deg);
            }

            .carousel .control-prev.control-arrow:before {
                content: '';
                border: solid #FFDB45;
                border-width: 0 5px 5px 0;
                display: inline-block;
                padding: 14px;
                transform: rotate(135deg);
                -webkit-transform: rotate(135deg);
            }
        }
    }
`

type StickersPackageContainerProps = {
    index: number;
}

export const StickersPackageContainer = styled.li<StickersPackageContainerProps>`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    width: 29%;
    border-radius: 20px;
    gap: 10px;
    background: ${props => props.theme.colors.middle};

    /* media query for mobile */
    @media (max-width: 768px) {
        width: 100%;
        justify-content: unset;
        height: fit-content;
        flex: 0 0 100%;
    }
    .stikers-package-main {
        display: flex;
        flex-direction: column;
        background-image: url("/assets/img/others/sticker-mask.png");
        background-position: center;
        background-repeat: no-repeat;
        padding: 22px 22px 0px 22px;

        .sticker-star-container {
            img {
                height: 40px;
                width: auto;
            }
        }

        .sticker-package-container {
            img {
                display: block;
                object-fit: contain;
                width: 162px;
                height: auto;
            }
        }

        div {
            display: flex;
            width: 100%;
            justify-content: center;
            align-content: center;

            h2 {
                display: flex;
                justify-content: center;
                align-items: center;
                flex-direction: column;
                flex-wrap: wrap;
                margin: 0;
                color: white;
                text-align: center;

                 span {
                    color: ${props => props.theme.colors.greenNeon};
                 }

                 margin-top: 1rem;
            }
        }
    }

    .stikers-package-payment {
        display: flex;
        flex-direction: column;
        position: relative;

        .sticker-stats {
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: ${props => props.theme.colors.colorMiddle};
            border-radius: 8px;
            padding: 10px;

            position: absolute;
            right: 8%;
            top: -30%;
        }

        .sticker-stats-modal {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            align-self: center;
            width: 60%;
            background-color: ${props => props.theme.colors.middle};
            border: ${props => props.theme.colors.light} solid 1.5px;
            border-radius: 10px;
            padding: 8px;

            position: absolute;
            top: -105%;
            z-index: 99;

            .sticker-stats-close-modal-btn {
                display: flex;
                align-items: center;
                justify-content: center;
                background: none;

                position: absolute;
                right: 8px;
                top: 8px;

                img {
                    height: 20px;
                    width: 20px;
                }
            }

            .stickers-stats-prob {
                display: flex;
                align-items: center;
                width: 90%;

                img {
                    margin-right: 5%;
                }

                p {
                    display: flex;
                    flex-direction: column;
                    flex-wrap: wrap;
                    margin: 0;
                    font-size: 0.75rem;
                    font-weight: bold;
                }
            }

            ul {
                display: flex;
                flex-direction: column;

                li {
                    display: flex;
                    align-items: center;

                    p {
                        margin: 0;
                        color: ${props => props.theme.colors.colorLight};
                        font-size: 0.75rem;
                    }

                    img {
                        display: flex;
                        margin-right: 5px;
                        height: 33px;
                        width: 21px;
                    }

                    span {
                        color: white;
                        font-size: 0.875rem;
                        margin-left: 0.875rem;
                    }
                }
            }
        }

        .payment-quantity {
            display: flex;
            justify-content: center;
            align-items: start;
            background: ${props => {
                switch(props.index) {
                    case 0:
                        return "linear-gradient(to left, rgba(255, 83, 83, 1), rgba(254, 69, 126, 1));";
                        break;
                    case 1:
                        return "linear-gradient(to left, rgba(70, 148, 255, 1), rgba(181, 59, 254, 1));";
                        break;
                    case 2:
                        return "linear-gradient(to left, rgba(70, 148, 255, 1), rgba(48, 229, 132, 1));";
                        break;
                    default:
                        return "linear-gradient(to left, rgba(255, 83, 83, 1), rgba(254, 69, 126, 1));";
                }
            }};
            border-radius: 30px;
            width: 100%;
            padding: 1rem;
            z-index: 2;
            margin-bottom: -2.25rem;

            .payment {
                display: flex;
                flex-direction: column;
                width: 50%;

                h3, p {
                    margin: 0;
                    margin-left: 1rem;
                    color: white;
                }

                h3 {
                    font-size: 1rem;
                    margin-bottom: 4px;
                }

                p {
                    font-size: 0.875rem;
                    margin-bottom: 1rem;
                }

                button {
                    font-size: 1.25rem;
                    color: ${props => props.theme.colors.dark};
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    background-color: ${props => props.theme.colors.greenNeon};
                    width: 95%;
                    border-radius: 30px;
                    height: 42px;
                    font-weight: bold;
                }
            }

            .quantity {
                display: flex;
                flex-direction: column;
                align-items: flex-end;
                color: white;
                width: 50%;
                height: 100%;

                h4, p {
                    margin: 0;
                    margin-right: 1rem;
                    color: white;
                }

                h4 {
                    font-size: 0.875rem;
                    margin-bottom: 4px;
                }

                p {
                    font-size: 0.875rem;
                    margin-bottom: 1rem;
                }

                .quantity-counter {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    width: 95%;

                    button {
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        background: ${props => props.theme.colors.purple};
                        border: 1px white solid;
                        height: 37px;
                        width: 40px;
                        border-radius: 12px;
                        color: white;
                        font-weight: bold;
                        font-size: 1.5rem;
                    }

                    input {
                        display: flex;
                        height: 42px;
                        width: 40px;
                        border-radius: 12px;
                        font-weight: bold;
                        font-size: 1.25rem;
                        justify-content: center;
                        align-items: center;
                        text-align: center;
                    }
                }
            }
        }

        .description {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 3rem 1rem 0.75rem 1rem;
            background: white;
            border-bottom-right-radius: 30px;
            border-bottom-left-radius: 30px;

            span {
                font-weight: bold;
                font-size: 1rem;
            }
        }
    }
`

type SkeletonProps = {
    skeletonWidth?: string;
    skeletonHeight?: string;
}

export const TitleSkeletonContainer = styled.div`
    display: flex;
    gap: 30px;
    margin-bottom: 12vh;
`

export const CustomSkeleton = styled(Skeleton) <SkeletonProps>`
    width: ${props => props.skeletonWidth ? props.skeletonWidth : "unset"};
    height: ${props => props.skeletonHeight ? `${props.skeletonHeight} !important` : "unset"};
`

export const CardsListSkeletonContainer = styled.div`
    display: flex;
    justify-content: space-between;
    min-height: 70vh;
    width: 100%;

    .skeleton-card {
        display: flex;
        justify-content: center;
        flex-direction: column;
        height: 100%;
        width: 29%;
        border-radius: 20px;
        gap: 10px;
        padding: 40px 0;
        background: ${props => props.theme.colors.middle};

        span {
            display: flex;
            justify-content: center;
        }
    }
`

type StickerSeparatorProps = {
    margin: string;
}

export const StickersSeparator = styled.div<StickerSeparatorProps>`
    display: flex;
    content: "";
    background-color: ${props => props.theme.colors.middleL};
    width: 100%;
    height: 3px;
    margin: ${props => props.margin};
`
