import { useState, useEffect } from 'react';
import JsonEditor from '../../../components/editors/JsonEditor';
import { contentAPI } from '../../../utils/api';
import toast from 'react-hot-toast';

interface GenericPageEditorProps {
    pageKey: string;
    title: string;
}

export default function GenericPageEditor({ pageKey, title }: GenericPageEditorProps) {
    const [data, setData] = useState<any>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        loadData();
    }, [pageKey]);

    const loadData = async () => {
        try {
            setLoading(true);
            const content = await contentAPI.getContent(pageKey);
            setData(content);
        } catch (error) {
            console.error(`Failed to load ${pageKey} data:`, error);
            toast.error('Failed to load content');
        } finally {
            setLoading(false);
        }
    };

    const handleSave = async (newData: any) => {
        try {
            await contentAPI.updateContent(pageKey, newData);
            setData(newData);
            // toast success handled by JsonEditor or here? 
            // JsonEditor has a toast, but keeping it here is better for consistency. 
            // JsonEditor only toasts validation. 
            // Actually JsonEditor toasts "Content updated successfully" in my code.
        } catch (error) {
            console.error('Failed to save data:', error);
            toast.error('Failed to save changes');
        }
    };

    if (loading) {
        return (
            <div className="flex items-center justify-center h-screen">
                <div className="text-center">
                    <i className="ri-loader-4-line text-4xl text-amber-500 animate-spin"></i>
                    <p className="text-gray-400 mt-4">Loading content...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="p-8">
            <JsonEditor
                initialData={data}
                onSave={handleSave}
                title={title}
            />
        </div>
    );
}
