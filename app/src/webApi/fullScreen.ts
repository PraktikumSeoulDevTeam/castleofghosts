export class FullScreenApi {
    static eventExist = false;

    static enableFullScreen(): void {
        try {
            if (!document.fullscreenElement) {
                document.documentElement.requestFullscreen().catch();
            }
        } catch (error) {
            // eslint-disable-next-line no-console
            console.log(`[error-web-api] something wrong in FullScreenApi->enableFullScreen`);
        }
    }

    static disableFullScreen(): void {
        try {
            if (document.exitFullscreen) {
                document.exitFullscreen().catch();
            }
        } catch (error) {
            // eslint-disable-next-line no-console
            console.log(`[error-web-api] something wrong in FullScreenApi->disableFullScreen`);
        }
    }

    private static async toggleByButtonEvent(event: KeyboardEvent): Promise<void> {
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
    }

    static initFullScreenByButton(): void {
        if (!this.eventExist) {
            document.addEventListener('keydown', FullScreenApi.toggleByButtonEvent);
            this.eventExist = true;
        }
    }
}
