import { ChallengeCard } from '~/components/ChallengeCard';
import { Footer } from '~/components/Footer';
import { Header } from '~/components/Header';
import challengePrizeIcon from '~/assets/challenge-prize.png';
import { useGetChallengesQuery } from '~/graphql/generated';

export function ChallengesPage() {
    const { data } = useGetChallengesQuery();
    return (
        <div className="flex flex-col w-full h-full">
            <Header />
            <main className="self-center pt-16">
                <div className="flex-1 max-w-[740px]">
                    <div className="flex">
                        <div className="flex flex-col gap-6">
                            <h2 className="text-5xl font-bold">Missions checkpoints</h2>
                            <span className="text-medium">
                                Conclua as etapas da missão e concorra a 20 camisetas da Rocketseat.
                            </span>
                        </div>
                        <img src={challengePrizeIcon} alt="Prêmio do desafio" />
                    </div>
                    <div className="flex flex-col my-6 gap-6">
                        {data?.challenges.map(challege => (
                            <ChallengeCard
                                key={challege.title}
                                title={challege.title}
                                description={challege.description as string}
                                prize={challege.prize}
                                initiationDate={new Date(challege.initiationDate)}
                                completionDate={new Date(challege.completionDate)}
                                url={challege.url}
                            />
                        ))}
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}