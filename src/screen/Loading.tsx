import Style from './Loading.module.scss';

import Madanla from '../assets/madanla.png';

import Bg from '../assets/bg.webp';
import MainChar from '../assets/main.png';
import { useEffect, useState } from 'react';
import clsx from 'clsx';

const willCache = [
    Bg,
    MainChar
]

export default function LoadingAsset({ onDone }: { onDone?: () => void }) {

    const [isDone, setIsDone] = useState<boolean>(false);

    useEffect(() => {
        let loaded = 0;

        function loadImage(url: string) {
            let img = new Image();
            img.onload = function () {
                loaded++;
                if (loaded == willCache.length) {
                    setIsDone(true);
                    onDone && onDone();
                }
            };
            img.src = url;
        }

        for (var i = 0; i < willCache.length; i++) {
            loadImage(willCache[i]);
        }
    }, []);

    return (
        <div className={clsx(Style.Loading, isDone && Style.done)}>
            <img className={Style.Madanla} alt="madanla" srcSet={Madanla} />
            <h3 className={Style.SloText}>
                something wonderful will come your way...
            </h3>
            <span className={Style.LoadingText}>
                caching resouces, please wait...
            </span>
        </div>
    )
}