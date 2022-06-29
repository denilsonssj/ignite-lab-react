import { useParams } from 'react-router-dom';

import { Header } from '~/components/Header';
import { Sidebar } from '~/components/Sidebar';
import { Footer } from '~/components/Footer';
import { VideoPlayer } from '~/components/VideoPlayer';

type ParamsProps = {
    slug: string;
}

export function Event() {
    const { slug } = useParams<ParamsProps>();
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex flex-1">
                <div className="flex flex-col flex-1 min-h-screen space-between">
                    {slug
                    ? <VideoPlayer lessonSlug={slug} />
                    : <div className="flex justify-between flex-1" />
                    }
                    <Footer />
                </div>
                <Sidebar />
            </main>
        </div>
    );
}