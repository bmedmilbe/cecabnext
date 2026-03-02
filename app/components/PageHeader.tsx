import Link from "next/link";
interface OtherLink {
  title: string;
  link: string;
}
interface Props {
  title: string;
  image: string;
  other?: OtherLink[];
}
//images/about/cacau13.JPG
const PageHeader = ({ title, image, other }: Props) => {
  return (
    <div
      className="page-title-area"
      style={{ backgroundImage: `url('${image}')` }}
    >
      <div className="d-table">
        <div className="d-table-cell">
          <div className="container">
            <div className="page-title-content">
              <h2>{title}</h2>
              <ul>
                <li>
                  <Link href="/">
                    <span>Início</span>
                  </Link>
                </li>
                {other?.map((o) => (
                  <li>
                    <Link href={o.link}>{o.title}</Link>
                  </li>
                ))}
                <li>{title}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageHeader;
