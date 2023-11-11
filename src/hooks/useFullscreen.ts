/* eslint-disable @typescript-eslint/no-empty-function */
import React from 'react'

export default function useFullscreen() {

    const [fullscreen, setFullscreen] = React.useState<boolean>(false);

    function toggle() {
        setFullscreen((prevState: boolean) => {
            return !prevState
        })
    }

    // Watch for fullscreenchange
    React.useEffect(() => {
        async function handle(flag: boolean) {
            if (flag) {
                await document.body.requestFullscreen();
            }
            else {
                await document.exitFullscreen();
            }
        }

        handle(fullscreen)
            .then(() => { })
            .catch(() => { });
    }, [fullscreen]);

    return {
        toggle, fullscreen
    }
}
