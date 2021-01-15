import fscreen from 'fscreen';

export const FullScreenApi = {
    eventExist: false,

    enableFullScreen(): void {
        try {
            if (fscreen.fullscreenEnabled) {
                fscreen.requestFullscreen(document.documentElement);
            }
        } catch (error) {
            // eslint-disable-next-line no-console
            console.log(`[error-web-api] something wrong in FullScreenApi->enableFullScreen`);
        }
    },

    disableFullScreenByButton(): void {
        if (this.eventExist) {
            document.removeEventListener('keydown', FullScreenApi.toggleByButtonEvent);
            this.eventExist = false;
        }
    },

    disableFullScreen(): void {
        try {
            if (fscreen.fullscreenEnabled) {
                fscreen.exitFullscreen();
            }
        } catch (error) {
            // eslint-disable-next-line no-console
            console.log(`[error-web-api] something wrong in FullScreenApi->disableFullScreen`);
        }
    },

    async toggleByButtonEvent(event: KeyboardEvent): Promise<void> {
        const button = event.code;

        if (button !== 'KeyF') {
            return;
        }

        try {
            if (!document.fullscreenElement) {
                await FullScreenApi.enableFullScreen();
            } else {
                await FullScreenApi.disableFullScreen();
            }
        } catch (error) {
            // eslint-disable-next-line no-console
            console.log(`[error-web-api] something wrong in FullScreenApi->enableFullScreen`);
        }
    },

    initFullScreenByButton(): void {
        if (!this.eventExist) {
            document.addEventListener('keydown', FullScreenApi.toggleByButtonEvent);
            this.eventExist = true;
        }
    }
};
