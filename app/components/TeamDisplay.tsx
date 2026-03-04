import { Team } from "../actions/teams";

interface Props {
  initialData: Team[];
}
const TeamDisplay = ({ initialData }: Props) => {
  return (
    <div className="row">
      {initialData?.map((member) => (
        <div className="col-lg-4 col-md-6 col-sm-6">
          <div className="single-team-box">
            <div className="image">
              <img
                src={member.picture}
                alt={`${member.name} ${member.role.title} cecab`}
              />
            </div>

            <div className="content">
              <h3>{member.name}</h3>
              <span>{member.role.title}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TeamDisplay;
