import { Routes, Route } from 'react-router-dom';

import { Event } from '~/pages/Event';
import { Subscribe } from '~/pages/Subscribe';
import { ChallengesPage } from '~/pages/Challenges';
import { NotFoundPage } from './pages/NotFound';

export function Router() {
    return (
        <Routes>
            <Route path="/" element={<Subscribe />} />
            <Route path="/event" element={<Event />} />
            <Route path="/event/lesson/:slug" element={<Event />} />
            <Route path="/event/challenges" element={<ChallengesPage />} />
            <Route path="*" element={<NotFoundPage />} />
        </Routes>
    );
}