import { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import { AuthContext } from '../../contexts/AuthContext'
import { ToastAlert } from '../../utils/ToastAlert'
import Titulo from '../../components/titulo/Titulo'
import IconeRedondo from '../../components/iconeredondo/IconeRedondo'

import Logo from '../../assets/images/icon_branco_bg_vermelho.png';
import { Bell, ChatCircleDots, CreditCard, Gear, MapPin, MoneyWavy, Question, Shield } from '@phosphor-icons/react'
import Texto from '../../components/texto/Texto'

function Perfil() {

    const navigate = useNavigate()

    const { usuario } = useContext(AuthContext)

    // useEffect(() => {
    //     if (usuario.token === "") {
    //         ToastAlert('Você precisa estar logado', 'info')
    //         navigate("/")
    //     }
    // }, [usuario.token])

    return (
        <div className='container mx-auto m-4 rounded-2xl overflow-hidden'>

            <div className='flex flex-row'>
                <IconeRedondo link={Logo} />
                <Titulo texto='Nome do usuário'/>
            </div>

            <div className='flex flex-row'>
                <ChatCircleDots size={32} />
                <Texto cor='text-gray-600 font-bold' texto='Conversas' />
                <Texto cor='text-gray-600' texto='Meu histórico de conversas' />
            </div>

            <div className='flex flex-row'>
                <Bell size={32} />
                <Texto cor='text-gray-600 font-bold' texto='Conversas' />
                <Texto cor='text-gray-600' texto='Meu histórico de conversas' />
            </div>

            <div className='flex flex-row'>
                <CreditCard size={32} />
                <Texto cor='text-gray-600 font-bold' texto='Conversas' />
                <Texto cor='text-gray-600' texto='Meu histórico de conversas' />
            </div>

            <div className='flex flex-row'>
                <MoneyWavy size={32} />
                <Texto cor='text-gray-600 font-bold' texto='Conversas' />
                <Texto cor='text-gray-600' texto='Meu histórico de conversas' />
            </div>

            <div className='flex flex-row'>
                <Gear size={32} />
                <Texto cor='text-gray-600 font-bold' texto='Conversas' />
                <Texto cor='text-gray-600' texto='Meu histórico de conversas' />
            </div>

            <div className='flex flex-row'>
                <Shield size={32} /> 
                <Texto cor='text-gray-600 font-bold' texto='Conversas' />
                <Texto cor='text-gray-600' texto='Meu histórico de conversas' />
            </div>

            <div className='flex flex-row'>
                <Question size={32} /> 
                <Texto cor='text-gray-600 font-bold' texto='Conversas' />
                <Texto cor='text-gray-600' texto='Meu histórico de conversas' />
            </div>
            
            <div className='flex flex-row'>
                <MapPin size={32} /> 
                <Texto cor='text-gray-600 font-bold' texto='Conversas' />
                <Texto cor='text-gray-600' texto='Meu histórico de conversas' />
            </div>

        </div>
    )
}

export default Perfil