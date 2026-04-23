import { Button } from '@/components/ui/button';

export default function Welcome() {
    return (
        <div className="space-y-8 py-8 text-center">
            <h1 className="text-4xl font-bold">React / Inertia / Tailwind</h1>

            <div className="flex flex-col items-center gap-4">
                <Button>Regular</Button>
                <Button variant="outline">Outline</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="destructive">Destructive</Button>
                <Button variant="destructive-outline">Destructive outline</Button>
                <Button variant="ghost">Ghost</Button>
                <Button variant="link">Link</Button>
            </div>
        </div>
    );
}
