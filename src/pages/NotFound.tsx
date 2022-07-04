import { useNavigate } from 'react-router';

import notFoundImage from '~/assets/not_found_page.svg';

export function NotFoundPage() {
    const navigate = useNavigate(); 
    return (
        <div className="flex justify-center items-center h-screen w-screen bg-gray-700">
            <div className="flex flex-col max-w-[700px]">
                <img className="mb-6 w-screen h-auto" src={notFoundImage} alt="Not Found" />
                <h1
                    className="text-6xl font-bold text-white text-center mt-6"
                >
                    Página não encontrada
                </h1>
                <button
                    className="mt-8 bg-green-500 uppercase py-4 px-2 rounded font-bold text-md transition-colors hover:bg-green-700"
                    onClick={() => navigate('/')}
                >
                    Back to initial page
                </button>
            </div>
        </div>
    );
}