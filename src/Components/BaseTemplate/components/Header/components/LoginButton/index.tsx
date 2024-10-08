import { useAuth } from "contexts/auth.context"
import * as S from "./styles"
import Popover from "antd/es/popover";
import Tooltip from "antd/es/tooltip";
import { useTheme } from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { ReactComponent as SettingsIcon } from "assets/imgs/settings.svg";
import { ReactComponent as WalletIcon } from "assets/imgs/wallet.svg";
import { ReactComponent as SignoutIcon } from "assets/imgs/sign-out.svg";
import { useState } from "react";
import { useTranslation } from "react-i18next";

export const LoginButton = () => {
    const { user, signOut } = useAuth();
    const theme = useTheme();
    const navigate = useNavigate();
    const [showTooltip, setShowTooltip] = useState(false);
    const [popoverIsVisible, setPopoverIsVisible] = useState(false);
    const { t } = useTranslation();

    const handleOnClick = () => {
        if (!user) {
            navigate('/login');
        }
    }

    const content = (
        <S.ProfilePopover>
            <header>
                <strong title={user?.name}>{user?.name}</strong>

                <div className="avatar">
                    <i className="fi-sr-user"></i>
                </div>
            </header>

            <div className="divider" />

            <section>
                <Link onClick={() => setPopoverIsVisible(false)} to="/profile" className="">
                    <SettingsIcon width={28} height={28} />

                    <span>{t('header.my_data')}</span>
                </Link>

                <Link to="/profile" className="">
                    <WalletIcon width={28} height={28} />

                    <span>{t('header.my_data')}</span>
                </Link>
            </section>

            <div className="divider" />

            <section>
                <Link onClick={signOut} to="/login">
                    <SignoutIcon width={28} height={28} />

                    <span>{t('header.logout')}</span>
                </Link>
            </section>

        </S.ProfilePopover>
    );

    return (
        <Tooltip
            placement="bottom"
            color={theme.colors.middleL}
            title={user && t('header.profile')}
            open={showTooltip}
            onOpenChange={setShowTooltip}
            overlayStyle={{ position: 'fixed' }}
        >
            <Popover
                overlayStyle={{ position: 'fixed' }}
                placement="bottomRight"
                content={content}
                trigger={user ? "click" : "none"}
                zIndex={9999}
                showArrow={false}
                color="#1d1733"
                open={popoverIsVisible}
                onOpenChange={(visible) => {
                    setShowTooltip(false);
                    setPopoverIsVisible(visible);
                }}
            >
                <S.LoginButtonContainer onClick={handleOnClick} isAuthenticated={!!user}>
                    <img src="/assets/img/use-avatar.svg" />
                </S.LoginButtonContainer>
            </Popover>
        </Tooltip>
    )
}
