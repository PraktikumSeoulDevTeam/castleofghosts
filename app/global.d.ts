interface Window {
    // Yandex.Metrika
    ym: (number: number, event: string, target: string, params?: Record<string, string>) => void;
    // Server stae
    __INITIAL_STATE__: AppStoreState;
}
