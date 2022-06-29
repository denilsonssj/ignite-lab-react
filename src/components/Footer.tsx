import logoRocketImg from '~/assets/logo-rocketseat.png';

export function Footer() {
    return (
        <div className="flex flex-col w-full px-8 bg-black">
            <div className="flex w-full items-center h-[60px] border-t border-gray-600">
                <div className="flex justify-between items-center w-full">
                    <div className="flex items-center gap-4">
                        <img className="h-8" src={logoRocketImg} alt="Logo Rocketseat" />
                        <span className="text-sm text-gray-200">Rocketseat - Todos os direitos reservados</span>
                    </div>
                    <a href="#" className="text-sm text-gray-200">Políticas de privacidade</a>
                </div>
            </div>
        </div>
    );
}