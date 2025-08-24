import { MdDeleteOutline } from "react-icons/md";

const List = ({ da, index, deleteTask, theme }) => {
    return (
        <div className={`flex justify-between items-center p-4 rounded-lg border transition-all hover:shadow-md ${
            theme === 'dark' 
                ? 'bg-gray-600 border-gray-500 hover:bg-gray-500' 
                : 'bg-gray-50 border-gray-200 hover:bg-gray-100'
        }`}>
            <h1 className={`font-medium ${
                theme === 'dark' ? 'text-white' : 'text-gray-800'
            }`}>
                {da}
            </h1>
            <button 
                onClick={() => deleteTask(index)}
                className={`p-2 rounded-lg transition-colors ${
                    theme === 'dark' 
                        ? 'text-red-400 hover:bg-red-400 hover:text-white' 
                        : 'text-red-500 hover:bg-red-500 hover:text-white'
                }`}
            >
                <MdDeleteOutline className="text-2xl" />
            </button>
        </div>
    );
};

export default List;