import { isPast } from 'date-fns';
import classNames from 'classnames';

import { FlagIcon } from '~/components/FlagIcon';
import { useState } from 'react';

interface ChallengeCardProps {
    title: string;
    description: string;
    prize: string;
    completionDate: Date;
    initiationDate: Date;
    url: string;
};

export function ChallengeCard({
    title,
    description,
    prize,
    initiationDate,
    completionDate,
    url
}: ChallengeCardProps) {
    const isFinished = isPast(completionDate);
    const isChallegeAvailable = isPast(initiationDate) && !isPast(completionDate);
    const [currentDate] = useState(completionDate);
    return (
        <a
            href={url}
            className={classNames("flex p-6 gap-2 rounded-md bg-gray-500 opacity-70", {
                'opacity-100': isChallegeAvailable,
            })}
            
        >
            <div className="flex align-start">
                <FlagIcon />
            </div>
            <div className="flex flex-col py-2 px-2 gap-4">
                <h2 className="text-3xl font-bold">
                    {title}
                </h2>
                <p className="text-md font-medium">
                    {description}
                </p>
                <div className="flex">
                    <span className="font-bold text-green-500 mr-2">Prêmio:</span>
                    <span className="text-md font-medium">{prize}</span>
                </div>
            </div>
            <div className="flex flex-col justify-end align-center">
                <span 
                    className={classNames("text-green-700 font-bold text-xs text-center", {
                        'text-green-400': isChallegeAvailable,
                    })}
                >
                    {isFinished &&  'FINALIZADO'}
                    {!isFinished && (
                        isChallegeAvailable
                        ?
                        'EM ANDAMENTO'
                        : 'EM BREVE')
                    }
                </span>
            </div>
        </a>
    );
}