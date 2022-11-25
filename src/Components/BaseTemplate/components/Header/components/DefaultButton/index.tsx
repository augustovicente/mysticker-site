import { Popover, Tooltip } from "antd";
import { useAuth } from "contexts/auth.context";
import { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode, useState } from "react";
import { useTheme } from "styled-components";
import { DefaultButtonContainer } from "./styles"
import * as S from './styles';
import i18n from "i18n";

type DefaultButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & ButtonHTMLAttributes<HTMLButtonElement> & {
    icon: string;
    title: string;
    children?: ReactNode | ReactNode;
    onlyLink?: string;
    needsAuth?: boolean;
}

export const DefaultButton = ({ icon, onlyLink, title, children, needsAuth, ...rest }: DefaultButtonProps) => {
    const { user, signOut } = useAuth();
    const theme = useTheme();
    const [showTooltip, setShowTooltip] = useState(false);

    return (
        <Tooltip
            placement="bottom"
            color={theme.colors.middleL}
            title={title}
            open={showTooltip}
            onOpenChange={setShowTooltip}
        >
            {onlyLink ? (
                <DefaultButtonContainer
                    {...rest}
                    as="a"
                    href={!rest.disabled ? onlyLink : undefined}
                    rel="noreferrer" target="_blank"
                >
                    <img src={icon} />
                </DefaultButtonContainer>
            ) : (
                <Popover
                    placement="bottom"
                    onOpenChange={() => setShowTooltip(false)}
                    content={(
                        <S.ProfilePopover>
                            <header>
                                <strong title={user?.name}>{title}</strong>
                            </header>

                            <div className="divider" />

                            {children}
                        </S.ProfilePopover>
                    )}
                    trigger={!needsAuth ? "click" : "none"}
                    zIndex={9999}
                    showArrow={false}
                    color="#1d1733"
                >
                    <DefaultButtonContainer {...rest}>
                        <img src={icon} />
                    </DefaultButtonContainer>
                </Popover>
            )}
        </Tooltip>
    )
}
