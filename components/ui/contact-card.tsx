import React from 'react';
import { cn } from '@/lib/utils';
import { PlusIcon } from 'lucide-react';

type ContactInfoProps = React.ComponentProps<'div'> & {
    icon: React.ComponentType<{ className?: string }>;
    label: string;
    value: string;
};

type ContactCardProps = React.ComponentProps<'div'> & {
    title?: string;
    description?: string;
    contactInfo?: ContactInfoProps[];
    formSectionClassName?: string;
};

export function ContactCard({
    title = 'Contacta con Nosotros',
    description = 'Si tienes preguntas sobre nuestros servicios o necesitas ayuda, completa el formulario. Respondemos en 24 horas.',
    contactInfo,
    className,
    formSectionClassName,
    children,
    ...props
}: ContactCardProps) {
    return (
        <div
            className={cn(
                'bg-zinc-900/50 border border-zinc-800 relative grid h-full w-full shadow md:grid-cols-2 lg:grid-cols-3',
                className,
            )}
            {...props}
        >
            <PlusIcon className="absolute -top-3 -left-3 h-6 w-6 text-cyan-500/50" />
            <PlusIcon className="absolute -top-3 -right-3 h-6 w-6 text-cyan-500/50" />
            <PlusIcon className="absolute -bottom-3 -left-3 h-6 w-6 text-cyan-500/50" />
            <PlusIcon className="absolute -right-3 -bottom-3 h-6 w-6 text-cyan-500/50" />
            <div className="flex flex-col justify-between lg:col-span-2">
                <div className="relative h-full space-y-4 p-6 md:p-8">
                    <h1 className="text-3xl font-bold md:text-4xl lg:text-5xl">
                        {title}
                    </h1>
                    <p className="text-zinc-400 max-w-xl text-sm md:text-base lg:text-lg">
                        {description}
                    </p>
                    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-1">
                        {contactInfo?.map((info, index) => (
                            <ContactInfo key={index} {...info} />
                        ))}
                    </div>
                </div>
            </div>
            <div
                className={cn(
                    'bg-zinc-950/50 flex h-full w-full items-center border-t p-5 md:col-span-1 md:border-t-0 md:border-l border-zinc-800',
                    formSectionClassName,
                )}
            >
                {children}
            </div>
        </div>
    );
}

function ContactInfo({
    icon: Icon,
    label,
    value,
    className,
    ...props
}: ContactInfoProps) {
    return (
        <div className={cn('flex items-center gap-3 py-3', className)} {...props}>
            <div className="bg-cyan-500/10 rounded-lg p-3">
                <Icon className="h-5 w-5 text-cyan-400" />
            </div>
            <div>
                <p className="font-medium text-white">{label}</p>
                <p className="text-zinc-500 text-xs">{value}</p>
            </div>
        </div>
    );
}