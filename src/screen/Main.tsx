import Style from './Main.module.scss';

import MainChar from '../assets/main.png';
import { useEffect, useRef } from 'react';

import { FaFacebook, FaGithub, FaTwitter, FaDiscord } from "react-icons/fa";

const des: number = 150;

export default function Main() {

    const MainElem = useRef<HTMLDivElement | null>(null);

    useEffect(() => {

        const parallex = (e: MouseEvent) => {
            const reqElem = MainElem.current;
            if (reqElem) {
                reqElem.style.setProperty("--parX", (e.pageX * -1 / des) + 'px');
                reqElem.style.setProperty("--parY", (e.pageY * -1 / des) + 'px');
                reqElem.style.setProperty("--parCharX", (e.pageX * 1 / des) + 'px');
                reqElem.style.setProperty("--parCharY", (e.pageY * 1 / des) + 'px');
                reqElem.style.setProperty("--parIntroX", (e.pageX * 1 / des) + 'px');
                reqElem.style.setProperty("--parIntroY", (e.pageY * 1 / des) + 'px');
            }
        }

        MainElem.current?.addEventListener('mousemove', parallex);

        return () => {
            MainElem.current?.removeEventListener('mousemove', parallex);
        }
    }, []);

    return (
        <div ref={MainElem} className={Style.Main}>
            <div className={Style.Intro}>
                <div className={Style.myself}>
                    <h2>i'm Mashiro (aka michioxd)</h2>
                    <span>a stupid neko nyaaa</span>

                    <div className={Style.social}>
                        <a className={Style.socialItem} href="//fb.com/michioxd" target='blank'>
                            <FaFacebook />
                        </a>
                        <a className={Style.socialItem} href="//github.com/michioxd" target='blank'>
                            <FaGithub />
                        </a>
                        <a className={Style.socialItem} href="//twitter.com/michioxd" target='blank'>
                            <FaTwitter />
                        </a>
                        <a className={Style.socialItem} href="//discord.com/users/536175851247501347" target='blank'>
                            <FaDiscord />
                        </a>
                    </div>
                </div>
            </div>
            <div className={Style.SrChar}>
                <img srcSet={MainChar} />
            </div>
        </div>
    )
}