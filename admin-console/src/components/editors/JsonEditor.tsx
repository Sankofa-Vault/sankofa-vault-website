import { useState, useEffect } from 'react';
import toast from 'react-hot-toast';

interface JsonEditorProps {
    initialData: any;
    onSave: (data: any) => void;
    title?: string;
}

export default function JsonEditor({ initialData, onSave, title = "Content Editor" }: JsonEditorProps) {
    const [jsonString, setJsonString] = useState('');
    const [isValid, setIsValid] = useState(true);

    useEffect(() => {
        if (initialData) {
            setJsonString(JSON.stringify(initialData, null, 2));
        }
    }, [initialData]);

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const value = e.target.value;
        setJsonString(value);

        try {
            JSON.parse(value);
            setIsValid(true);
        } catch (error) {
            setIsValid(false);
        }
    };

    const handleSave = () => {
        try {
            const parsed = JSON.parse(jsonString);
            onSave(parsed);
            toast.success('Content updated successfully!');
        } catch (error) {
            toast.error('Invalid JSON. Please fix errors before saving.');
        }
    };

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-white">{title}</h2>
                <button
                    onClick={handleSave}
                    disabled={!isValid}
                    className={`px-6 py-2 font-semibold rounded-lg transition-all whitespace-nowrap flex items-center ${isValid
                            ? 'bg-gradient-to-r from-amber-600 to-amber-500 text-white hover:from-amber-700 hover:to-amber-600'
                            : 'bg-gray-700 text-gray-500 cursor-not-allowed'
                        }`}
                >
                    <i className="ri-save-line mr-2"></i>
                    Save JSON
                </button>
            </div>

            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6">
                <div className="mb-4">
                    <div className={`text-sm mb-2 ${isValid ? 'text-green-500' : 'text-red-500'}`}>
                        {isValid ? 'Valid JSON' : 'Invalid JSON Syntax'}
                    </div>
                    <textarea
                        value={jsonString}
                        onChange={handleChange}
                        className={`w-full h-[600px] font-mono text-sm p-4 bg-gray-950 border rounded-lg focus:outline-none focus:ring-2 ${isValid ? 'border-gray-700 focus:ring-amber-500 text-gray-300' : 'border-red-500 focus:ring-red-500 text-red-300'
                            }`}
                    />
                </div>
            </div>
        </div>
    );
}
