import InputError from '@/Components/InputError';
import PrimaryButton from '@/Components/PrimaryButton';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, useForm } from '@inertiajs/react';

export default function Dashboard({ teams }) {

        const { data, setData, post, get, put, processing, reset, errors } = useForm({
            name: '',
        });

        const submit = (e) => {
            e.preventDefault();
            post(route('team.store'), { onSuccess: () => reset() });
        };

        const changeStatus = (e, teamId) => {
            e.preventDefault();
            put(route('team.modstatus', { id: teamId }), { onSuccess: () => reset() });
        };

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Dashboard
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <div className="max-w-2xl mx-auto p-4 sm:p-6 lg:p-8">
                                <form onSubmit={submit}>
                                    <input
                                        type='text'
                                        value={data.name}
                                        placeholder="Cadastre um time do brasileirão."
                                        className="block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm"
                                        onChange={e => setData('name', e.target.value)}
                                        name='name'
                                    />
                                    <label>
                                        <for>Ativo</for>
                                        <input type='radio' name='status'/>
                                    </label>
                                    <label>
                                        <for>Inativo</for>
                                        <input type='radio' name='status'/>
                                    </label>
                                    <InputError name={errors.name} className="mt-2" />
                                    <PrimaryButton className="mt-4" disabled={processing}>Salvar</PrimaryButton>
                                </form>
                                <div className="mt-6 bg-white shadow-sm rounded-lg divide-y">
                                        {teams.map( team =>
                                            <form key={team.id} onSubmit={(e) => changeStatus(e, team.id)}>
                                                <div className="flex items-center justify-between mt-2">
                                                    <span className="text-lg font-semibold text-gray-800" >{team.name}</span>
                                                    <button
                                                    type='submit'
                                                    className={`px-4 py-2 rounded-md font-semibold ${team.status == 'Ativo' ? 'bg-green-500 text-white' : 'bg-red-500 text-white'} hover:bg-opacity-80 transition duration-300`}
                                                    >{team.status}</button>

                                                    <input
                                                    type='hidden'
                                                    value={team.id}
                                                    name="id"
                                                    />
                                                </div>
                                            </form>
                                        )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
