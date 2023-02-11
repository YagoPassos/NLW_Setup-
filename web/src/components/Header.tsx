import { Plus, X } from 'phosphor-react'
import * as Dialog from '@radix-ui/react-dialog'
import logoImage from '../assets/logo.svg'
import { NewHabit } from './NewHabit'

export function Header() {
    return (
        <div className='w-full max-w-3xl mx-auto flex items-center justify-between'>
            <img src={logoImage} alt="Habits" />

            <Dialog.Root>
                <Dialog.Trigger
                    type='button'
                    className='focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2 focus:ring-offset-background first-letter:transition-colors border border-violet-500 font-semibold rounded-lg px-6 py-4 flex items-center gap-3 hover:border-violet-300'>

                    <Plus size={20} className='text-violet- 500' />

                    Novo Hábito
                </Dialog.Trigger>

                <Dialog.Portal>
                    <Dialog.Overlay className='w-screen h-screen bg-black/80 fixed inset-0'/>
                    <Dialog.Content className='absolute p-10 bg-zinc-900 rounded-2xl w-full max-w-md top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                        <Dialog.Close>
                            <X size={24} aria-label="Fechar" className='absolute top-6 right-6 text-zinc-400 hover:text-zinc-200'/>
                        </Dialog.Close>
                        <Dialog.Title className='text-3xl leading-tight font-extrabold'>
                            Criar hábito
                        </Dialog.Title>

                        <NewHabit/>
                    </Dialog.Content>
                </Dialog.Portal>
            </Dialog.Root>
        </div>
    )
}