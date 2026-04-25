import { AnchoredToastProvider, ToastProvider } from '@/components/ui/toast';
import { createInertiaApp } from '@inertiajs/react';

createInertiaApp({
    withApp(app) {
        return (
            <ToastProvider>
                <AnchoredToastProvider>{app}</AnchoredToastProvider>
            </ToastProvider>
        );
    },
});
