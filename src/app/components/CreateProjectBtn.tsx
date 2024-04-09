// In CreateProjectBtn component
type Props = {
  onClick: () => void;
};

const CreateProjectBtn: React.FC<Props> = ({ onClick }) => {
  return (
    <button
      className="border border-yellow-400 text-blue-400 px-12 py-1 hover:text-yellow-300 hover:bg-blue-700 rounded-md"
      onClick={onClick}
    >
      Add Shift
    </button>
  );
};

export default CreateProjectBtn;