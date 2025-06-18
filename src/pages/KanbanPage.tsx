import Kanban from "../components/kanban/Kanban";

const initialData = {
  Todo: [
    "Design UI mockups",
    "Set up project repository",
    "Write unit test",
    "Integrate payment gateway",
  ],
  "In Progress": ["Develop authentication flow", "Implement responsive design"],
  Completed: [
    "Set up CI/CD pipeline",
    "Conduct code reviews",
    "Deploy initial version to staging",
  ],
};

function KanbanPage() {
  return (
    <div className="flex h-screen justify-center items-center">
      <Kanban initialData={initialData} />
    </div>
  );
}
export default KanbanPage;
